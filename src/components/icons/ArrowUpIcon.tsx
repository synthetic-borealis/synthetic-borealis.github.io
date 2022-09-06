import { Component } from 'solid-js';
import './ArrowUpIcon.scss';

const ArrowUpIcon: Component = () => {
  return (
    <div aria-label="Arrows pointing up" role="img">
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
        width="970.504px"
        height="970.503px"
        viewBox="0 0 970.504 970.503"
        class="ArrowUpIcon"
      >
        <g>
          <path
            d="M120.027,962.802c26.6,0,53.5-8.801,75.7-27l288.1-234.7l290.899,237c22.301,18.1,49.101,27,75.7,27
		c34.8,0,69.4-15.101,93.101-44.2c41.899-51.4,34.1-127-17.2-168.8l-366.7-298.8c-44.1-36-107.5-36-151.6,0l-363.8,296.5
		c-51.4,41.8-59.1,117.399-17.3,168.8C50.727,947.702,85.227,962.802,120.027,962.802z"
          />
          <path
            d="M120.027,541.902c26.6,0,53.5-8.8,75.7-27l288.1-234.7l290.899,237c22.301,18.101,49.101,27,75.7,27
		c34.8,0,69.4-15.1,93.101-44.2c41.899-51.399,34.1-127-17.2-168.8l-366.7-298.8c-44.1-36-107.5-36-151.6,0l-363.8,296.4
		c-51.4,41.9-59.1,117.5-17.3,168.9C50.727,526.802,85.227,541.902,120.027,541.902z"
          />
        </g>
      </svg>
    </div>
  );
};

export default ArrowUpIcon;
