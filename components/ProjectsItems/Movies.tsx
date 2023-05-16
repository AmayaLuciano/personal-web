import Image from 'next/image';
import React from 'react';
import react from '../../public/icons8-react-100.png';
import next from '../../public/nextjs_icon.png';
import github from '../../public/icons8-github-50.png';
import githubDark from '../../public/icons8-github-50 (1).png';
import movies from '../../public/movies.png';
import Link from 'next/link';

type Props = {};

const Movies = (props: Props) => {
  return (
    <div className="relative mx-auto dark:bg-zinc-800 bg-zinc-200 rounded-sm group/item max-h-80 shadow-lg">
      <div className=" h-48 bg-slate-400 ">
        {' '}
        <Image src={movies} alt="aerolab img" className="h-48 w-full" />{' '}
      </div>

      <div className="p-2 flex flex-col h-32">
        <h3>🛠 Movies App</h3>
        <p className="text-sm">
          You can see the latest movies with his overview
        </p>
        <p className="text-sm bg-orange-500 w-fit rounded-md px-2 my-auto">
          Personal
        </p>
        <div className="flex text-sm mt-auto mb-0">
          <div className="flex">
            <Image src={react} alt="react" width={20} height={20} />{' '}
            <p className="ml-1">React</p>
          </div>
          <div className="flex ml-2">
            {' '}
            <Image src={next} alt="next" width={20} height={20} />
            <p className="ml-1">Next js</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 dark:bg-zinc-900 opacity-80 invisible group-hover/item:visible absolute w-full h-full top-0">
        <div className="flex justify-center ">
          <div className="mt-[45%] mr-4">
            <Link
              href={'https://github.com/AmayaLuciano/MoviesApp_Next_TS'}
              target="_blank"
              className="mx-auto my-auto cursor-pointer"
            >
              <Image
                src={github}
                alt="github"
                width={40}
                height={40}
                className="dark:hidden"
              />
              <Image
                src={githubDark}
                alt="github"
                width={40}
                height={40}
                className="hidden dark:block"
              />
            </Link>
          </div>
          <div className="mt-[45%] ml-4">
            <Link
              href={'https://movies-app-next-ts.vercel.app/'}
              target="_blank"
              className="mx-auto my-auto cursor-pointer"
            >
              <Image
                src={
                  'https://img.icons8.com/ios/250/000000/application-window.png'
                }
                alt="deploy"
                width={40}
                height={40}
                className="dark:hidden "
              />{' '}
              <Image
                src={
                  'https://img.icons8.com/ios/250/FFFFFF/application-window.png'
                }
                alt="deploy"
                width={40}
                height={40}
                className="hidden dark:block"
              />{' '}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
