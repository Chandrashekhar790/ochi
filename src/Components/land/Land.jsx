import { motion } from "framer-motion";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Land = () => {

  

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.9" className="w-full h-screen  bg-zinc-900 pt-1">
      <div className="textstructure mt-40 px-14">
        {["We create", "eye-opening", "presentations"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-center ">
                {index === 1 && <motion.div initial = {{width:0}} animate = {{width:"8.5rem"}} transition={{ease:[0.76, 0, 0.24, 1],duration:1 }} className="w-[8.5rem] h-[5.6vw] mt-[0.9rem] mr-4 rounded-lg overflow-hidden ">
                  <img src="../tag.jpg" alt="" className="w-full h-full" />
                </motion.div>}

                <h1 className="main uppercase text-[8.5rem] tracking-normal leading-[6.7vw]">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}

        {/* <div className="masker">

                <h1 className='main uppercase text-[10rem] font-thin leading-[10vw]'>eye opening</h1>
            </div>

            <div className="masker">

                <h1 className='main uppercase text-9xl font-thin leading-[5.5vw]'>presentations</h1>
            </div> */}
      </div>

      <div className="border-t-[1px] border-zinc-800 mt-24 flex justify-between items-center py-4 px-14 manu font-extralight ">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => {
          return <p className="text-md font-light leading-none">{item}</p>;
        })}

        <div className="start flex justify-between gap-2 text-white ">
          <div className="px-4 py-2 border-[2px]  border-zinc-600 rounded-full text-sm hover:border-white font-thin manu cursor-pointer hover:bg-white hover:text-black ">
            START THE PROJECT
          </div>
          <div className="w-10 h-10 py-[0.4rem] px-[0.30rem] rounded-full text-2xl  border-[2px] border-zinc-600 hover:border-white cursor-pointer hover:bg-white hover:text-black">
            <GoArrowUpRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Land;
