import { JSXElement } from 'solid-js';
import SocialLinks from './SocialLinks';

import ISocialLinksData from '../interfaces/social-links-data';

import './MobileMenu.scss';
import ArrowUpIcon from './icons/ArrowUpIcon';
import socialLinksData from '../utils/social-links';

interface IMobileMenuProps {
  isMenuVisible: boolean;

  closeMenuFunc(): void;

  socialLinks: ISocialLinksData;
  children: JSXElement | JSXElement[];
}

export default function MobileMenu(props: IMobileMenuProps) {
  function closeMenu() {
    props.closeMenuFunc();
  }

  return (
    <div class={props.isMenuVisible ? 'MobileMenu MobileMenu_visible' : 'MobileMenu'}>
      <ul class="MobileMenu__link-container">{props.children}</ul>
      {SocialLinks(socialLinksData)}
      <button class="MobileMenu__arrows" onClick={closeMenu} aria-label="Another close menu button">
        <ArrowUpIcon />
      </button>
    </div>
  );
}
