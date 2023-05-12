import React from 'react';
import Aerolab from './ProjectsItems/Aerolab';
import CryptoApp from './ProjectsItems/CryptoApp';

type Props = {};

const Projects = (props: Props) => {
  return (
    <div id="#projects" className="w-[700px]  mt-14">
      <div className="flex border-b-2 dark:border-zinc-700 border-zinc-300">
        <p className=" border-b-2 dark:border-zinc-300 pb-2 -mb-[1px] w-32 border-zinc-900">
          💼 Projects
        </p>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-2">
        <Aerolab />
        <CryptoApp />
        <Aerolab />
        <Aerolab />
      </div>
    </div>
  );
};

export default Projects;
