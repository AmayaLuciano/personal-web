import React from 'react';
import Navbar from './Navbar';
import AboutMe from './AboutMe';
import Contact from './Contact';

type Props = {};

const Presentation = (props: Props) => {
  return (
    <div className="px-4 md:px-0">
      <h1 className="font-bold text-4xl mt-4">Luciano Amaya</h1>
      <p className="tracking-tighter mt-4 font-light">
        👋🏻 Hey there, I am Lucho. I&apos;m a Frontend Developer 👨🏻‍💻 passionate
        about coding good and modern designs and interfaces
      </p>
      <Navbar />
      <AboutMe />
      <Contact />
    </div>
  );
};

export default Presentation;
