import react from '../public/icons8-react-100.png';
import next from '../public/nextjs_icon.png';
import ts from '../public/icons8-typescript-48.png';
import js from '../public/icons8-javascript-48.png';
import html from '../public/icons8-html-48.png';
import tailwind from '../public/icons8-tailwind-css-48.png';
import Image from 'next/image';

type Props = {};

const Technologies = (props: Props) => {
  return (
    <div className="w-[350px] md:w-[700px]  mt-14 mx-auto">
      <div
        id="/#technologies"
        className="flex border-b-2 dark:border-zinc-700 border-zinc-300"
      >
        <p className=" border-b-2 dark:border-zinc-300 pb-2 -mb-[2px] w-40 border-zinc-900 ">
          🤓 Technologies
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4">
        <div className="dark:bg-zinc-800 bg-zinc-200 p-2 rounded-md flex hover:bg-slate-300 dark:hover:bg-zinc-700 cursor-default">
          {' '}
          <Image src={ts} alt="typescript" width={20} height={20} />
          <p className="ml-1">Typescript</p>
        </div>
        <div className="flex dark:bg-zinc-800 bg-zinc-200 p-2 rounded-md hover:bg-slate-300 dark:hover:bg-zinc-700 cursor-default">
          {' '}
          <Image src={react} alt="next" width={20} height={20} />
          <p className="ml-1">React</p>
        </div>
        <div className="dark:bg-zinc-800 bg-zinc-200 p-2  rounded-md flex hover:bg-slate-300 dark:hover:bg-zinc-700 cursor-default">
          {' '}
          <Image src={next} alt="next js" width={20} height={20} />
          <p className="ml-1">Next JS</p>
        </div>
        <div className="dark:bg-zinc-800 bg-zinc-200 p-2 rounded-md flex hover:bg-slate-300 dark:hover:bg-zinc-700 cursor-default">
          {' '}
          <Image src={html} alt="html" width={20} height={20} />{' '}
          <p className="ml-1">HTML</p>
        </div>
        <div className="dark:bg-zinc-800 bg-zinc-200 p-2 rounded-md flex hover:bg-slate-300 dark:hover:bg-zinc-700 cursor-default">
          {' '}
          <Image src={tailwind} alt="tailwind" width={20} height={20} />
          <p className="ml-1">Tailwind CSS</p>
        </div>
        <div className="dark:bg-zinc-800 bg-zinc-200 p-2 rounded-md flex hover:bg-slate-300 dark:hover:bg-zinc-700 cursor-default">
          {' '}
          <Image src={js} alt="javascript" width={20} height={20} />
          <p className="ml-1">Javascript</p>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
