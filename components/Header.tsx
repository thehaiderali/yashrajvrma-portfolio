import Image from "next/image";
import profileImg from "../public/assets/images/profile.png";

export default function Header() {
  return (
    <div className="flex py-4 gap-x-2">
      <div className="flex justify-between w-full">
        <div className="flex flex-col justify-center">
          <div className="text-2xl font-semibold">
           Haider Ali
          </div>
          <div className="text-sm text-secondary/60">@thehaiderali</div>
        </div>
        <div className=" h-[76px] w-[76px] rounded-full overflow-hidden">
          <Image
            src={profileImg}
            alt="profile-img"
            className="w-full h-full object-cover"
            quality={100}
          />
        </div>
      </div>
    </div>
  );
}
