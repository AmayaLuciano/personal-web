type Props = {};

const AboutMe = (props: Props) => {
  return (
    <div className="md:grid md:grid-cols-4 mt-4  flex flex-col">
      <div className="mx-auto">
        <p className="text-9xl ">👨🏻‍💻</p>
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
