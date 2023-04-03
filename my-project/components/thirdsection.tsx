import Image from "next/image";
import myImage from "../images/hero-devices.svg";

export const ThirdSection = () => {
  return (
    <div className="bg-white flex justify-center pt-20">
      <Image src={myImage} alt="hello" className="w-[1000px]" />
    </div>
  );
};
