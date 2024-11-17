import React, { useEffect, useState } from "react";

const Eyes = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

      setRotate(angle - 180);
    });
  });

  return (
    <div className="eyes w-full  h-screen overflow-hidden  ">
      <div data-scroll data-scroll-section data-scroll-speed="-.8" className='relative w-full h-full  flex  items-center'>
      <img src="../bag.jpg" alt="" />
        <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-10 ">
          <div data-scroll data-scroll-section data-scroll-speed=".1" className=" flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
            <div className="relative flex items-center justify-center  w-3/5 h-3/5 rounded-full bg-[#000] ">
              <p className="uppercase text-xl">Play</p>
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className=" line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  w-full h-10 "
              >
                <div className=" w-5 h-5 rounded-full bg-zinc-100 "></div>
              </div>
            </div>
          </div>

          <div data-scroll data-scroll-section data-scroll-speed=".1" className=" flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
            <div className="relative flex items-center justify-center w-3/5 h-3/5 rounded-full bg-[#000] ">
              <p className="uppercase text-xl">Play</p>

              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  w-full h-10 "
              >
                <div className=" w-5 h-5 rounded-full bg-zinc-100 "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
