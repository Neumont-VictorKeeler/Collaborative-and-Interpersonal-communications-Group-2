import React, { useState } from "react";

export default function NeutralPath1() {
  const [view, setView] = useState<"main" | "good" | "neutral" | "bad">("main");

  function onClickGood(){
    setView("good")
  }
  function onClickNeutral(){
    setView("neutral")
  }function onClickBad(){
    setView("bad")
  }
  const [text, setText] = useState("");
  const element = document.getElementById("win")
  const element2 = document.getElementById("win2")

  if(element){
  if(parseInt(text) > 10){
    element.textContent = "You passed! Proceed to page 7."
  }else{
    element.textContent = "Not enough!"
  }
  }
  if(element2){
  const element = document.getElementById("win2")
  if(element){
  if(text === "Lacy Clawson" ){
    element2.textContent = "Correct, they can help get your classes in order! Proceed to page 3."
  }else{
    element2.textContent = "Thats not who you're looking for"
  }
  }
  
}

  

  let content;
  if (view === "main"){
    content = (<>
    <img src="https://i0.wp.com/datachant.com/wp-content/uploads/2016/01/2-01.png?ssl=1" alt="" />
    Your schedule is looking pretty good but you are unsure about some of your classes.
        <button onClick={onClickGood} className="rounded-xl px-3 py-2 border border-gray-300 hover:bg-gray-50 m-4">
            Visit the registrar and get some clarification.        </button>    
        <button onClick={onClickNeutral} className="rounded-xl px-3 py-2 border border-gray-300 hover:bg-gray-50 m-4">
            Study extra hard to make sure you pass. 
        </button>
        <button onClick={onClickBad} className="rounded-xl px-3 py-2 border border-gray-300 hover:bg-gray-50 m-4">
            Eh, It’ll be fine. Think of all the video games you can play instead. 
        </button>
    </>);
  }else if (view === "good"){
     content = (<>
     <img src="https://registrar.indianatech.edu/wp-content/uploads/sites/13/registrar-signage.jpg" alt="" className="w-300 h-150" />
     <p>whats the registrars name again?</p>
     <input type="text" className="border border-gray-300 px-4 py-2" value={text}
        onChange={(e) => setText(e.target.value)}>
      </input>
      <p id="win2"></p>
      </>
      )
  }else if (view === "neutral"){
      content = (<>
     <img src="https://cwi.edu/sites/default/files/news_ct/image/study-strategies-banner.jpg" alt="" className="w-175 h-150" />
     <p>how many hours do you study?</p>
     <input type="text" className="border border-gray-300 px-4 py-2" value={text}
        onChange={(e) => setText(e.target.value)}>
      </input>
      <p id="win"></p>
     </>);
  }else if (view === "bad"){
      content = (<>
      <img src="https://www.shutterstock.com/image-photo/young-man-red-headphones-white-260nw-561409516.jpg" alt="" />
      <p>You let your team and yourself down. Do better. Go to page 11.</p>
      </>)
  }
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {content}
    </main>
    </div>
  );

}
