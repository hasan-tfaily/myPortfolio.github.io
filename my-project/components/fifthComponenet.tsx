import { AIDeveloper } from "./whatIDo/AIDeveloper";
import { Experience } from "./whatIDo/experience";
import { FrontEndDeveloper } from "./whatIDo/frontEndDeveloper";

export interface FifthcomponenetProp {}

export const FifthCoponenet = ({}: FifthcomponenetProp) => {
  return (
    <div className="!bg-white text-black grid grid-cols-3 rounded-lg shadow-lg">
      <FrontEndDeveloper />

      <AIDeveloper />

      <Experience />
    </div>
  );
};
