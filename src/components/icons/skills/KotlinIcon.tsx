import { Component } from 'solid-js';
import './SkillIcon.scss';

const KotlinIcon: Component = () => {
  return (
    <div role="img" aria-label="Kotlin logo">
      <svg
        width="256px"
        height="256px"
        viewBox="0 0 256 256"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        {...{ 'xmlns:xlink': 'http://www.w3.org/1999/xlink' }}
        preserveAspectRatio="xMidYMid"
        class="SkillIcon"
      >
        <title>Kotlin</title>
        <defs>
          <linearGradient
            x1="99.9909179%"
            y1="-0.0107311249%"
            x2="0.00995772309%"
            y2="100.010253%"
            id="linearGradient-1"
          >
            <stop stop-color="#E44857" offset="0.3435144%" />
            <stop stop-color="#C711E1" offset="46.89%" />
            <stop stop-color="#7F52FF" offset="100%" />
          </linearGradient>
        </defs>
        <g>
          <polygon
            fill="url(#linearGradient-1)"
            fill-rule="nonzero"
            points="256 256 0 256 0 0 256 0 128 127.948759"
          />
        </g>
      </svg>
    </div>
  );
};

export default KotlinIcon;
