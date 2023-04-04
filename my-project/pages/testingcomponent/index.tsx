import { ExpTable, ExpTableprops } from "@/components/myExperienceTable";
import icon1 from "../../images/programming.png";

export default function Home() {
  return (
    <div>
      <ExpTable />
    </div>
  );
}

export const data: ExpTableprops[] = [
  {
    icon: { icon1 },
    title: "Developer",
    description:
      " I value simple content structure, clean design patterns, and thoughtful interactions.",
    subtitle: " Things I enjoy designing:",
    description1: "UX, UI, Web, Apps, Logos",
    subtitle1: " Design Tools:",
    description2: (
      <ul>
        <li>Affinity Designer</li>
        <li>Figma</li>
        <li>Font Awesome</li>
        <li>Pen & Paper</li>
        <li>Sketch</li>
      </ul>
    ),
  },
  {
    icon: { icon1 },
    title: "Developer",
    description:
      " I value simple content structure, clean design patterns, and thoughtful interactions.",
    subtitle: " Things I enjoy designing:",
    description1: "UX, UI, Web, Apps, Logos",
    subtitle1: " Design Tools:",
    description2: (
      <ul>
        <li>Affinity Designer</li>
        <li>Figma</li>
        <li>Font Awesome</li>
        <li>Pen & Paper</li>
        <li>Sketch</li>
      </ul>
    ),
  },
];
