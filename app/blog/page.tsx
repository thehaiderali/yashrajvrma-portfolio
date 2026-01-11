import Link from "next/link"
import Navbar from "@/components/Navbar"
import blogs from "../../content/blogs.json"
export const metadata = {
  title: "Blog",
  description: "Read my blog posts about tech, AI, and learning",
}

export default function BlogPage() {
  return (
    <div className="flex justify-center bg-foreground text-primary-foreground text-sm min-h-screen relative px-2 sm:px-4">
      <div className="relative  m-3 sm:max-w-xl w-full min-h-screen h-full">
        <div className="flex flex-col w-full h-full mt-20">
          <Navbar />

          <div className="flex-1 flex flex-col px-6 py-8">
            <div className="mb-8">
              <h1 className="text-2xl font-bold mb-2">Blog</h1>
              <p className="text-primary-foreground/60 text-xs">Thoughts on tech, learning, and creative writing</p>
            </div>

            <div className="space-y-4">
              {blogs.map((blog) => (
<article
  key={blog.slug}
  className="p-4 hover:bg-secondary transition-colors group"
>
  <Link href={`/blog/${blog.slug}`} className="block">
    <h2 className="font-bold mb-2 group-hover:underline group-hover:text-black">
      {blog.title}
    </h2>
    <p className="text-primary-foreground/50 text-xs mb-3 group-hover:text-black">
      {new Date(blog.dateAdded).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}
    </p>
    <p className="text-primary-foreground/70 text-xs leading-relaxed line-clamp-3 group-hover:text-black">
      {blog.brief}
    </p>
  </Link>
</article>


              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
