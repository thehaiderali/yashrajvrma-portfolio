import Link from "next/link";
import {
  EnvelopeSimpleIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
  ReadCvLogoIcon,
  XLogoIcon,
} from "@phosphor-icons/react/dist/ssr";

export default function Links() {
  return (
    <div className="flex flex-col gap-y-2 mt-8">
      <div className="text-xs text-secondary">LINKS</div>
      <div className="flex flex-wrap sm:flex-nowrap justify-center items-center sm:max-w-xl max-w-sm gap-x-3">
        <button className="flex justify-center items-center rounded-none hover:bg-muted-foreground text-secondary p-3">
        </button>
        <button className="flex justify-center items-center rounded-none hover:bg-muted-foreground text-secondary p-3">
          <Link
            href="hyder6291@gmail.com"
            target="_blank"
            className="flex items-center gap-x-1 hover:scale-110 transition duration-200 ease-in-out transform"
          >
            <EnvelopeSimpleIcon size={22} />
            Mail
          </Link>
        </button>
        <button className="flex justify-center items-center rounded-none hover:bg-muted-foreground text-secondary p-3">
          <Link
            href="https://github.com/thehaiderali"
            target="_blank"
            className="flex items-center gap-x-1 hover:scale-110 transition duration-200 ease-in-out transform"
          >
            <GithubLogoIcon size={22} />
            Github
          </Link>
        </button>
        <button className="flex justify-center items-center rounded-none hover:bg-muted-foreground text-secondary p-3">
          <Link
            href="https://x.com/thehaderali"
            target="_blank"
            className="flex items-center gap-x-1 hover:scale-110 transition duration-200 ease-in-out transform"
          >
            <XLogoIcon size={22} />
            Twitter
          </Link>
        </button>
        <button className="flex justify-center items-center rounded-none hover:bg-muted-foreground text-secondary p-3">
          <Link
            href="https://www.linkedin.com/in/thehaideraly/"
            target="_blank"
            className="flex items-center gap-x-1 hover:scale-110 transition duration-200 ease-in-out transform"
          >
            <LinkedinLogoIcon size={22} />
            Linkedin
          </Link>
        </button>
      </div>
    </div>
  );
}
