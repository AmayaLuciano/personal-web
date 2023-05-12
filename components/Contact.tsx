'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {};

const Contact = (props: Props) => {
  const handleButtonClick = () => {
    window.location.href = 'mailto:luciano.amayaaa@gmail.com';
  };

  return (
    <div className="flex justify-between mt-8">
      <div className="border-2 border-zinc-600 w-[45%] h-14 flex">
        <Link className="my-auto ml-3 flex" href={'#'}>
          <Image
            src={'https://img.icons8.com/ios/250/000000/inbox.png'}
            alt="Linkedin"
            width={35}
            height={35}
            className="dark:hidden"
          />{' '}
          <Image
            src={'https://img.icons8.com/ios/250/FFFFFF/inbox.png'}
            alt="Linkedin"
            width={35}
            height={35}
            className="hidden dark:block"
          />{' '}
          <button
            onClick={handleButtonClick}
            className="ml-3 my-auto hover:border-b-[1px] hover:border-zinc-500"
          >
            Email me
          </button>
        </Link>
      </div>
      <div className="border-2 border-zinc-600 w-[45%] h-14 flex">
        {' '}
        <Link
          className="my-auto ml-3 flex"
          href={'https://www.linkedin.com/in/luciano-amaya-972504218/'}
          target="_blank"
        >
          <Image
            src={'https://img.icons8.com/ios/250/000000/linkedin.png'}
            alt="Linkedin"
            width={35}
            height={35}
            className="dark:hidden"
          />{' '}
          <Image
            src={'https://img.icons8.com/ios/250/FFFFFF/linkedin.png'}
            alt="Linkedin"
            width={35}
            height={35}
            className="hidden dark:block"
          />{' '}
          <p className="ml-3 my-auto hover:border-b-[1px] hover:border-zinc-500">
            Linkedin
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
