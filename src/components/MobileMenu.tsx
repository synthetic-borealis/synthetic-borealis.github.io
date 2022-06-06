import { Component, JSXElement, children as Children } from "solid-js";
import "./MobileMenu.scss";

interface IMobileMenuProps {
  isMenuVisible: boolean;
  closeMenuFunc(): void;
  children: JSXElement;
}

const MobileMenu: Component<IMobileMenuProps> = (props: IMobileMenuProps) => {
  const children = Children(() => props.children);
  // const [startY, setStartY] = createSignal(0);
  // const [startTime, setStartTime] = createSignal(0);

  function closeMenu() {
    props.closeMenuFunc();
  }

  return (
    <div class={props.isMenuVisible ? "MobileMenu MobileMenu_visible" : "MobileMenu"}>
      <ul class="MobileMenu__link-container">
        {children()}
      </ul>
      <button class="MobileMenu__arrows" onClick={closeMenu} />
    </div>
    );
};

export default MobileMenu;
