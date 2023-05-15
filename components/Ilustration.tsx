import Image from 'next/image';
import svgDark from '../public/ilustration-dark.png';
import svgLight from '../public/ilustration light.png';

type Props = {};

const Ilustration = (props: Props) => {
  return (
    <>
      <div id="#home" className="hidden  w-full h-72 dark:flex">
        <div className="mx-auto my-auto">
          <Image src={svgDark} alt="illustration" width={320} height={350} />
        </div>
      </div>
      <div id="#home" className="bg-white dark:hidden w-full h-72 flex">
        <div className="mx-auto my-auto">
          <Image src={svgLight} alt="illustration" width={320} height={350} />
        </div>
      </div>
    </>
  );
};

export default Ilustration;
