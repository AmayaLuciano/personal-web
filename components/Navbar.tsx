import Link from 'next/link';
import React from 'react';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex mt-8 justify-between font-semibold">
      {/* <div className="flex cursor-pointer dark:hover:bg-zinc-700 hover:bg-zinc-200 p-1">
        🙋🏻‍♂️ <p className="border-b-[1px] border-zinc-600 ml-2 ">About Me</p>
      </div> */}
      <div className="flex cursor-pointer dark:hover:bg-zinc-700 hover:bg-zinc-200 p-1">
        💼{' '}
        <Link
          href={'#projects'}
          className="border-b-[1px] border-zinc-600 ml-2"
        >
          Projects
        </Link>
      </div>
      {/* <Link
        href={'/#technologies'}
        className="flex cursor-pointer dark:hover:bg-zinc-700 hover:bg-zinc-200 p-1"
      >
        📚 <p className="border-b-[1px] border-zinc-600 ml-2">Technologies</p>
      </Link> */}
      {/* <div className="flex cursor-pointer dark:hover:bg-zinc-700 hover:bg-zinc-200 p-1">
        ☎️ <p className="border-b-[1px] border-zinc-600 ml-2">Contact</p>
      </div> */}
    </div>
  );
};

export default Navbar;
