import { Component } from "solid-js";
import "./Intro.scss";

import avatarImg from "../images/avatar.jpg";

const Intro: Component = () => {
  return (
    <header class="Intro">
      <div class="Intro__container">
        <h1 class="Intro__title">Hi, I’m Elhanan.</h1>
        <p class="Intro__subtitle">I’m a full-stack developer. Programming is my passion.</p>
        <img class="Intro__avatar" src={avatarImg} alt="" />
      </div>
    </header>
  );
};

export default Intro;
