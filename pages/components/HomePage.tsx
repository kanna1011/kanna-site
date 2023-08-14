
import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { About } from './contents/About';
import { Skills } from './contents/Skills';
import { Works } from './contents/Works';
import { Me } from './contents/Me';
import { Contact } from './contents/Contact';
import ScrollButton from './utils/ScrollButton';
import ScrollTopButton from './utils/ScrollTopButton';

function HomePage() {
  return (
    <div>
      <FadeInSection id="about">
        <About />
        <ScrollButton text='skills'/>
      </FadeInSection>
      <FadeInSection id="skills">
        <Skills />
        <ScrollButton text='works'/>
      </FadeInSection>
      <FadeInSection id="works">
        <Works />
        <ScrollButton text='me'/>
      </FadeInSection>
      <FadeInSection id="me">
        <Me />
        <ScrollButton text='contact'/>
      </FadeInSection>
      <FadeInSection id="contact">
        <Contact />
      </FadeInSection>
      <ScrollTopButton />
    </div>
  );
}

type FadeInSectionProps = {
  children: React.ReactNode;
  id?: string;
};

const FadeInSection: React.FC<FadeInSectionProps> = ({ children, id }) => {
  const [isVisible, setIsVisible] = useState(false);

  const sectionStyle = {
    minHeight: '100vh',
  };

  return (
    <VisibilitySensor
      partialVisibility
      onChange={(visible: boolean) => {
        if (visible) setIsVisible(true);
      }}      
    >
      <div className={`fade-in-section ${isVisible ? "is-visible" : ""}`} style={sectionStyle} id={id}>
        {children}
      </div>
    </VisibilitySensor>
  );
};

export default HomePage;
