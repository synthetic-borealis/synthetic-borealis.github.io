import { Component } from "solid-js";
import "./ArrowDownIcon.scss";

const ArrowDownIcon: Component = () => {
  return (
    <div aria-label="Down pointing arrow">
      <svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        {...{
          "xmlns:xlink": "http://www.w3.org/1999/xlink",
          "xml:space": "preserve",
        }}
        x="0px"
        y="0px"
        width="123.97px"
        height="123.97px"
        viewBox="0 0 123.97 123.97"
        style="enable-background:new 0 0 123.97 123.97;"
        class="ArrowDownIcon"
      >
        <g>
          <path
            d="M51.802,96.062c2.801,2.801,6.5,4.2,10.2,4.2s7.4-1.399,10.2-4.2l47.3-47.3c5.5-5.5,6.101-14.6,0.8-20.3
		c-5.6-6.1-15.1-6.3-20.899-0.5l-30.4,30.3c-3.899,3.9-10.2,3.9-14.1,0l-30.3-30.3c-5.801-5.8-15.301-5.7-20.9,0.5
		c-5.3,5.7-4.8,14.8,0.8,20.3L51.802,96.062z"
          />
        </g>
      </svg>
    </div>
  );
};

export default ArrowDownIcon;
