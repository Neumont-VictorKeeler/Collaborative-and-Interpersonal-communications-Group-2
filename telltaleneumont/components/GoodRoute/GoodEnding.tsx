import React from "react";

export default function GoodEnding() {
  return (
    <div
      className="relative font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-[100dvh] p-8 pb-20 gap-16 sm:p-20 bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage:
          "url('')",
      }}
    >
      <div className="absolute inset-0 bg-black/50 pointer-events-none" aria-hidden="true" />

      <main className="relative z-10 flex flex-col gap-8 row-start-2 items-center sm:items-start text-white">
        <p className="text-[20px]">You graduated with A's and have many offers, you are well off</p>
        <p className="self-center text-[20px]">Good Ending.</p>
      </main>
    </div>
  );
}
