import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import Skill from "/components/Skill";
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
        <meta name="description" content="Max Church - Full Stack Develloper" />
      </Head>

      <div className="min-w-screen min-h-screen">
        <nav className="sticky top-0 z-20 flex justify-evenly bg-red-100  py-5 font-light text-black opacity-100 md:text-2xl">
          <Link href="/">
            <a className="transition-colors hover:text-slate-600">Home</a>
          </Link>
          <Link href="/">
            <a className="transition-colors hover:text-slate-600">About</a>
          </Link>
          <Link href="/">
            <a className="transition-colors hover:text-slate-600">Elements</a>
          </Link>
          <Link href="/">
            <a className="transition-colors hover:text-slate-600">Other</a>
          </Link>
        </nav>

        <div className="relative h-[85vh] items-center overflow-hidden bg-gradient-to-bl from-orange-400 to-red-400 p-20 text-white backdrop-blur-2xl">
          <div className="absolute top-10 left-[7%] pb-40 sm:top-[25%]">
            <h1 className="text-6xl">Max Church</h1>
            <h1 className="max-w-xl pr-10 text-2xl">
              Artificial Intelligence With Computer Science student at the
              University Of Sheffield.
            </h1>
            <h1 className="max-w-xl pr-5 pt-5 text-2xl transition-all hover:scale-110 ">
              Full stack web devellopment with Next.js
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

        <div className="h-[95vh] items-center overflow-hidden bg-red-100 p-20 text-white backdrop-blur-2xl"></div>
      </div>
    </div>
  );
};

export default Home;
