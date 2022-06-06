import { Component } from "solid-js";
import IProjectCardData from "../interfaces/project-card-data";

import "./ProjectCard.scss";

const ProjectCard: Component<IProjectCardData> = (data: IProjectCardData) => {
  return (
    <article class="ProjectCard">
      <img
        class="ProjectCard__thumbnail"
        src={data.thumbnail}
        alt={`${data.name} thumbnail`}
      />
      <h2 class="ProjectCard__caption">{data.name}</h2>
      <p class="ProjectCard__description">{data.description}</p>
      <a class="ProjectCard__repo-link" href={data.repoUrl} target="_blank" rel="noreferrer">Github Repository</a>
    </article>
  );
};

export default ProjectCard;
