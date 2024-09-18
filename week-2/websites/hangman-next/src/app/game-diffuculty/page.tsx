import React from "react";
import Bubbles from "@components/ui/bubble-bg";
import DifficultyCard from "@components/ui/cards/difficulty-cards";

import { Info } from "lucide-react";
import { Button } from "@components/ui/button";
import { difficutltyCardsData } from "@constants/StaticData";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@components/ui/dropdown-menu";

const GameDifficulty = () => {
  return (
    <div className="lg:h-screen flex-center w-full pt-20 lg:pt-0 pb-5">
      <Bubbles />

      {/* choose gamemode */}
      <div></div>
      {/* choose gamemode */}

      <div className="flex-col-3 w-full max-w-wrapper">
        <div className="flex-between">
          <h1 className="font-bold text-2xl lg:text-4xl">Choose Difficulty</h1>
          <Info className="cursor-pointer"/>
        </div>
        <div className="grid-3 gap-5">
          {difficutltyCardsData.map((card, id) => (
            <DifficultyCard key={id} {...card} id={id}/>
          ))}
        </div>

        <div className="flex-between">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant={'outline'}>Choose Language</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-32">

            </DropdownMenuContent>
          </DropdownMenu>
          <Button>Play</Button>
        </div>
      </div>
    </div>
  );
};

export default GameDifficulty;
