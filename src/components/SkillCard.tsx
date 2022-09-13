import ISkillData from '../interfaces/skill-data';

import './SkillCard.scss';

export default function SkillCard(props: ISkillData) {
  return (
    <li class="SkillCard">
      <props.icon />
      <p class="SkillCard__caption">{props.name}</p>
    </li>
  );
}
