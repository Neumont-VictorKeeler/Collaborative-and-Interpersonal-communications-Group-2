"use client";
import React, { useState } from "react";

type Choice = { label: string; outcome: string; goToPage: number };
function goTo(page: number) {
  const inp = document.querySelector('input[type="number"]') as HTMLInputElement | null;
  if (!inp) return;
  inp.value = String(page);
  inp.dispatchEvent(new Event("change", { bubbles: true }));
}

export default function BadPath2({ goTo }: { goTo: (page: number) => void }) {
  const [picked, setPicked] = useState<Choice | null>(null);

  const choices: Choice[] = [
    { label: "Show up early, apologize, and ask how to catch up.", outcome: "Owning it pays off. You get materials and a clean slate.", goToPage: 4 },
    { label: "Slide in quietly, take notes, and hope no one notices.", outcome: "No drama, but you're missing context that'll cost time later.", goToPage: 8 },
    { label: "Ditch again—you'll start strong next week.'", outcome: "Now it's a pattern. Digging out gets harder and more public.", goToPage: 12 },
  ];

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-[#0a0b0d] text-[#e8eaf0]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full max-w-3xl">
        <div className="flex w-full items-baseline justify-between">
          <div>
            <h1 className="mt-1 text-2xl font-bold">Neumont: Week 1</h1>
          </div>
          <span className="text-xs text-[#9aa3b2] border border-[#242935] rounded-full px-2 py-1">CYOA • v1</span>
        </div>

        <div className="w-full rounded-3xl border border-[#242935] bg-[#13151a] shadow-[0_14px_34px_rgba(0,0,0,0.45)] p-5">
          <div className="font-mono">
            {!picked ? (
              <>
                <div className="text-xs uppercase tracking-wide text-[#9aa3b2] mb-2">Scenario</div>
                <p className="mb-4">
                  You missed a class and people noticed. Day two: everyone's watching if you show up—and how you handle it.
                </p>

                <div className="text-xs uppercase tracking-wide text-[#9aa3b2] mb-2">Pick your move</div>
                <div className="grid gap-2">
                  {choices.map((c, i) => (
                    <button
                      key={i}
                      onClick={() => setPicked(c)}
                      className="text-left rounded-2xl border border-[#242935] px-4 py-3 hover:border-[#F9A602] focus:outline-none focus:ring-4 focus:ring-[#F9A602]/30 transition"
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <>
                <div className="text-xs uppercase tracking-wide text-[#9aa3b2] mb-2">You chose</div>
                <div className="rounded-2xl border border-[#242935] p-4 mb-3">
                  <div className="font-semibold">{picked.label}</div>
                  <p className="opacity-90 mt-1">{picked.outcome}</p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => goTo(picked.goToPage)}
                    className="rounded-xl px-4 py-2 font-semibold bg-[#F9A602] text-[#0b0b0c]"
                  >
                    Continue
                  </button>
                  <button
                    onClick={() => setPicked(null)}
                    className="rounded-xl px-4 py-2 border border-[#242935]"
                  >
                    Try another choice
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
