import ISkillData from "../interfaces/skill-data";

// Current Skills
import HTMLIcon from "../components/icons/skills/HTMLIcon";
import CSSIcon from "../components/icons/skills/CSSIcon";
import ReactIcon from "../components/icons/skills/ReactIcon";
import NodeJsIcon from "../components/icons/skills/NodeJsIcon";
import MongoDBIcon from "../components/icons/skills/MongoDBIcon";
// import expressjsIcon from "../images/logos/logo-expressjs.svg";
import ExpressJsIcon from "../components/icons/skills/ExpressJsIcon";

// Basic Skills
import pythonIcon from "../images/logos/logo-python.svg";
import CPPIcon from "../components/icons/skills/CPPIcon";
import csharpIcon from "../images/logos/logo-csharp.svg";

// Learning Skills
import typescriptIcon from "../images/logos/logo-typescript.svg";
import sassIcon from "../images/logos/logo-sass.svg";
import solidIcon from "../images/logos/logo-solidjs.svg";
import kotlinIcon from "../images/logos/logo-kotlin.svg";

export const currentlyUsedSkills: Array<ISkillData> = [
  {
    name: "HTML",
    icon: HTMLIcon,
  },
  {
    name: "CSS",
    icon: CSSIcon,
  },
  {
    name: "React.js",
    icon: ReactIcon,
  },
  {
    name: "Node.js",
    icon: NodeJsIcon,
  },
  {
    name: "MongoDB",
    icon: MongoDBIcon,
  },
  {
    name: "Express.js",
    icon: ExpressJsIcon,
  },
];

export const basicSkills: Array<ISkillData> = [
  // {
  //   name: "Python",
  //   icon: pythonIcon,
  // },
  {
    name: "C++",
    icon: CPPIcon,
  },
  // {
  //   name: "C#",
  //   icon: csharpIcon,
  // },
  // {
  //   name: "Solid.js",
  //   icon: solidIcon,
  // },
  // {
  //   name: "TypeScript",
  //   icon: typescriptIcon,
  // },
  // {
  //   name: "Sass",
  //   icon: sassIcon,
  // },
];

export const currentlyLearningSkills: Array<ISkillData> = [
  // {
  //   name: "Kotlin",
  //   icon: kotlinIcon
  // },
];
