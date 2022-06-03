import ISkillData from "../interfaces/skill-data";

// Current Skills
import htmlIcon from "../images/logos/logo-html5.svg";
import cssIcon from "../images/logos/logo-css.svg";
import reactIcon from "../images/logos/logo-react.svg";
import nodejsIcon from "../images/logos/logo-nodejs.svg";
import mongodbIcon from "../images/logos/logo-mongodb.svg";
import expressjsIcon from "../images/logos/logo-expressjs.svg";

// Basic Skills
import pythonIcon from "../images/logos/logo-python.svg";
import cppIcon from "../images/logos/logo-cpp.svg";
import csharpIcon from "../images/logos/logo-csharp.svg";

// Basic Skills
import typescriptIcon from "../images/logos/logo-typescript.svg";
import sassIcon from "../images/logos/logo-sass.svg";
import solidIcon from "../images/logos/logo-solidjs.svg";

export const currentlyUsedSkills: Array<ISkillData> = [
  {
    name: "HTML",
    icon: htmlIcon,
  },
  {
    name: "CSS",
    icon: cssIcon,
  },
  {
    name: "React.js",
    icon: reactIcon,
  },
  {
    name: "Node.js",
    icon: nodejsIcon,
  },
  {
    name: "MongoDB",
    icon: mongodbIcon,
  },
  {
    name: "Express.js",
    icon: expressjsIcon,
  },
];

export const basicSkills: Array<ISkillData> = [
  {
    name: "Python",
    icon: pythonIcon,
  },
  {
    name: "C++",
    icon: cppIcon,
  },
  {
    name: "C#",
    icon: csharpIcon,
  },
];

export const currentlyLearningSkills: Array<ISkillData> = [
  {
    name: "TypeScript",
    icon: typescriptIcon,
  },
  {
    name: "Sass",
    icon: sassIcon,
  },
  {
    name: "Solid.js",
    icon: solidIcon,
  },
];
