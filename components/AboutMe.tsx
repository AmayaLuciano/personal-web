import Image from 'next/image';
import drums from '../public/The Band - Sitting.png';
import me from '../public/0f2d9214-d9b9-4f6f-a757-eb3c53ddde37.jpg';

type Props = {};

const AboutMe = (props: Props) => {
  return (
    <div className="grid grid-cols-4 mt-4">
      <div>
        <p className="text-9xl">👨🏻‍💻</p>
      </div>
      <div className="my-auto col-span-3 font-light tracking-tight">
        <p>
          I am specialized in technologies such as
          <span className="text-blue-500"> React</span>,{' '}
          <span className="text-blue-500"> Typescript</span>,{' '}
          <span className="text-blue-500"> Next JS</span> and
          <span className="text-blue-500"> Tailwind css</span>. Constantly
          looking for learning new things 🤓. Fun fact: like 80% of programmers,
          I am also a musician
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
