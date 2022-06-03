import { Component, children as Children, JSXElement } from "solid-js";

import "./Skills.scss";

interface ISkillsProps {
  children: JSXElement;
}

const Skills: Component<ISkillsProps> = (props: ISkillsProps) => {
  const children = Children(() => props.children);

  return (
    <section class="Skills" id="skills">
      <div class="Skills__container">
        <h2 class="Skills__title">Skills</h2>
        <ul class="Skills__lists-container">{children()}</ul>
      </div>
    </section>
  );
};

export default Skills;
