import Image from "next/image";
import myImage from "../images/hacker.png";

export const SecondSection = () => {
  return (
    <div className="bg-white text-black flex justify-center pt-10">
      <div>
        <h1 className="text-4xl text-center">
          {" "}
          <strong>Developer, Frontend Developer & Data scientist</strong>
        </h1>

        <p className="text-center	text-lg pt-5 pb-20">
          I design and code beautifully simple things, and I love what I do.
        </p>
        <div className="flex justify-center">
          <div className="w-40 h-40 rounded-full bg-primary relative ">
            <Image src={myImage} className=" absolute bottom-2" alt="my pic" />
          </div>
        </div>
      </div>
    </div>
  );
};
