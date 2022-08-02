import IProjectCardData from "../interfaces/project-card-data";

import newsExplorerThumbnail from "../images/project-tumbnails/news-explorer-screenshot.webp";
import aroundTheUsThumbnail from "../images/project-tumbnails/around-the-us-screenshot.webp";
import npmLogo from "../images/project-tumbnails/npm-logo.webp";

const projectsList: Array<IProjectCardData> = [
  {
    name: "News Explorer",
    thumbnail: newsExplorerThumbnail,
    description: "Search & bookmark your favourite news articles.",
    repoUrl: "https://github.com/synthetic-borealis/news-explorer-frontend",
  },
  {
    name: "Around the U.S.",
    thumbnail: aroundTheUsThumbnail,
    description: "An image sharing app for travel lovers.",
    liveUrl: "https://synthetic-borealis.github.io/react-around-api-full",
    repoUrl: "https://github.com/synthetic-borealis/react-around-api-full",
  },
  {
    name: "Hirnfick",
    thumbnail: npmLogo,
    description: "A Brainfuck source-to-source compiler & library that can be embedded in websites and Node.js apps. It can be downloaded from Github and via NPM.",
    repoUrl: "https://github.com/synthetic-borealis/hirnfick.js",
  },
];

export default projectsList;
