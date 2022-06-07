import { Component } from "solid-js";

import ISocialLinksData from "../interfaces/social-links-data";

import "./SocialLinks.scss";
import githubIcon from "../images/icons/icon-github.svg";
import linkedinIcon from "../images/icons/icon-linkedin.svg";
import twitterIcon from "../images/icons/icon-twitter.svg";
import cvIcon from "../images/icons/icon-cv.svg";

const SocialLinks: Component<ISocialLinksData> = (props: ISocialLinksData) => {
  return (
    <ul class="SocialLinks">
      <li class="SocialLinks__link">
        <a href={props.githubLink} target="_blank" rel="noreferrer">
          <img class="SocialLinks__icon" src={githubIcon} alt="Github icon" />
        </a>
      </li>
      <li class="SocialLinks__link">
        <a href={props.linkedinLink} target="_blank" rel="noreferrer">
          <img
            class="SocialLinks__icon"
            src={linkedinIcon}
            alt="LinkedIn icon"
          />
        </a>
      </li>
      <li class="SocialLinks__link">
        <a href={props.twitterLink} target="_blank" rel="noreferrer">
          <img class="SocialLinks__icon" src={twitterIcon} alt="Twitter icon" />
        </a>
      </li>
      <li class="SocialLinks__link">
        <a href={props.resumeLink} target="_blank" rel="noreferrer">
          <img class="SocialLinks__icon" src={cvIcon} alt="Resume icon" />
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
