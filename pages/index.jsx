import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import Project from "../components/Project";
import { ChevronDownIcon } from "@heroicons/react/solid";

const Home = () => {
  const [text, textSetter] = useState("");
  useEffect(() => {}, [text]);
  return (
    <div>
      <Head>
        <title>Max Church</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Max Church - Full Stack Developer" />
      </Head>

      <div className="min-w-screen min-h-screen">
        <div className="relative h-[100vh] items-center overflow-hidden bg-gradient-to-bl from-orange-400 to-red-400 p-20 text-white backdrop-blur-2xl">
          <div className="absolute top-10 left-[7%] pb-40 sm:top-[25%]">
            <h1 className="text-6xl">Max Church</h1>
            <h1 className="max-w-xl pr-10 text-2xl">
              Artificial Intelligence With Computer Science student at the
              University Of Sheffield.
            </h1>
            <h1 className="max-w-xl pr-5 pt-5 text-2xl transition-all hover:scale-110 ">
              Front end web develloper
            </h1>
          </div>

          <div className="absolute right-[5%] top-[20%] hidden aspect-video w-1/3 -translate-y-1/2 animate-blob animate-superGlow rounded-xl bg-white opacity-50 blur-xl lg:block"></div>
          <div className="absolute right-[5%] top-[20%] hidden aspect-video w-1/3 -translate-y-1/2 animate-blob overflow-hidden rounded-lg blur-lg lg:block lg:blur-0">
            <Image src={"/window.png"} width={1920} height={1140}></Image>
          </div>

          <div>
            <ChevronDownIcon className="absolute left-1/2 bottom-0 aspect-square h-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white p-2 text-red-300 transition-colors hover:text-purple-300" />
          </div>
        </div>

        <h1 className="bg-orange-100 p-10 text-center text-4xl font-semibold text-orange-400">
          Projects
        </h1>
        <div className="space grid grid-cols-3 gap-8 overflow-hidden bg-orange-100 px-20 pb-10 text-white backdrop-blur-2xl">
          <Project
            img={"/techhired.png"}
            title={"TechHired.io"}
            description={
              "A webapp using TS, Prisma, Next, Tailwind, React, PlanetScale (MySQL) with a python script fetching all job information. Helped me to learn full stack development."
            }
            src={"https://TechHired.io"}
          ></Project>

          <Project
            img={"/polls.png"}
            title={"Poll maker"}
            description={
              "This is a web app which allows you to create polls and share them with others. It uses TypeScript, React, Next, Tailwind, Prisma and PlanetScale (MySQL)."
            }
            src={"https://poll-abc.vercel.app/"}
            github={"https://github.com/DevMaxC/poll-maker/"}
          ></Project>

          <Project
            img={"/animationThumbnail.png"}
            title={"Tailwind Animation Helper"}
            description={
              "This was an app to help me create tailwind animations easier, i often find myself having to dig through documentation to get the correct format to put my desired animation in, this app allows me to skip that process."
            }
            src={"https://animation-gen.vercel.app/"}
            github={"https://github.com/DevMaxC/animation-gen"}
          ></Project>

          <Project
            img={"/todosThumbnail.png"}
            title={"Todos App"}
            description={
              "This todos app shows my ability to use Basic Tailwind, TypeScript, React and A small amount of NextJS"
            }
            src={"https://todos-app-phi.vercel.app/"}
            github={"https://github.com/DevMaxC/todos-app"}
          ></Project>

          <Project
            img={"/calcThumbnail.png"}
            title={"Calculator App"}
            description={
              "My goal with this project was to create a web app which was styled similarly to the calculator app on your phone. Tailwind was very useful for this, allowing me to prototype ideas quickly without having to reference a css file. "
            }
            src={"https://calculator-two-amber.vercel.app/"}
            github={"https://github.com/DevMaxC/calculator"}
          ></Project>

          <Project
            img={"/portfolioThumbnail.png"}
            title={"This Portfolio!"}
            description={
              "This very site! This has been a way to learn about basic react usage with tailwind. Aswell as components, some typescript mixed with javascript and passing parameters through components."
            }
            src={"/"}
            github={"https://github.com/DevMaxC/portfolio"}
          ></Project>
        </div>
      </div>
    </div>
  );
};

export default Home;
