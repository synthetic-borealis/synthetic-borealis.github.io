import { Component, JSXElement, children as Children } from "solid-js";
import SocialLinks from "./SocialLinks";

import ISocialLinksData from "../interfaces/social-links-data";

import "./MobileMenu.scss";

import ArrowUpIcon from "./icons/ArrowUpIcon";

import socialLinksData from "../utils/social-links";

interface IMobileMenuProps {
  isMenuVisible: boolean;
  closeMenuFunc(): void;
  socialLinks: ISocialLinksData;
  children: JSXElement;
}

const MobileMenu: Component<IMobileMenuProps> = (props: IMobileMenuProps) => {
  const children = Children(() => props.children);

  function closeMenu() {
    props.closeMenuFunc();
  }

  return (
    <div class={props.isMenuVisible ? "MobileMenu MobileMenu_visible" : "MobileMenu"}>
      <ul class="MobileMenu__link-container">{children()}</ul>
      {SocialLinks(socialLinksData)}
      <button
        class="MobileMenu__arrows"
        onClick={closeMenu}
        aria-label="Another close menu button"
      >
        <ArrowUpIcon />
      </button>
    </div>
  );
};

export default MobileMenu;
