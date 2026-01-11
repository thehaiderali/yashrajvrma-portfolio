import Link from "next/link"
import Navbar from "@/components/Navbar"
import blogs from "../../../content/blogs.json"

type BlogPost = (typeof blogs)[number]

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug
  const blog = blogs.find((b) => b.slug === slug)

  if (!blog) {
    return {
      title: "Post not found",
    }
  }

  return {
    title: blog.metaTitle,
    description: blog.metaDescription,
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  const blog = blogs.find((b) => b.slug === slug) as BlogPost | undefined

  if (!blog) {
    return (
      <div className="flex justify-center bg-foreground text-primary-foreground min-h-screen relative px-0 sm:px-0">
        <div className="relative w-full max-w-3xl min-h-screen">
          <div className="flex flex-col w-full mt-20">
            <Navbar />
            <div className="flex-1 flex flex-col px-4 py-6">
              <h1 className="text-xl font-bold mb-4">Post not found</h1>
              <Link href="/blog" className="text-secondary-foreground hover:underline text-xs">
                ← Back to blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex justify-center bg-foreground text-primary-foreground min-h-screen relative px-0 sm:px-0">
      <div className="relative w-full max-w-3xl">
        <div className="flex flex-col w-full mt-20">
          <Navbar />

          <div className="flex-1 flex flex-col py-6">
            <Link href="/blog" className="text-secondary-foreground hover:underline mb-4 inline-block text-[0.625rem]">
              ← Back to blog
            </Link>

            <article className="px-4">
              <header className="mb-4 pb-2 border-b border-border">
                <h1 className="text-xl font-bold mb-1">{blog.title}</h1>
                <p className="text-primary-foreground/60 text-xs">
                  {new Date(blog.dateAdded).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              </header>

              <div
                className="prose prose-invert text-primary-foreground/80 leading-snug text-base space-y-4 max-w-full px-0"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </article>
          </div>
        </div>
      </div>
    </div>
  )
}
