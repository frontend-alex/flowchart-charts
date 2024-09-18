"use client";

import React from "react";
import Link from "next/link";
import Bubbles from "@components/ui/bubble-bg";

import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { Button } from "@components/ui/button";

const page = () => {
  const router = useRouter();

  const { user } = useUser();

  if (user) {
    router.push("/account");
  }

  return (
    <header className="flex-center h-screen">
      <Bubbles />

      <div className="max-w-3xl mx-auto px-5 xl:px-0 flex-col-3 text-center">
        <h1 className="font-bold text-5xl lg:text-6xl">
          Welcome to Guess Game.
        </h1>
        <p className="max-w-lg mx-auto">
          Welcome to Guess Game, the ultimate test of your word-guessing skills!
          Try to uncover the hidden word before it's too late. Each wrong guess
          brings you closer to defeat. Can you master the challenge?
        </p>
        <div className="flex-3 justify-center">
          <Link href={"/game-diffuculty"}>
            <Button>Play</Button>
          </Link>
          <Link href={"/"}>
            <Button variant={"outline"}>Learn More</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default page;
