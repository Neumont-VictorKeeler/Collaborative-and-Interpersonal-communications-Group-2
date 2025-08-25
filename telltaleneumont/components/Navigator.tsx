"use client"; // needed since it uses state

import { JSX, useState } from "react";
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
export default function Navigator() {
  const [activePage, setActivePage] = useState<number>(1);

  // Map IDs to page components
  const pages: Record<number, JSX.Element> = {
    1: <GoodPath1 />,
    2: <GoodPath2 />,
    3: <GoodPath3 />,
    4: <GoodEnding />,
    5: <NeutralPath1 />,
    6: <NeutralPath2 />,
    7: <NeutralPath3 />,
    8: <NeutralEnding />,
    9: <BadPath1 />,
    10: <BadPath2 />,
    11: <BadPath3 />,
    12: <BadEnding />,

  };
  const totalPages = Object.keys(pages).length;
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (!isNaN(value) && value >= 1 && value <= totalPages) {
      setActivePage(value);
    }
  };
  return (
    <div>
      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <button
          onClick={() => setActivePage((p) => Math.max(1, p - 1))}
          disabled={activePage === 1}
        >
          Back
        </button>

        <input
          type="number"
          min={1}
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
