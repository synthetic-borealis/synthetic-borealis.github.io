import { Component, createEffect, createSignal, For, onMount } from 'solid-js';

import NavBar from './NavBar';
import Intro from './Intro';
import AboutMe from './AboutMe';
import Projects from './Projects';
import ProjectCard from './ProjectCard';
import Skills from './Skills';
import SkillsList from './SkillsList';
import SkillCard from './SkillCard';
import Footer from './Footer';

import { useSettings } from '../contexts/settings';
import { applyDarkTheme, applyLightTheme } from '../utils/themes';

import socialLinksData from '../utils/social-links';
import projectsList from '../utils/projects-list';
import {
  currentlyUsedSkills,
  basicSkills,
  currentlyLearningSkills,
} from '../utils/skill-lists';
import Theme from '../enums/theme';

const App: Component = () => {
  const [settings, { setDarkTheme, setLightTheme }] = useSettings();
  const [isMounted, setIsMounted] = createSignal<boolean>(false);

  createEffect(() => {
    if (!isMounted()) {
      return;
    }

    if (settings().theme === Theme.Light) {
      applyLightTheme();
      localStorage.setItem('theme', Theme[Theme.Light]);
    } else {
      applyDarkTheme();
      localStorage.setItem('theme', Theme[Theme.Dark]);
    }
  });

  onMount(() => {
    setIsMounted(true);
    const storedTheme = localStorage.getItem('theme');

    if (storedTheme === Theme[Theme.Light]) {
      setLightTheme();
    } else {
      setDarkTheme();
    }
  });

  return (
    <>
      <NavBar socialLinks={socialLinksData}/>
      <Intro/>
      <AboutMe/>
      <Projects>
        <For each={projectsList}>{(project) => <li>{ProjectCard(project)}</li>}</For>
      </Projects>
      <Skills>
        <SkillsList caption="Currently Using">
          <For each={currentlyUsedSkills}>{(skill) => SkillCard(skill)}</For>
        </SkillsList>
        <SkillsList caption="Basic">
          <For each={basicSkills}>{(skill) => SkillCard(skill)}</For>
        </SkillsList>
        <SkillsList caption="Currently Learning">
          <For each={currentlyLearningSkills}>{(skill) => SkillCard(skill)}</For>
        </SkillsList>
      </Skills>
      <Footer/>
    </>
  );
};

export default App;
