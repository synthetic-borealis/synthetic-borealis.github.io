import { Component } from 'solid-js';
import './MenuIcon.scss';

const OpenMenuIcon: Component = () => {
  return (
    <div role="img" aria-label="Menu icon">
      <svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        {...{
          'xmlns:xlink': 'http://www.w3.org/1999/xlink',
          'xml:space': 'preserve',
        }}
        x="0px"
        y="0px"
        width="24.75px"
        height="24.75px"
        viewBox="0 0 24.75 24.75"
        class="MenuIcon"
      >
        <g>
          <path
            d="M0,3.875c0-1.104,0.896-2,2-2h20.75c1.104,0,2,0.896,2,2s-0.896,2-2,2H2C0.896,5.875,0,4.979,0,3.875z M22.75,10.375H2
		c-1.104,0-2,0.896-2,2c0,1.104,0.896,2,2,2h20.75c1.104,0,2-0.896,2-2C24.75,11.271,23.855,10.375,22.75,10.375z M22.75,18.875H2
		c-1.104,0-2,0.896-2,2s0.896,2,2,2h20.75c1.104,0,2-0.896,2-2S23.855,18.875,22.75,18.875z"
          />
        </g>
      </svg>
    </div>
  );
};

export default OpenMenuIcon;
