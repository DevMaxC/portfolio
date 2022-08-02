import Image from "next/image";

import React from "react";

type Props = {
  img: string;
  title: string;
  description: string;
  src: string;
  github?: string;
};

function project({ img, title, description, src, github }: Props) {
  return (
    <div className="col-span-3  lg:col-span-1">
      <Image
        src={img}
        width={1280}
        height={800}
        objectFit="cover"
        className="h-full"
      />
      <div className="bg-gradient-to-tr from-orange-400 to-red-400 p-5">
        <h1 className="text-2xl">{title}</h1>
        <h2 className="text-xl">{description}</h2>
        <div className="flex justify-center pt-2">
          <a
            href={src}
            className="mx-2 rounded-md border-orange-600 bg-white px-2 text-orange-500 transition hover:text-orange-700"
          >
            Visit
          </a>
          {typeof github !== "undefined" && (
            <a
              href={github}
              className="mx-2 rounded-md border-orange-600 bg-white px-2 text-orange-500 transition hover:text-orange-700"
            >
              Github
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default project;
