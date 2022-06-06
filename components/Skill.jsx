import React, { Component } from "react";
import Image from "next/image";

function Skill(props) {
  return (
    <div className="flex items-center space-x-5 overflow-hidden rounded-xl bg-slate-500 shadow-2xl md:space-x-10">
      <div className="h-24 w-24 shrink-0 bg-white p-2">
        <Image
          alt={`${props.title} logo`}
          height={"200px"}
          width={"200px"}
          src={props.src}
        ></Image>
      </div>
      <div className="flex flex-col md:flex-row md:gap-10">
        <h2 className="sm:text-2xl">{props.title}</h2>
        <h2 className="sm:text-2xl">{props.caption}</h2>
      </div>
    </div>
  );
}

export default Skill;
