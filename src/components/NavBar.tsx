import { Component, createSignal, onCleanup, onMount, Show } from "solid-js";

import MobileMenu from "./MobileMenu";
import SocialLinks from "./SocialLinks";
import ISocialLinksData from "../interfaces/social-links-data";

import "./NavBar.scss";

import OpenMenuIcon from "./icons/menu/OpenMenuIcon";
import CloseMenuIcon from "./icons/menu/CloseMenuIcon";
import ChangeThemeButton from "./ChangeThemeButton";

interface INavBarProps {
  socialLinks: ISocialLinksData;
}

const NavBar: Component<INavBarProps> = (props: INavBarProps) => {
  const mobileWidthThreshold = 1024;
  const [isMobileOrTablet, setIsMobileOrTablet] = createSignal<boolean>(
    window.innerWidth <= mobileWidthThreshold,
  );
  const [isMenuOpen, setIsMenuOpen] = createSignal<boolean>(false);
  const [isMenuVisible, setIsMenuVisible] = createSignal<boolean>(false);
  const menuTransitionDuration = 0.25;

  function handleWindowResize() {
    if (!isMobileOrTablet() && window.innerWidth <= mobileWidthThreshold) {
      setIsMobileOrTablet(true);
    } else if (isMobileOrTablet() && window.innerWidth > mobileWidthThreshold) {
      setIsMenuOpen(false);
      setIsMobileOrTablet(false);
    }
  }

  function openMenu() {
    setIsMenuOpen(true);
    setTimeout(() => setIsMenuVisible(true));
  }

  function closeMenu() {
    setIsMenuVisible(false);
    setTimeout(() => setIsMenuOpen(false), menuTransitionDuration);
  }

  function handleMenuButtonClick() {
    if (!isMobileOrTablet()) {
      return;
    }

    if (isMenuOpen()) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  onMount(() => {
    window.addEventListener("resize", handleWindowResize);
  });

  onCleanup(() => {
    window.removeEventListener("resize", handleWindowResize);
  });

  return (
    <>
      <nav class="NavBar">
        <div class="NavBar__container">
          {isMobileOrTablet() ? (
            <>
              <div class="NavBar__link-container">
                <button
                  class="NavBar__menu-button"
                  onClick={handleMenuButtonClick}
                  aria-label={isMenuOpen() ? "Menu button" : "Close menu button"}
                >
                  <Show when={isMenuOpen()} fallback={<OpenMenuIcon />}>
                    <CloseMenuIcon />
                  </Show>
                </button>
              </div>
              <ChangeThemeButton />
            </>
          ) : (
            <>
              <div class="NavBar__left-container">
                <ChangeThemeButton />
                <ul class="NavBar__link-container">
                  <li class="NavBar__link-wrapper">
                    <a href="#" class="NavBar__link">
                      Home
                    </a>
                  </li>
                  <li class="NavBar__link-wrapper">
                    <a href="#about-me" class="NavBar__link">
                      About Me
                    </a>
                  </li>
                  <li class="NavBar__link-wrapper">
                    <a href="#projects" class="NavBar__link">
                      Projects
                    </a>
                  </li>
                  <li class="NavBar__link-wrapper">
                    <a href="#skills" class="NavBar__link">
                      Skills
                    </a>
                  </li>
                </ul>
              </div>
              {SocialLinks(props.socialLinks)}
            </>
          )}
        </div>
      </nav>
      {isMenuOpen() && isMobileOrTablet() ? (
        <MobileMenu
          isMenuVisible={isMenuVisible()}
          closeMenuFunc={closeMenu}
          socialLinks={props.socialLinks}
        >
          <li class="NavBar__link-wrapper">
            <a href="#" class="NavBar__link" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li class="NavBar__link-wrapper">
            <a href="#about-me" class="NavBar__link" onClick={closeMenu}>
              About Me
            </a>
          </li>
          <li class="NavBar__link-wrapper">
            <a href="#projects" class="NavBar__link" onClick={closeMenu}>
              Projects
            </a>
          </li>
          <li class="NavBar__link-wrapper">
            <a href="#skills" class="NavBar__link" onClick={closeMenu}>
              Skills
            </a>
          </li>
        </MobileMenu>
      ) : (
        ""
      )}
    </>
  );
};

export default NavBar;
