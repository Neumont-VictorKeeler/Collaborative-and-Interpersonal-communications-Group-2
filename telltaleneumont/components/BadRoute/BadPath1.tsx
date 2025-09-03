import React, { useState } from "react";

export default function BadPath1() {
  const [view, setView] = useState<"main" | "bad" | "neutral">("main");

  function onClickBad(){
    setView("bad")
  }
  function onClickNeutral(){
    setView("neutral")
  }
  function onClickHygeine(){
    let e = document.getElementById("win");
    if(e){
    e.className = "visible indent-8"
    }

  }


  let content;
  if (view === "main"){
    content = (<>
    <img src="https://www.yourtango.com/sites/default/files/image_blog/smell-in-classroom-is-making-student-sick.png" alt="" />
    <p>    You got to sleep at 2AM the night before your class, in order to get enough sleep you skipped your shower and now you stink.</p>
        <button onClick={onClickNeutral} className="rounded-xl px-3 py-2 border border-gray-300 hover:bg-gray-50 m-4">
          Shower even though you will be 5 minutes late to your first class.       
        </button>  
        <button onClick={onClickBad} className="rounded-xl px-3 py-2 border border-gray-300 hover:bg-gray-50 m-4">
          You don’t smell that bad do it again tomorrow.
        </button>
    </>);
  }else if (view === "bad"){
      content = (<>
      <img src="https://www.wargamer.com/wp-content/sites/wargamer/2022/07/warhammer-40k-nurgle-papa-nurgle.jpg" alt="" />
      <p>This is definetely not you right now, proceed to page 11</p>
      </>);
  }else if (view === "neutral"){
      content = (<>
      <p className="indent-20">select an item related to hygeine</p>
      <div className="grid grid-cols-3 gap-4 flex justify-center items-center">
          <button className="w-30 h-30" onClick={onClickHygeine}>
            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAwQBAgUGB//EACwQAQACAQMCBAUEAwAAAAAAAAABAgMEESESMQVBUWETIjJxgUJSkeEGFNH/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EABwRAQEAAgMBAQAAAAAAAAAAAAABAhEDEjFBIf/aAAwDAQACEQMRAD8A+4gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMTOyPLlinEcyr36782mZc8uSYtSbWLajFX9W8+yK2rj9NJn7yrzVrs5Xly+L1ix/t288cfykrq8c/VvX8KYTkyh1jpVyUvHy2ifszu5m3O/mkpmyU7WmfaeW5zT6nV0BWpqv31/MJ6Xi8b1nd0mUviabANIAAAAAAAAo5LzGW2/q3reJjlrqabX6o7Sih489zL9dIszSJ7NLYmlckwmrlieJQQzTbyabLkxFoRZKbcggY3hm87Id9xUk2hr8botvWdkduO6rmz1p58rPxHb0mqrmjaeLx5eqy8ZHifwNTjtWe148/J7KO3D0ceW4xYyA6IAAAANL7xDdiY3gHL1mTJzEbxCrj1U0mIvG8esd3Wy4otHMKGo0fnVnLGZerKkx5K5I3paJ+zeHJtS+O29ZtW3snxa6a8Z68fuhwy4rPG5k6MWmOzfrmY5QY8lMkb0tEx7N3PxUOa2yjfU/DnlZ1XaXE1t/WxBLqvErcxE7OTqNZa8ztMoc+SN523lBSl894rHm3JtNrfhWG2v8Uw4e9erqvPpWO//Py+j1nh5r/HtNj0dJ6OclvqtPef6ehxzu74Y9WLUwxDLaAAAAAAMTCO1fZKApZtPTJE7w5+fRWr9Mbw7dqo7VB52aWx23rMxb1hNj1uSm0ZK9Uesd3Vy6al+8Qp5fD4ntbhm4y+rLpTz6zFas8zE+8ONq79c/LEz+Hcv4dzzv8Aw1r4dETxTn3ZnFjF7V5ymhy5Z3tHRV09Hoox8Y68+suxj8O3n5tl7DpaY+0ctySJVXRaXomLTHLqY68MVx7JIjZUZAAAAAAAAAAYmGQGk13YmiQBD0ex8NMAjikejaKxDYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//Z" alt="" />
          </button>
          <button className="w-30 h-30">
            <img src="https://images.squarespace-cdn.com/content/v1/5d5c1cdefb7b6c0001b75b60/1628637111214-FADFU91LLN59MXLNPG5B/eric_kohler_home_600.png?format=750w" alt="" />
          </button>
          <button className="w-30 h-30">
            <img src="https://www.cnet.com/a/img/resize/63f281d1fc4aabccc520b46df58a31c209a92b59/hub/2017/05/10/6dd6d29e-422f-4d71-8793-9bfc1e1ce758/kitchenaidblender-1.jpg?auto=webp&fit=crop&height=1200&width=1200" alt="" />
          </button>
          <button className="w-30 h-30">
            <img src="https://images.albertsons-media.com/is/image/ABS/105050025-C1N1?$ng-ecom-pdp-desktop$&defaultImage=Not_Available" alt="" />
          </button>
          <button className="w-30 h-30" onClick={onClickHygeine}>
            <img src="https://metrobathandtile.com/wp-content/uploads/best-shower-head.jpg" alt="" />
          </button>
          <button className="w-30 h-30">
            <img src="https://m.media-amazon.com/images/I/81PUCX4WwAL.jpg" alt="" />
          </button>
          <button className="w-30 h-30" onClick={onClickHygeine}>
            <img src="https://specialtyappliances.com/wp-content/uploads/2024/11/Ortho-Kit-Single-Head-Toothbrush-V-Trim-1.png" alt="" />
          </button>
          <button className="w-30 h-30">
            <img src="https://i5.walmartimages.com/seo/Mountain-Dew-Baja-Blast-Tropical-Lime-Citrus-Soda-Pop-20-fl-oz-Bottle_7912d466-930c-4219-ad91-72bdf7bae13d.4313e3564c2847696d427b1ec5254bd0.jpeg" alt="" />
          </button>
          <button className="w-30 h-30 " onClick={onClickHygeine}>
            <img src="https://images.albertsons-media.com/is/image/ABS/151050208-C1N1?$ng-ecom-pdp-mobile$&defaultImage=Not_Available" alt="" />
          </button>
      </div>      
      <p id="win" className="invisible">
        Great! You no longer stink! Proceed to page 7.
      </p>
      </>);
  }

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {content}
    </main>
    </div>
  );
}
