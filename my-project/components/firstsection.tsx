import Image from "next/image";
import myImage from "../images/coding.png";

export const FirstSection = () => {
  return (
    <div className="bg-white flex justify-between px-20 pt-5">
      <Image src={myImage} alt="My Image" className=" w-14" />
      <div>
        <button
          className="hover:text-primary transition-colors duration-200 text-black font-sans text-sm px-5"
          onClick={() =>
            window.open("https://www.linkedin.com/in/hasan-tfaily-548bb6191/")
          }
        >
          My Linkedin Profile
        </button>
        <button
          className="rounded-full border-primary text-black font-sans text-sm border text-primary py-2 transition-colors duration-200 px-5 hover:bg-primary hover:text-white"
          onClick={() => {
            const link = document.createElement("a");
            link.href = "/images/myCV.pdf";
            link.download = "myCV.pdf";
            link.click();
          }}
        >
          My CV
        </button>
      </div>
    </div>
  );
};
