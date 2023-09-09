import { AIicon } from "@/images/aiIcon";

export interface AIDeveloperProps {}
export const AIDeveloper = ({}: AIDeveloperProps) => {
  return (
    <div className="text-center border-r p-10">
      <div className="">
        <div className=" w-20 bg-green-400 rounded-full p-3 mx-auto">
          <AIicon />
        </div>
      </div>
      <div className="pt-5">
        <h1 className="text-center font-black text-xl">
          MACHINE LEARNING DEVELOPER
        </h1>
      </div>
      <div className="pt-5">
        <p>I have build several models in Machine Learning</p>
      </div>
      <div className="  pt-10 ">
        <h1 className="text-primary text-lg">Languages:</h1>
        <p>R, PYTHON</p>
      </div>
      <div className="  pt-10 ">
        <h1 className="text-primary text-lg">Projects:</h1>
        <p> Models that predict house pricing </p>
        <p> Model that predict the car price</p>
        <p>
          Class room detecting Model which intereacts with student and give info
          about them
        </p>
      </div>
    </div>
  );
};
