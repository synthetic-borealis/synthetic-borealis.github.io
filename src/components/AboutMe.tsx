import { Component } from "solid-js";
import "./AboutMe.scss";

const AboutMe: Component = () => {
  return (
    <>
      <section class="AboutMe" id="about-me">
        <div class="AboutMe__container">
          <h2 class="AboutMe__title">About Me</h2>
          <ul class="AboutMe__paragraphs-container">
            <li class="AboutMe__paragraph-item">
              <p class="AboutMe__paragraph">
                I’m passionate about programming and highly motivated to learn and grow as
                a web developer. I am a graduate of the Practicum100 by Yandex web
                development course.
              </p>
            </li>
            <li class="AboutMe__paragraph-item">
              <p class="AboutMe__paragraph">
                Aside from web development, I`m passionate about gaming and game
                development. My favourite games include the Half-Life series, Portal and
                Gone Home.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};
export default AboutMe;
