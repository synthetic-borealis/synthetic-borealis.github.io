import { Component, children as Children, JSXElement } from "solid-js";

import "./Projects.scss";

interface IProjectsProps {
  children: JSXElement;
}

const Projects: Component<IProjectsProps> = (props: IProjectsProps) => {
  const children = Children(() => props.children);

  return (
    <section class="Projects" id="projects">
      <div class="Projects__container">
        <h2 class="Projects__title">Projects</h2>
        <ul class="Projects__card-container">
          {children()}
        </ul>
        <p class="Projects__message">
          Check out my Github account for more projects.
        </p>
      </div>
    </section>
  );
};

export default Projects;
