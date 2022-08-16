import { Component } from "solid-js";
import "./SkillIcon.scss";

const PythonIcon: Component = () => {
  return (
    <div role="img" aria-label="Python logo">
      <svg
        version="1.1"
        {...{
          "xmlns:dc": "http://purl.org/dc/elements/1.1/",
          "xmlns:cc": "http://web.resource.org/cc/",
          "xmlns:rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
          "xmlns:svg": "http://www.w3.org/2000/svg",
          xmlns: "http://www.w3.org/2000/svg",
          "xmlns:xlink": "http://www.w3.org/1999/xlink",
        }}
        x="0px"
        y="0px"
        width="110px"
        height="110px"
        viewBox="0.21 -0.077 110 110"
        enable-background="new 0.21 -0.077 110 110"
        {...{ "xml:space": "preserve" }}
        class="SkillIcon"
      >
        <linearGradient
          id="SVGID_1_"
          gradientUnits="userSpaceOnUse"
          x1="63.8159"
          y1="56.6829"
          x2="118.4934"
          y2="1.8225"
          gradientTransform="matrix(1 0 0 -1 -53.2974 66.4321)"
        >
          {" "}
          <stop offset="0" style={{ "stop-color": "#387EB8" }} />{" "}
          <stop offset="1" style={{ "stop-color": "#366994" }} />
        </linearGradient>
        <path
          fill="url(#SVGID_1_)"
          d="M55.023-0.077c-25.971,0-26.25,10.081-26.25,12.156c0,3.148,0,12.594,0,12.594h26.75v3.781 c0,0-27.852,0-37.375,0c-7.949,0-17.938,4.833-17.938,26.25c0,19.673,7.792,27.281,15.656,27.281c2.335,0,9.344,0,9.344,0 s0-9.765,0-13.125c0-5.491,2.721-15.656,15.406-15.656c15.91,0,19.971,0,26.531,0c3.902,0,14.906-1.696,14.906-14.406 c0-13.452,0-17.89,0-24.219C82.054,11.426,81.515-0.077,55.023-0.077z M40.273,8.392c2.662,0,4.813,2.15,4.813,4.813 c0,2.661-2.151,4.813-4.813,4.813s-4.813-2.151-4.813-4.813C35.46,10.542,37.611,8.392,40.273,8.392z"
        />
        <linearGradient
          id="SVGID_2_"
          gradientUnits="userSpaceOnUse"
          x1="97.0444"
          y1="21.6321"
          x2="155.6665"
          y2="-34.5308"
          gradientTransform="matrix(1 0 0 -1 -53.2974 66.4321)"
        >
          {" "}
          <stop offset="0" style={{ "stop-color": "#FFE052" }} />{" "}
          <stop offset="1" style={{ "stop-color": "#FFC331" }} />
        </linearGradient>
        <path
          fill="url(#SVGID_2_)"
          d="M55.397,109.923c25.959,0,26.282-10.271,26.282-12.156c0-3.148,0-12.594,0-12.594H54.897v-3.781 c0,0,28.032,0,37.375,0c8.009,0,17.938-4.954,17.938-26.25c0-23.322-10.538-27.281-15.656-27.281c-2.336,0-9.344,0-9.344,0 s0,10.216,0,13.125c0,5.491-2.631,15.656-15.406,15.656c-15.91,0-19.476,0-26.532,0c-3.892,0-14.906,1.896-14.906,14.406 c0,14.475,0,18.265,0,24.219C28.366,100.497,31.562,109.923,55.397,109.923z M70.148,101.454c-2.662,0-4.813-2.151-4.813-4.813 s2.15-4.813,4.813-4.813c2.661,0,4.813,2.151,4.813,4.813S72.809,101.454,70.148,101.454z"
        />
      </svg>
    </div>
  );
};

export default PythonIcon;
