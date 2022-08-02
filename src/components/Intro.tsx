import { Component, onMount } from "solid-js";

import "./Intro.scss";

import avatarImg from "../images/avatar.webp";
import downIcon from "../images/icons/icon-downArrow.svg";

const Intro: Component = () => {
  onMount(() => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = avatarImg;
    link.type = "image/webp";
    document.head.appendChild(link);
  });

  return (
    <header class="Intro" id="home">
      <div class="Intro__container">
        <h1 class="Intro__title">Hi, I’m Elhanan.</h1>
        <p class="Intro__subtitle">
          I’m a full-stack developer. Programming is my passion.
        </p>
        <img class="Intro__avatar" src={avatarImg} alt="Owner avatar" />
      </div>
      <a class="Intro__down-link" href="#about-me">
        <img
          class="Intro__down-icon"
          src={downIcon}
          alt="Down pointing arrow"
        />
      </a>
    </header>
  );
};

export default Intro;
