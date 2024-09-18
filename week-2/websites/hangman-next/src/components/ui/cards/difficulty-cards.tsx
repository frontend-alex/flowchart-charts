"use client";

import React, { useState } from "react";
import Image from "next/image";

import { TDiffucltyCards } from "@constants/Types";

const DifficultyCard: React.FC<TDiffucltyCards> = ({
  name,
  point,
  color,
  icons,
  text,
  lines,
  id,
}) => {
  const [index, setIndex] = useState<number | undefined>(0);

  return (
    <div
      onClick={() => setIndex(id)}
      className={`cursor-pointer select-none relative flex-col-3 bg-neutral-50 border ${
        index == id ? `border-[${color}] border-2` : "border-neutral-200"
      } rounded-md p-3 px-5 h-[350px] overflow-hidden`}
    >
      <span className="text-sm text-center font-bold">{lines}</span>

      <div className="flex-col-1">
        <h1 className="font-bold text-lg lg:text-2xl">{name}</h1>
        <p>{text}</p>
      </div>

      <Image
        className="absolute bottom-0 left-0 select-none"
        src={icons}
        width={300}
        height={300}
        alt={name}
      />

      <span className="absolute bottom-5 right-5 font-bold text-xl">
        {point}
      </span>
    </div>
  );
};

export default DifficultyCard;
