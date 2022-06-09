import { Component, Show } from "solid-js";
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
      <ul class="ProjectCard__link-container">
        <Show when={data.liveUrl}>
          <li class="ProjectCard__link-wrapper">
            <a class="ProjectCard__link" href={data.liveUrl} target="_blank" rel="noreferrer">Live Site</a>
          </li>
        </Show>
        <Show when={data.repoUrl}>
          <li class="ProjectCard__link-wrapper">
            <a class="ProjectCard__link" href={data.repoUrl} target="_blank" rel="noreferrer">Source Code</a>
          </li>
        </Show>
      </ul>
    </article>
  );
};

export default ProjectCard;
