import { JSXElement } from 'solid-js';

import './Skills.scss';

interface ISkillsProps {
  children: JSXElement | JSXElement[];
}

export default function Skills(props: ISkillsProps) {
  return (
    <section class="Skills" id="skills">
      <div class="Skills__container">
        <h2 class="Skills__title">Skills</h2>
        <ul class="Skills__lists-container">{props.children}</ul>
      </div>
    </section>
  );
}
