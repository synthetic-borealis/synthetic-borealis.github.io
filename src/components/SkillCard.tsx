import { Component } from "solid-js";
import ISkillData from "../interfaces/skill-data";

import "./SkillCard.scss";

const SkillCard: Component<ISkillData> = (props: ISkillData) => {
  return (
    <li class="SkillCard">
      <img
        class="SkillCard__icon"
        src={props.icon}
        alt={`${props.name} icon`}
      />
      <p class="SkillCard__caption">{props.name}</p>
    </li>
  );
};

export default SkillCard;
