import './SkillCard.scss';
import { JSXElement } from 'solid-js';

interface ISkillCardProps {
  name: string;
  icon: JSXElement;
}

export default function SkillCard(props: ISkillCardProps) {
  return (
    <li class="SkillCard">
      {props.icon}
      <p class="SkillCard__caption">{props.name}</p>
    </li>
  );
}
