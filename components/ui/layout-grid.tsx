"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { ArrowRightIcon } from "lucide-react";

interface Content {
  title: string;
  description: string;
}
type Card = {
  id: number;
  content: Content;
  className: string;
  thumbnail: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full relative p-5 sm:p-14 md:p-20 h-[180vh] grid grid-cols-1 md:grid-cols-3  mx-auto gap-5 ">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative overflow-hidden",
              selected?.id === card.id
                ? "rounded-lg cursor-pointer absolute inset-0 h-1/2 w-full md:w-1/2 m-auto z-30 flex justify-center items-center flex-wrap flex-col"
                : lastSelected?.id === card.id
                ? "z-20 bg-white rounded-xl h-full w-full"
                : "bg-white rounded-xl h-full w-full"
            )}
            layout
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <div className="rounded-lg cursor-pointer absolute inset-0   w-full  m-auto flex justify-center items-center flex-wrap flex-col ">
              <p
                className={`text-white bottom-5 text-2xl left-5 absolute z-20 ${
                  selected?.id === card.id && "hidden"
                }`}
              >
                {card.content.title}
                <br />
                <span className="text-sm"> Read more {"->"}</span>
              </p>
              <BlurImage card={card} />
            </div>
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 0.3 : 0 }}
      />
    </div>
  );
};

const BlurImage = ({ card }: { card: Card }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <Image
      src={card.thumbnail}
      height="500"
      width="500"
      onLoad={() => setLoaded(true)}
      className={cn(
        "object-cover object-top  absolute inset-0 h-full w-full transition duration-200",
        loaded ? "blur-none" : "blur-md"
      )}
      alt="thumbnail"
    />
  );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
        }}
        className="absolute inset-0 h-full w-full bg-black opacity-60 z-10"
      />
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative px-8 pb-4 z-[70]"
      >
        <div>
          <h2 className="font-bold text-5xl text-white">
            {selected?.content?.title}
          </h2>

          <p className="font-light mb-5 text-base my-4 max-w-xl text-neutral-200">
            {selected?.content?.description}
          </p>
          <Button variant={"secondary"} size={"lg"} className="group mb-5">
            Check Now
            <ArrowRightIcon className="h-5 w-5 ml-2 transition-all duration-300 group-hover:translate-x-2" />
          </Button>
        </div>
      </motion.div>
    </div>
  );
};
