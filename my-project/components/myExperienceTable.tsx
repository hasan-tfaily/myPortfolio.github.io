import Image from "next/image";
import myImage from "../images/programming.png";
export interface ExpTableprops {
  icon?: any;
  title?: string;
  description?: string;
  subtitle?: string;
  description1?: string;
  subtitle1?: string;
  description2?: any;
}

export const ExpTable = (props: ExpTableprops) => {
  return (
    <div className="bg-white rounded-lg shadow flex mx-10">
      <div className="w-1/3  ">
        <div className="flex justify-center">
          <div className="w-14 h-14 rounded-full bg-primary relative flex justify-center ">
            <Image src={myImage} alt="" className=" py-2 px-1" />
          </div>
        </div>
        <div className="text-black text-center">
          <h1 className="text-xl py-3 ">
            {" "}
            <strong>Developer</strong>
          </h1>
          <p className="pb-10">
            I value simple content structure, clean design patterns, and
            thoughtful interactions.
          </p>
          <h1 className="text-primary">Things I enjoy designing:</h1>
          <p className="pb-10">UX, UI, Web, Apps, Logos</p>
          <h1 className="text-primary">Design Tools:</h1>
          <ul>
            <li>Affinity Designer</li>
            <li>Figma</li>
            <li>Font Awesome</li>
            <li>Pen & Paper</li>
            <li>Sketch</li>
          </ul>
        </div>
      </div>
      <div className="border-r border-gray-300"></div>
    </div>
  );
};
