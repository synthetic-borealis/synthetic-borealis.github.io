import { Component } from 'solid-js';

import ISocialLinksData from '../interfaces/social-links-data';

import './SocialLinks.scss';

import GithubIcon from './icons/social/GithubIcon';
import LinkedinIcon from './icons/social/LinkedinIcon';
import TwitterIcon from './icons/social/TwitterIcon';
import ResumeIcon from './icons/social/ResumeIcon';

const SocialLinks: Component<ISocialLinksData> = (props: ISocialLinksData) => {
  return (
    <ul class="SocialLinks">
      <li class="SocialLinks__link">
        <a href={props.githubLink} target="_blank" rel="noreferrer">
          <GithubIcon />
        </a>
      </li>
      <li class="SocialLinks__link">
        <a href={props.linkedinLink} target="_blank" rel="noreferrer">
          <LinkedinIcon />
        </a>
      </li>
      <li class="SocialLinks__link">
        <a href={props.twitterLink} target="_blank" rel="noreferrer">
          <TwitterIcon />
        </a>
      </li>
      <li class="SocialLinks__link">
        <a href={props.resumeLink} target="_blank" rel="noreferrer">
          <ResumeIcon />
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
