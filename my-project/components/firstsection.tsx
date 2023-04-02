import Image from "next/image";
import myImage from "../images/coding.png";

export const FirstSection = () => {
  return (
    <div className="bg-white flex justify-between px-20 pt-5">
      <Image src={myImage} alt="My Image" className=" w-14" />
      <div>
        <button className="hover:text-primary text-black font-sans text-sm px-5">
          Menotership
        </button>
        <button className=" rounded-full border-primary text-black font-sans text-sm border text-primary py-2 transition-colors duration-200 px-5 hover:bg-primary hover:text-white">
          {" "}
          say hello
        </button>
      </div>
    </div>
  );
};
