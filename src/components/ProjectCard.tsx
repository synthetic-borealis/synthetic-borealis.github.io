import { Show } from 'solid-js';
import IProjectCardData from '../interfaces/project-card-data';

import './ProjectCard.scss';

export default function ProjectCard(data: IProjectCardData) {
  return (
    <article class="ProjectCard">
      <img class="ProjectCard__thumbnail" src={data.thumbnail} alt={`${data.name} thumbnail`} />
      <h2 class="ProjectCard__caption">{data.name}</h2>
      <p class="ProjectCard__description">{data.description}</p>
      <ul class="ProjectCard__link-container">
        <Show when={data.liveUrl} keyed>
          <li class="ProjectCard__link-wrapper">
            <a class="ProjectCard__link" href={data.liveUrl} target="_blank" rel="noreferrer">
              Live Site
            </a>
          </li>
        </Show>
        <Show when={data.swaggerUrl} keyed>
          <li class="ProjectCard__link-wrapper">
            <a class="ProjectCard__link" href={data.swaggerUrl} target="_blank" rel="noreferrer">
              Swagger
            </a>
          </li>
        </Show>
        <Show when={data.repoUrl} keyed>
          <li class="ProjectCard__link-wrapper">
            <a class="ProjectCard__link" href={data.repoUrl} target="_blank" rel="noreferrer">
              Source Code
            </a>
          </li>
        </Show>
      </ul>
    </article>
  );
}
