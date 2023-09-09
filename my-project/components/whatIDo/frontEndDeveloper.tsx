import { AIicon } from "@/images/aiIcon";
import { FDicon } from "@/images/icon";

export interface FrontEndDeveloperProps {}

export const FrontEndDeveloper = ({}: FrontEndDeveloperProps) => {
  return (
    <div className="text-center border-r p-10">
      <div className="">
        <div className=" w-20 bg-green-400 rounded-full p-3 mx-auto">
          <FDicon />
        </div>
      </div>
      <div className="pt-5">
        <h1 className="text-center font-black text-xl">FRONTEND DEVELOPER</h1>
      </div>
      <div className="pt-5">
        <p>
          I like to code things from scratch, and enjoy bringing ideas to life
          in the browser.
        </p>
      </div>
      <div className="  pt-10 ">
        <h1 className="text-primary text-lg">Languages I speak:</h1>
        <p> HTML, CSS, Javasript, Git, TailwindCss, Typscript, JAVA, PYTHON</p>
      </div>
      <div className="  pt-10 ">
        <h1 className="text-primary text-lg">Dev Tools:</h1>
        <p> Nextjs</p>
        <p> Tailwindcss</p>
        <p>Reactjs</p>
        <p> nodeJs</p>
      </div>
    </div>
  );
};
