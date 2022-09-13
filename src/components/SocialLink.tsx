import { JSXElement } from 'solid-js';

interface ISocialLinkProps {
  url: string;
  icon: JSXElement;
  noReferer?: boolean;
  openInNewTab?: boolean;
}

export default function SocialLink(props: ISocialLinkProps) {
  return (
    <a
      href={props.url}
      target={props.openInNewTab ? '_blank' : '_self'}
      rel={props.noReferer ? 'noreferrer' : 'external'}
    >
      {props.icon}
    </a>
  );
}
