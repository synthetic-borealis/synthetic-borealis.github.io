import { JSXElement } from 'solid-js';

import './SkillsList.scss';

interface ISkillsListProps {
  caption: string;
  children: JSXElement | JSXElement[];
}

export default function SkillsList(props: ISkillsListProps) {
  return (
    <li class="SkillsList">
      <h2 class="SkillsList__title">{props.caption}</h2>
      <ul class="SkillsList__card-container">{props.children}</ul>
    </li>
  );
}
