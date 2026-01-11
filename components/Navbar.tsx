import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="flex gap-6 pb-8  mb-4">
      <Link href="/" className="hover:underline transition-colors text-primary-foreground text-xs font-medium">
        Home
      </Link>
      <Link href="/blog" className="hover:underline transition-colors text-primary-foreground text-xs font-medium">
        Blog
      </Link>
    </nav>
  )
}
