"use client";
import React, { useState } from "react";

type Difference = {
  x: number; // normalized (0–1)
  y: number; // normalized (0–1)
  radius: number; // normalized radius (0–1)
};

// Full differences list
const differences: Difference[] = [
  { x: 0.25, y: 0.53, radius: 0.04 },
  { x: 0.81, y: 0.52, radius: 0.07 },
  { x: 0.05, y: 0.52, radius: 0.04 },
  { x: 0.65, y: 0.60, radius: 0.05 },
  { x: 0.20, y: 0.65, radius: 0.09 },
  
  { x: 0.45, y: 0.5, radius: 0.06 },
];

export default function GoodPath3({ goTo }: { goTo: (page: number) => void }) {
  const [found, setFound] = useState<boolean[]>(differences.map(() => false));
  const [clicks, setClicks] = useState<{ x: number; y: number }[]>([]);
  const [checked, setChecked] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (checked) return; 

    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = (e.clientX - rect.left) / rect.width;
    const clickY = (e.clientY - rect.top) / rect.height;

    console.log(`Clicked at: { x: ${clickX.toFixed(2)}, y: ${clickY.toFixed(2)} }`);
    setClicks([...clicks, { x: clickX, y: clickY }]);

    const updated = [...found];
    differences.forEach((diff, i) => {
      const dx = clickX - diff.x;
      const dy = clickY - diff.y;
      if (Math.sqrt(dx * dx + dy * dy) <= diff.radius) {
        updated[i] = true;
      }
    });
    setFound(updated);
  };

  const handleCheck = () => setChecked(true);
  const handleReset = () => {
    setFound(differences.map(() => false));
    setClicks([]);
    setChecked(false);
  };

  const totalFound = found.filter(Boolean).length;

  return (
    <div className="w-screen h-screen bg-black flex flex-col items-center justify-center p-4">
      <h1 className="text-yellow-400 text-3xl md:text-5xl font-serif mb-2 text-center">
         White Gloves - Spot the Difference
      </h1>

      <div className="flex flex-col md:flex-row gap-4 w-full h-full max-w-6xl">
       
        <div className="flex-1 flex items-center justify-center">
          <img
            src="/images/Clean_Kitchen.png"
            alt="Picture 1"
            className="w-full h-auto object-contain border-4 border-yellow-500 rounded-lg shadow-lg"
          />
        </div>

        <div
          className="flex-1 flex items-center justify-center relative"
          onClick={handleClick}
        >
          <img
            src="/images/Dirty_Kitchen.png"
            alt="Picture 2"
            className="w-full h-auto object-contain border-4 border-yellow-500 rounded-lg shadow-lg"
          />

          {/* Show found spots (green circles) */}
          {found.map(
            (isFound, i) =>
              isFound && (
                <div
                  key={`found-${i}`}
                  className="absolute border-4 border-green-500 rounded-full pointer-events-none"
                  style={{
                    left: `${differences[i].x * 100}%`,
                    top: `${differences[i].y * 100}%`,
                    width: `${differences[i].radius * 200}%`,
                    height: `${differences[i].radius * 200}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                />
              )
          )}
        </div>
      </div>

      {/* Controls */}
      <div className="mt-4 flex gap-4 items-center">
        {!checked && (
          <button
            onClick={handleCheck}
            className="px-6 py-2 bg-yellow-500 text-black font-bold rounded-lg shadow-md"
          >
            Check Answers
          </button>
        )}

        {checked && (
          <>
            <div className="text-white text-lg">
              You found {totalFound} / {differences.length} differences!
            </div>
            <button
              onClick={handleReset}
              className="px-6 py-2 bg-gray-600 text-white font-bold rounded-lg shadow-md"
            >
              Reset
            </button>
            <button
              onClick={() => {
                if (totalFound === differences.length) {
                  goTo(5); 
                } else if (totalFound > differences.length / 2) {
                  goTo(9); 
                } else {
                  goTo(13); 
                }
              }}
              className="px-6 py-2 bg-green-500 text-black font-bold rounded-lg shadow-md"
            >
              Continue
            </button>
          </>
        )}
      </div>
    </div>
  );
}
