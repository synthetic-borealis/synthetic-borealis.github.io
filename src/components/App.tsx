import { Component, For } from "solid-js";
import "./App.scss";

import Intro from "./Intro";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import ProjectCard from "./ProjectCard";
import Skills from "./Skills";
import SkillsList from "./SkillsList";
import SkillCard from "./SkillCard";

import projectsList from "../utils/projects-list";
import { currentlyUsedSkills, basicSkills, currentlyLearningSkills } from "../utils/skill-lists";

const App: Component = () => {
  return (
    <>
      {/* <Intro />
      <AboutMe />
      <Projects>
        <For each={projectsList}>
          {(project) => <li>{ProjectCard(project)}</li>}
        </For>
      </Projects> */}
      <Skills>
        <SkillsList caption="Currently Using">
          <For each={currentlyUsedSkills}>
            {(skill) => SkillCard(skill)}
          </For>
        </SkillsList>
        <SkillsList caption="Basic">
          <For each={basicSkills}>
            {(skill) => SkillCard(skill)}
          </For>
        </SkillsList>
        <SkillsList caption="Currently Learning">
          <For each={currentlyLearningSkills}>
            {(skill) => SkillCard(skill)}
          </For>
        </SkillsList>
      </Skills>
    </>
  );
};

export default App;
