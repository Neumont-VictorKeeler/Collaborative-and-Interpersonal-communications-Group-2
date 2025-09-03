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
  const [activePage, setActivePage] = useState<number>(0);

  // Map IDs to page components
  const pages: Record<number, JSX.Element> = {
    
    0: <StartNode />,
    1: <StartStory />,
    2: <GoodPath1 />,
    3: <GoodPath2 />,
    4: <GoodPath3 />,
    5: <GoodEnding />,
    6: <NeutralPath1 />,
    7: <NeutralPath2 />,
    8: <NeutralPath3 />,
    9: <NeutralEnding />,
    10: <BadPath1 />,
    11: <BadPath2 />,
    12: <BadPath3 />,
    13: <BadEnding />
  };
  const totalPages = Object.keys(pages).length -1;
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (!isNaN(value) && value >= 0 && value <= totalPages) {
      setActivePage(value);
    }
  };
  return (
    <div>
      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <button
          onClick={() => setActivePage((p) => Math.max(0, p - 1))}
          disabled={activePage === 0}
        >
          Back
        </button>

        <input
          type="number"
          min={0}
          max={totalPages}
          value={activePage}
          onChange={handleInputChange}
          style={{ width: "60px", textAlign: "center" }}
        />

        <button
          onClick={() => setActivePage((p) => Math.min(totalPages, p + 1))}
          disabled={activePage === totalPages}
        >
          Next
        </button>
      </div>

      <div>{pages[activePage]}</div>
    </div>
  );
}
