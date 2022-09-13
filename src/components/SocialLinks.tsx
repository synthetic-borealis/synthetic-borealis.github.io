import SocialLink from './SocialLink';

import ISocialLinksData from '../interfaces/social-links-data';

import './SocialLinks.scss';

import GithubIcon from './icons/social/GithubIcon';
import LinkedinIcon from './icons/social/LinkedinIcon';
import TwitterIcon from './icons/social/TwitterIcon';
import ResumeIcon from './icons/social/ResumeIcon';

export default function SocialLinks(props: ISocialLinksData) {
  return (
    <ul class="SocialLinks">
      <li class="SocialLinks__link">
        <SocialLink url={props.githubLink} icon={<GithubIcon />} openInNewTab noReferer />
      </li>
      <li class="SocialLinks__link">
        <SocialLink url={props.linkedinLink} icon={<LinkedinIcon />} openInNewTab noReferer />
      </li>
      <li class="SocialLinks__link">
        <SocialLink url={props.twitterLink} icon={<TwitterIcon />} openInNewTab noReferer />
      </li>
      <li class="SocialLinks__link">
        <SocialLink url={props.resumeLink} icon={<ResumeIcon />} openInNewTab noReferer />
      </li>
    </ul>
  );
}
