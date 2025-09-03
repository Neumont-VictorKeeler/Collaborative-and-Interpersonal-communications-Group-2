import React, { useState } from "react";

export default function NeutralPath1({ goTo }: { goTo: (page: number) => void }) {
  const [view, setView] = useState<"main" | "good" | "neutral" | "bad">("main");
  const [text, setText] = useState("");

  // Derived values
  const studyMessage =
    view === "neutral"
      ? parseInt(text) > 10
        ? "You passed!."
        : text === ""
        ? ""
        : "Not enough!"
      : "";

  const registrarMessage =
    view === "good"
      ? text === "Lacy Clawson"
        ? "Correct, they can help get your classes in order!."
        : text === ""
        ? ""
        : "That's not who you're looking for"
      : "";

  let content;
  if (view === "main") {
    content = (
      <>
        <img
          src="https://i0.wp.com/datachant.com/wp-content/uploads/2016/01/2-01.png?ssl=1"
          alt=""
        />
        <p>
          Your schedule is looking pretty good but you are unsure about some of
          your classes.
        </p>
        <button
          onClick={() => setView("good")}
          className="rounded-xl px-3 py-2 border border-gray-300 hover:bg-gray-50 m-4"
        >
          Visit the registrar and get some clarification.
        </button>
        <button
          onClick={() => setView("neutral")}
          className="rounded-xl px-3 py-2 border border-gray-300 hover:bg-gray-50 m-4"
        >
          Study extra hard to make sure you pass.
        </button>
        <button
          onClick={() => setView("bad")}
          className="rounded-xl px-3 py-2 border border-gray-300 hover:bg-gray-50 m-4"
        >
          Eh, It’ll be fine. Think of all the video games you can play instead.
        </button>
      </>
    );
  } else if (view === "good") {
    content = (
      <>
        <img
          src="https://registrar.indianatech.edu/wp-content/uploads/sites/13/registrar-signage.jpg"
          alt=""
          className="w-300 h-150"
        />
        <p>What’s the registrar’s name again?</p>
        <input
          type="text"
          className="bg-white border border-gray-300 px-4 py-2 text-black"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <p>{registrarMessage}</p>

        {registrarMessage.startsWith("Correct") && (
          <button
            onClick={() => goTo(3)}
            className="rounded-xl px-3 py-2 border border-gray-300 hover:bg-gray-50 m-4"
          >
            Next
          </button>
        )}
      </>
    );
  } else if (view === "neutral") {
    content = (
      <>
        <img
          src="https://cwi.edu/sites/default/files/news_ct/image/study-strategies-banner.jpg"
          alt=""
          className="w-175 h-150"
        />
        <p>How many hours do you study?</p>
        <input
          type="text"
          className="bg-white border border-gray-300 px-4 py-2 text-black"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <p>{studyMessage}</p>

        {studyMessage === "You passed!." && (
          <button
            onClick={() => goTo(7)}
            className="rounded-xl px-3 py-2 border border-gray-300 hover:bg-gray-50 m-4"
          >
            Next
          </button>
        )}
      </>
    );
  } else if (view === "bad") {
    content = (
      <>
        <img
          src="https://www.shutterstock.com/image-photo/young-man-red-headphones-white-260nw-561409516.jpg"
          alt=""
        />
        <p>You let your team and yourself down. Do better.</p>
        <button
          onClick={() => goTo(11)}
          className="rounded-xl px-3 py-2 border border-gray-300 hover:bg-gray-50 m-4"
        >
          Next
        </button>
      </>
    );
  }

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 text-white">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {content}
      </main>
    </div>
  );
}
