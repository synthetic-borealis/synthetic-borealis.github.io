import { Component } from "solid-js";
import ISkillData from "../interfaces/skill-data";

import "./SkillCard.scss";

const SkillCard: Component<ISkillData> = (props: ISkillData) => {
  return (
    <li class="SkillCard">
      <props.icon />
      <p class="SkillCard__caption">{props.name}</p>
    </li>
  );
};

export default SkillCard;
