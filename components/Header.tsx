import Image from "next/image";
import profileImg from "../public/assets/images/profile.png";

export default function Header() {
  return (
    <div className="flex py-4 gap-x-2">
      <div className="flex justify-between w-full">
        <div className="flex flex-col justify-center">
          <div className="text-lg font-semibold">
            HAIDER ALI
          </div>
          <div className="text-sm text-secondary/60">@thehaiderali</div>
        </div>

        {/* like and views component component */}
        {/* <div className="flex gap-x-4 pt-2 text-sm">
          <div className="flex justify-center items-center gap-x-2">
            <ButtonGroup>
              <Button variant="outline">Button</Button>
              <ButtonGroupSeparator />
              <Button size="icon" variant="outline">
                <HeartIcon />
              </Button>
            </ButtonGroup>
          </div>
          <div className="flex justify-center items-center gap-x-2">
            <ChartNoAxesColumn className="w-4 h-4" />
            200
          </div>
          <div className="text-primary-foreground">ii</div>
        </div> */}
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
