import { AIicon } from "@/images/aiIcon";
import { ExpIcon } from "@/images/expIcon";

export interface ExperienceProps {}

export const Experience = ({}: ExperienceProps) => {
  return (
    <div className="text-center p-10">
      <div className="">
        <div className=" w-20 bg-green-400 rounded-full p-3 mx-auto">
          <ExpIcon />
        </div>
      </div>
      <div className="pt-5">
        <h1 className="text-center font-black text-xl">KNOWLEDG IS POWER</h1>
      </div>
      <div className="pt-5">
        <p>BS in CS graduate from the Lebanese American University</p>
      </div>
      <div className="  pt-10 ">
        <h1 className="text-primary text-lg">Experiences I have:</h1>
        <p>FrontEnd developer, Freelancing</p>
      </div>
      <div className="  pt-10 ">
        <h1 className="text-primary text-lg">Stats:</h1>
        <p> +1 year as frontend developer</p>
        <p> 3 short courses</p>
        <p>1 bootcamp</p>
      </div>
    </div>
  );
};
