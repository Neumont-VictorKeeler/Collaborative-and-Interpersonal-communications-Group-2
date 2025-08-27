import React from "react";

export default function Neutralending() {
  return (
    <div
      className="relative font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-[100dvh] p-8 pb-20 gap-16 sm:p-20 bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fget.pxhere.com%2Fphoto%2Foffice-job-white-collar-worker-design-collaboration-interior-design-event-technology-learning-employment-team-conversation-meeting-software-engineering-company-computer-business-building-1555089.jpg&f=1&nofb=1&ipt=fbe472156f95cae702115d416f1e2acfbf1d0af28128ed8a7c5db5c988d772d9')",
      }}
    >
      <div className="absolute inset-0 bg-black/50 pointer-events-none" aria-hidden="true" />

      <main className="relative z-10 flex flex-col gap-8 row-start-2 items-center sm:items-start text-white">
        <p className="text-[20px]">You graduated with C's and got a middling job</p>
        <p className="self-center text-[20px]">Neutral Ending.</p>
      </main>
    </div>
  );
}
