import Image from 'next/image';
import svg from '../public/26-Programmer.png';

type Props = {};

const Ilustration = (props: Props) => {
  return (
    <div id="#home" className="bg-white w-full h-72 flex">
      <div className="mx-auto my-auto">
        <Image src={svg} alt="illustration" width={320} height={350} />
      </div>
    </div>
  );
};

export default Ilustration;
