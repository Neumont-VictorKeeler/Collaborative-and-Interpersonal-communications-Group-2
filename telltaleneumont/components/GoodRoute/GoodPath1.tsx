import React, { useState } from "react";

export default function GoodPath1() {

  const [view, setView] = useState<"main" | "good" | "neutral">("main");

  const professors: string[] = [
    'https://images.squarespace-cdn.com/content/v1/5d5c1cdefb7b6c0001b75b60/1628636697026-8ZE6ZK56K0MKIJF9JVMR/Brett%2BBeardall%2Bbackground%2Bdelete.jpg?format=500w',
    'https://images.squarespace-cdn.com/content/v1/5d5c1cdefb7b6c0001b75b60/1628636726335-SLQ6EIJYT3SBJB5EH2J9/corey_burke_home_600.jpg?format=750w',
    'https://images.squarespace-cdn.com/content/v1/5d5c1cdefb7b6c0001b75b60/1628636742118-ICR360LTF3QYPXZ97530/chris_cantera_home_600.png?format=750w',
    'https://images.squarespace-cdn.com/content/v1/5d5c1cdefb7b6c0001b75b60/1666714887825-A0L4VIM3FM96ZL2XX5P4/Sarah+Carter+Headshot-100.jpg?format=750w',
    'https://images.squarespace-cdn.com/content/v1/5d5c1cdefb7b6c0001b75b60/1740416293611-7JEPDNM6K3GH0JZB1VVZ/image-asset.jpeg?format=750w',
    'https://images.squarespace-cdn.com/content/v1/5d5c1cdefb7b6c0001b75b60/1664990117409-6LEK9E3P6UY5Z61XTTTB/ryan_cox_home_600.png?format=750w',
    'https://images.squarespace-cdn.com/content/v1/5d5c1cdefb7b6c0001b75b60/1649111267243-D65BCBCGR4OMAMHIPUHE/Paul+Fox.png?format=750w',
    'https://images.squarespace-cdn.com/content/v1/5d5c1cdefb7b6c0001b75b60/1628637111214-FADFU91LLN59MXLNPG5B/eric_kohler_home_600.png?format=750w',
    'https://images.squarespace-cdn.com/content/v1/5d5c1cdefb7b6c0001b75b60/1628637130218-359Q1DLBFT5DSVJO9MJA/raymond_maple_home_600.png?format=750w',
    'https://images.squarespace-cdn.com/content/v1/5d5c1cdefb7b6c0001b75b60/1628637160061-AJE47B22FZCP5Y9VBAHV/kirk_marshall_600.png?format=750w',
    'https://images.squarespace-cdn.com/content/v1/5d5c1cdefb7b6c0001b75b60/1706035043134-ZFI8I3Y5OHS4YKP6Z6CL/Cam+Peterson+Edited%402x-100.jpg?format=750w',
    'https://images.squarespace-cdn.com/content/v1/5d5c1cdefb7b6c0001b75b60/1635199056824-KBUDN1RPVYTDX6LY39NK/Michael+Pritchard+Headshot.jpg?format=750w',
    'https://images.squarespace-cdn.com/content/v1/5d5c1cdefb7b6c0001b75b60/1667513711059-WVJEKT17HUJDN0NMR5TP/Joe+Shull-100.jpg?format=750w',
    'https://images.squarespace-cdn.com/content/v1/5d5c1cdefb7b6c0001b75b60/1706045377165-IEIQ7889T82HYYMTGN8T/Omkar+Terse-8.png?format=750w'
  ]

  function getRandomProfessor(){
    let s = professors[Math.floor(Math.random() * professors.length)]
    return s
  }

  function onClickGood(){
    setView("good")
  }
  function onClickNeutral(){
    setView("neutral")
  }

  function onClickWon(){
    setGoodText("good job! proceed to page 3.");
  }
  function onClickLost(){
    setRandomProfessor(getRandomProfessor());
    setGoodText("Try this one instead!");
  }

  const [randomProfessor, setRandomProfessor] = useState<string>(getRandomProfessor());
  const [goodText, setGoodText] = useState("Find this professor on the third floor and challenge them!");

  let content;
  if (view === "main"){
    content = (
      <>
        <img src="https://unboxedexperiences.com/wp-content/uploads/2023/04/virtual-ice-cream-social.jpg" alt="" />
        <p>You’ve met some of yours peers, and your first classes are rapidly approaching. Choose your next step.</p>
        <button onClick={onClickGood} className="rounded-xl px-3 py-2 border border-gray-300 hover:bg-gray-50 m-4">
          Introduce yourself to your professors with a friendly game of Rock-Paper-Scissors.
        </button>
            
        <button onClick={onClickNeutral} className="rounded-xl px-3 py-2 border border-gray-300 hover:bg-gray-50 m-4">
          Attend Classes and be silent. 
        </button>
        </>
    )
  }else if (view === "good"){
      content = (
        <>
        <div>
          <img src= {randomProfessor} alt="" />
          {goodText}
        </div>
        <button onClick={onClickWon} className="rounded-xl px-3 py-2 border border-gray-300 hover:bg-gray-50 m-4">
            I won!
          </button>
            
          <button onClick={onClickLost} className="rounded-xl px-3 py-2 border border-gray-300 hover:bg-gray-50 m-4">
            I lost/Couldn't find them
          </button>
        </>
      )
  }else if (view === "neutral"){
      content = (
        <>
          <img src="https://cdn7.dissolve.com/p/D187_177_011/D187_177_011_1200.jpg" alt="" />
          You attend class.... Noting happens... go to page 7
        </>
      )
  }
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {content}
    </main>
    </div>
  );
}
