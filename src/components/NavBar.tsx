import { Component } from "solid-js";
import "./NavBar.scss";

const NavBar: Component = () => {
  // const mobileWidthThreshold: number = 900;
  // const [showMobileMenu, setShowMobileMenu] = createSignal<boolean>(window.innerWidth <= mobileWidthThreshold);

  return (
    <nav class="NavBar">
      <ul class="NavBar__container">
        <li class="NavBar__link-wrapper">
          <a href="#" class="NavBar__link">Home</a>
        </li>
        <li class="NavBar__link-wrapper">
          <a href="#about-me" class="NavBar__link">About Me</a>
        </li>
        <li class="NavBar__link-wrapper">
          <a href="#projects" class="NavBar__link">Projects</a>
        </li>
        <li class="NavBar__link-wrapper">
          <a href="#skills" class="NavBar__link">Skills</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
