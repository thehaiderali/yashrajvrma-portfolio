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
      <div className="flex justify-center bg-foreground text-primary-foreground text-sm min-h-screen relative px-2 sm:px-4">
        <div className="relative sm:max-w-xl w-full min-h-screen h-full">
          <div className="flex flex-col w-full h-full mt-20">
            <Navbar />
            <div className="flex-1 flex flex-col px-6 py-8">
              <h1 className="text-2xl font-bold mb-4">Post not found</h1>
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
    <div className="flex justify-center bg-foreground text-primary-foreground text-sm min-h-screen relative px-2 sm:px-4">
      <div className="relative m-3 sm:max-w-xl w-full">
        <div className="flex flex-col w-full mt-20">
          <Navbar />

          <div className="flex-1 flex flex-col px-6 py-8">
            <Link href="/blog" className="text-secondary-foreground hover:underline mb-6 inline-block text-xs">
              ← Back to blog
            </Link>

            <article>
              <header className="mb-8 pb-6 border-b border-border">
                <h1 className="text-xl font-bold mb-3">{blog.title}</h1>
                <p className="text-primary-foreground/60 text-xs">
                  {new Date(blog.dateAdded).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              </header>

              <div
                className="prose prose-invert max-w-none text-primary-foreground/80 leading-relaxed text-md space-y-4"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </article>
          </div>
        </div>
      </div>
    </div>
  )
}
