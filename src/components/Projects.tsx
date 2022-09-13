import { JSXElement } from 'solid-js';

import './Projects.scss';

interface IProjectsProps {
  children: JSXElement | JSXElement[];
}

export default function Projects(props: IProjectsProps) {
  return (
    <section class="Projects" id="projects">
      <div class="Projects__container">
        <h2 class="Projects__title">Projects</h2>
        <ul class="Projects__card-container">{props.children}</ul>
        <p class="Projects__message">Check out my Github account for more projects.</p>
      </div>
    </section>
  );
}
