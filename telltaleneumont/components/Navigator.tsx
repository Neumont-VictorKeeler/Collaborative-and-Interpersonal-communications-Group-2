"use client"; // needed since it uses state

import { JSX, useState } from "react";
import StartNode from "./StartNode";
import GoodPath1 from "./GoodRoute/GoodPath1";
import GoodPath2 from "./GoodRoute/GoodPath2";
import GoodPath3 from "./GoodRoute/GoodPath3";
import GoodEnding from "./GoodRoute/GoodEnding";
import NeutralPath1 from "./NeutralRoute/NeutralPath1";
import NeutralPath2 from "./NeutralRoute/NeutralPath2";
import NeutralPath3 from "./NeutralRoute/NeutralPath3";
import NeutralEnding from "./NeutralRoute/NeutralEnding";
import BadPath1 from "./BadRoute/BadPath1";
import BadPath2 from "./BadRoute/BadPath2";
import BadPath3 from "./BadRoute/BadPath3";
import BadEnding from "./BadRoute/BadEnding";
import StartStory from "./StartStory"
export default function Navigator() {
    const [currentPage, setCurrentPage] = useState(1);

  // Map IDs to page components
  const pages: Record<number, JSX.Element> = {
    
    0: <StartNode goTo={setCurrentPage} />,
    1: <StartStory goTo={setCurrentPage}/>,
    2: <GoodPath1 goTo={setCurrentPage} />,
    3: <GoodPath2 goTo={setCurrentPage} />,
    4: <GoodPath3 goTo={setCurrentPage} />,
    5: <GoodEnding />,
    6: <NeutralPath1 goTo={setCurrentPage} />,
    7: <NeutralPath2 goTo={setCurrentPage} />,
    8: <NeutralPath3 goTo={setCurrentPage} />,
    9: <NeutralEnding/>,
    10: <BadPath1 goTo={setCurrentPage} />,
    11: <BadPath2 goTo={setCurrentPage} />,
    12: <BadPath3 goTo={setCurrentPage} />,
    13: <BadEnding />,
  };
  
  return (
    <div>
      {pages[currentPage]}
    </div>
  );
}
