import {
  Component,
  createSignal,
  onCleanup,
  onMount,
} from "solid-js";

import MobileMenu from "./MobileMenu";

import "./NavBar.scss";

const NavBar: Component = () => {
  const mobileWidthThreshold = 900;
  const [isMobileOrTablet, setIsMobileOrTablet] = createSignal<boolean>(
    window.innerWidth <= mobileWidthThreshold
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
        {isMobileOrTablet() ? (
          <div class="NavBar__container">
            <button
              class={isMenuOpen() ? "NavBar__menu-button NavBar__menu-button_close" : "NavBar__menu-button"}
              onClick={handleMenuButtonClick}
              aria-label={isMenuOpen() ? "Menu button" : "Close menu button"}
            />
          </div>
        ) : (
          <ul class="NavBar__container">
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
        )}
      </nav>
      {isMenuOpen() && isMobileOrTablet() ? (
        <MobileMenu isMenuVisible={isMenuVisible()} closeMenuFunc={closeMenu}>
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
