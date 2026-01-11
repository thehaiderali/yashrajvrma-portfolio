// HOME PAGE
import Bio from "@/components/Bio";
import Header from "@/components/Header";
import Links from "@/components/Links";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex justify-center bg-foreground text-primary-foreground text-sm min-h-screen relative px-2 sm:px-4">
      <div className="relative sm:max-w-xl w-full min-h-screen h-full">
        <div className="flex flex-col w-full h-full mt-20">
          <Navbar />
          <Header />
          <Bio />
          <Links />
        </div>
      </div>
    </div>
  );
}