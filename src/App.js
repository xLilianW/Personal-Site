import logo from './logo.svg';
import './App.css';
import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection.js';


function App() {
  return (
    <MainStyled>
      <Header />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <ContactSection />
    </MainStyled>
  );
}

const MainStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-family: 'Montserrat', arial;
`;

export default App;
