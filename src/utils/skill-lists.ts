import ISkillData from "../interfaces/skill-data";

// Current Skills
import HTMLIcon from "../components/icons/skills/HTMLIcon";
import CSSIcon from "../components/icons/skills/CSSIcon";
import ReactIcon from "../components/icons/skills/ReactIcon";
import NodeJsIcon from "../components/icons/skills/NodeJsIcon";
import MongoDBIcon from "../components/icons/skills/MongoDBIcon";
import ExpressJsIcon from "../components/icons/skills/ExpressJsIcon";

// Basic Skills
import PythonIcon from "../components/icons/skills/PythonIcon";
import CPPIcon from "../components/icons/skills/CPPIcon";
import CSharpIcon from "../components/icons/skills/CSharpIcon";
import SolidJsIcon from "../components/icons/skills/SolidJsIcon";
import TypeScriptIcon from "../components/icons/skills/TypeScriptIcon";
import SassIcon from "../components/icons/skills/SassIcon";

// Learning Skills
import KotlinIcon from "../components/icons/skills/KotlinIcon";

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
  {
    name: "Python",
    icon: PythonIcon,
  },
  {
    name: "C++",
    icon: CPPIcon,
  },
  {
    name: "C#",
    icon: CSharpIcon,
  },
  {
    name: "Solid.js",
    icon: SolidJsIcon,
  },
  {
    name: "TypeScript",
    icon: TypeScriptIcon,
  },
  {
    name: "Sass",
    icon: SassIcon,
  },
];

export const currentlyLearningSkills: Array<ISkillData> = [
  {
    name: "Kotlin",
    icon: KotlinIcon
  },
];
