import React, { useEffect, useMemo, useState } from "react";

export default function StartNode() {
  // --- Static values (edit these) ---
  const PRINTED_MESSAGE = "Hello, world!";
  const PAGES = {
    good: 1,     // correct JS console print
    neutral: 1,  // exact printed output only
    bad: 1,      // anything else
  };
  // ----------------------------------

  const [input, setInput] = useState("");
  const [result, setResult] = useState<null | "good" | "neutral" | "bad">(null);

  // Print to the real browser console for the user to find
  useEffect(() => {
    // What the user needs to locate in DevTools:
    console.log(PRINTED_MESSAGE);
  }, []);

  // Build regex that matches: console.log/info/warn/error('Start') with any quotes/backticks
  const consoleRegex = useMemo(() => {
    const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return new RegExp(
      String.raw`^\s*console\.(log|info|warn|error)\s*\(\s*(['"\`])${esc(
        PRINTED_MESSAGE
      )}\2\s*\)\s*;?\s*$`,
      "i"
    );
  }, []);

  function classify(value: string): "good" | "neutral" | "bad" {
    const raw = value.trim();
    if (consoleRegex.test(raw)) return "good";              // e.g. console.log('Hello, world!')
    if (raw === PRINTED_MESSAGE) return "neutral";          // e.g. Hello, world!
    return "bad";
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setResult(classify(input));
  }

  function reset() {
    setInput("");
    setResult(null);
  }

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-6 row-start-2 items-center sm:items-start w-full max-w-xl">
        <h1 className="text-2xl font-semibold">A Starting Test</h1>

        <div className="w-full rounded-2xl border border-gray-200 p-6">
          <ol className="list-decimal ml-5 text-sm space-y-2 mb-4">
            <li>
              Open your browser's Console with F12.
            </li>
            <li>
              Look for the exact message printed by this page
              <span className="text-gray-400"> (it was just logged for you)</span>.
            </li>
            <li>
              In the box below, type <span className="font-medium">either</span>:
              <ul className="list-disc ml-6 mt-1">
                <li>
                  The JavaScript to print it → <em>good path</em>
                </li>
                <li>
                  Exactly what was printed → <em>neutral path</em>
                </li>
              </ul>
            </li>
          </ol>

          <form onSubmit={handleSubmit} className="flex items-center gap-3">
            <label htmlFor="answer" className="sr-only">Your answer</label>
            <input
              id="answer"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Answer:"
              className="flex-1 rounded-xl border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              autoComplete="off"
            />
            <button
              type="submit"
              className="rounded-xl px-4 py-2 border bg-black text-white hover:opacity-90 active:opacity-80"
            >
              Submit
            </button>
            {result && (
              <button
                type="button"
                onClick={reset}
                className="rounded-xl px-3 py-2 border border-gray-300 hover:bg-gray-50"
              >
                Reset
              </button>
            )}
          </form>

          {/* Result */}
          <div className="mt-4 min-h-[2.5rem]" aria-live="polite" aria-atomic="true">
            {result === "good" && (
              <div className="rounded-lg bg-green-50 border border-green-200 px-3 py-2 text-sm text-green-800">
                Well done — go to page <b>{PAGES.good}</b> and read the good option.
              </div>
            )}
            {result === "neutral" && (
              <div className="rounded-lg bg-yellow-50 border border-yellow-200 px-3 py-2 text-sm text-yellow-800">
                Not bad — go to page <b>{PAGES.neutral}</b> and read the neutral option.
              </div>
            )}
            {result === "bad" && (
              <div className="rounded-lg bg-red-50 border border-red-200 px-3 py-2 text-sm text-red-800">
                Not a great start — go to page <b>{PAGES.bad}</b> and read the bad option.
              </div>
            )}
          </div>

          <p className="text-xs text-gray-500 mt-2">
            Tip: The neutral answer is case-sensitive. If you’re unsure, copy the message directly from the Console.
          </p>
        </div>
      </main>
    </div>
  );
}
