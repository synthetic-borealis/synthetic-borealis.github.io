import { Component, JSXElement, createEffect } from "solid-js";
import { children } from "solid-js/types/reactive/signal";

import "./Icon.scss";

interface IIconProps {
  children: JSXElement;
  ariaLabel?: string;
}

const Icon: Component<IIconProps> = (props: IIconProps) => {
  const resolved = children(() => props.children);

  createEffect(() => {
    let childrenList = resolved();
    if (!Array.isArray(childrenList)) {
      childrenList = [childrenList];
    }

    for (let child of childrenList) {
      if (child instanceof Element) {
        child.classList.add("Icon");
      }
    }
  });

  return (
    <>
      {resolved()}
    </>
  );
};

export default Icon;
