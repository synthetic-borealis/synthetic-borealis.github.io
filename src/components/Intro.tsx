import { Component } from "solid-js";
import "./Intro.scss";

import avatarImg from "../images/avatar.jpg";
import githubIcon from "../images/icons/icon-github.svg";
import linkedinIcon from "../images/icons/icon-linkedin.svg";
import twitterIcon from "../images/icons/icon-twitter.svg";
import downIcon from "../images/icons/icon-downArrow.svg"

const Intro: Component = () => {
  return (
    <header class="Intro" id="home">
      <div class="Intro__container">
        <h1 class="Intro__title">Hi, I’m Elhanan.</h1>
        <p class="Intro__subtitle">I’m a full-stack developer. Programming is my passion.</p>
        <img class="Intro__avatar" src={avatarImg} alt="" />
        <ul class="Intro__social-links">
          <li class="Intro__social-link">
            <a href="https://github.com/synthetic-borealis" target="_blank" rel="noreferrer">
              <img class="Intro__social-icon" src={githubIcon} alt="Github icon" />
            </a>
          </li>
          <li class="Intro__social-link">
            <a href="https://www.linkedin.com/in/elhanan-flesch/" target="_blank" rel="noreferrer">
              <img class="Intro__social-icon" src={linkedinIcon} alt="LinkedIn icon" />
            </a>
          </li>
          <li class="Intro__social-link">
            <a href="https://twitter.com/AlignedSpud" target="_blank" rel="noreferrer">
              <img class="Intro__social-icon" src={twitterIcon} alt="Twitter icon" />
            </a>
          </li>
        </ul>
      </div>
      <a class="Intro__down-link" href="#">
        <img class="Intro__down-icon" src={downIcon} alt="Down pointing arrow" />
      </a>
    </header>
  );
};

export default Intro;
