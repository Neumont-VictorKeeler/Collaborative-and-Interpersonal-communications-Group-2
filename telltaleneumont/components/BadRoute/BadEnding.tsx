import React from "react";

export default function BadEnding() {
  return (
    <div
      className="relative font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-[100dvh] p-8 pb-20 gap-16 sm:p-20 bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://as2.ftcdn.net/jpg/02/36/99/83/1000_F_236998308_68dNjYhDYLJ9LAuDgFTyrB6jX1LqJKnF.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/50 pointer-events-none" aria-hidden="true" />

      <main className="relative z-10 flex flex-col gap-8 row-start-2 items-center sm:items-start text-white">
        <p className="text-[20px]">You've done so poorly that you got kicked out of school and are left begging</p>
        <p className="self-center text-[20px]">Bad Ending.</p>
      </main>
    </div>
  );
}
