import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
        I'm Ebenezer, a passionate full-stack developer with a love for crafting innovative solutions and bringing ideas to life. I've honed my skills in both frontend and backend development, mastering technologies like React, Tailwind, GraphQL, Java SpringBoot and MongoDB along with other notable technologies. Whether it's building responsive user interfaces or architecting robust backend systems, I thrive on the challenges of software development and constantly seek opportunities to expand my knowledge
        </p>

        <br />

        <p className="text-xl">
        Driven by a relentless curiosity and a dedication to excellence, I'm committed to delivering high-quality solutions that exceed expectations. I believe in the power of technology to make a positive impact on the world, and I'm excited to be part of an industry that's constantly pushing the boundaries of what's possible. When I'm not coding, you can find me exploring new technologies, collaborating with fellow developers, or tinkering with side projects. Let's connect and embark on a journey of innovation together!
        </p>
      </div>
    </div>
  );
};

export default About;
