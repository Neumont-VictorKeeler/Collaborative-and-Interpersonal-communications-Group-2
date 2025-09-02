import React from "react";

export default function StartStory() {
    const PAGES = {
    good: 2,
    neutral: 6,
    bad: 10,
  };
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <img src="https://images.squarespace-cdn.com/content/v1/5d5c1cdefb7b6c0001b75b60/1585088474296-O2JSRN6DPHLAHBJKNJPL/BUILDING_fullcolor.jpg?format=2500w" alt="" className="w-500 h-150" />   
        <span>
        It’s your first week at Neumont. You’ve unpacked, met your roommate, and have your first free evening. You used it to:
        </span> 
        <div>
            <p className="rounded-xl px-3 py-2 border border-gray-300 m-8">
               Good: Go to Neubies’ Ice Cream Social.<br/>
               Advance to page - <b>{PAGES.good}</b>
            </p>
            <p className="rounded-xl px-3 py-2 border border-gray-300 m-8">
               Neutral: Stay at your dorm and review your schedule.<br/>
               Advance to page - <b>{PAGES.neutral}</b>
            </p>
            <p className="rounded-xl px-3 py-2 border border-gray-300 m-8">
               Bad: You stay home and play you’re favorite video games.<br/>
               Advance to page - <b>{PAGES.bad}</b>
            </p>
        </div>
    </main>
    </div>
  );
}
