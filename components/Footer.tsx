import Link from 'next/link';
import React from 'react';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="flex-col h-56 justify-between">
      <div className="flex justify-between mt-20 w-[400px] mx-auto my-auto">
        <div className="my-auto mx-auto border-b-2 border-b-zinc-600">
          <Link href={'https://github.com/AmayaLuciano'} target="_blank">
            Github
          </Link>
        </div>
        <div className="my-auto mx-auto  border-b-2 border-b-zinc-600">
          <Link
            href={'https://www.linkedin.com/in/luciano-amaya-972504218/'}
            target="_blank"
          >
            Linkedin
          </Link>
        </div>
      </div>
      <div className="flex mt-10 justify-center">
        <p className="">Made by </p>{' '}
        <p className="font-bold ml-2 hover:border-b-2 hover:border-b-zinc-700 cursor-pointer">
          Luciano Amaya
        </p>
      </div>
    </footer>
  );
};

export default Footer;
