import Link from 'next/link';
import DarkModeBtn from '../components/DarkModeBtn';
import React from 'react';

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="sticky top-0 flex justify-between h-16 bg-white dark:bg-zinc-900">
      <div className="mx-10 my-auto">
        {' '}
        <Link href={'#home'}>Amaya Luciano</Link>
      </div>

      <div>
        <div className="mx-10 my-auto">
          <DarkModeBtn />
        </div>
      </div>
    </div>
  );
};

export default Header;
