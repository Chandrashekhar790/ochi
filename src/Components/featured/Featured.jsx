import { motion, useAnimation } from "framer-motion";
import React from "react";

const Featured = () => {
  const cards = [useAnimation(), useAnimation(), useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full pb-20 bg-zinc-900">
      <div className="w-full px-10 pt-20 pb-10">
        <h1 className="manu text-6xl">Featured projects</h1>
      </div>

      <hr className="border-t-[.5px] pb-16 border-zinc-700" />

      <div className="parent-card w-full flex px-10 gap-5 relative">
        <motion.div
          onHoverStart={() => handleHover(0)}
          onHoverEnd={() => handleHoverEnd(0)}
          className="main-card w-full  "
        >
          <div className="w-full flex gap-3 items-center">
            <div className="h-3 w-3 rounded-full bg-white"></div>
            <h1 className="manu">Cardboard Spaceship</h1>
          </div>

          <div className="w-full h-[80vh]  mt-6 rounded-xl overflow-hidden">
            {/* inline-block translate-y-full */}

            <img
              src="../1.png"
              alt=""
              className="w-full h-full object-cover "
            />
          </div>

          <div className="py-6 flex  gap-4">
            <button className="uppercase py-2 px-4 border-[1px] rounded-full">
              Branded Template
            </button>
            <button className="uppercase py-2 px-4 border-[1px] rounded-full">
              Branded Template
            </button>
            <button className="uppercase py-2 px-4 border-[1px] rounded-full">
              Branded Template
            </button>
          </div>
        </motion.div>

        <h1 className="absolute  text-[8vw] left-1/4 top-1/3 text-[#CDEA68] leading-none main uppercase overflow-hidden">
          {"Cardboard-Spaceship".split("").map((item, index) => (
            <motion.span
              initial={{ y: "100%" }}
              animate={cards[0]}

              transition = {{ease:[0.22, 1, 0.36, 1], delay:index*.02}}
              className="inline-block"
            >
              {item}
            </motion.span>
          ))}
        </h1>

       

        <motion.div 
          onHoverStart={() => handleHover(1)}
          onHoverEnd={() => handleHoverEnd(1)}
        
          className="main-card w-full ">
          <div className="w-full flex gap-3 items-center">
            <div className="h-3 w-3 rounded-full bg-white"></div>
            <h1 className="manu">AH2 & Matt Horn</h1>
          </div>

          <div className="w-full h-[80vh]  mt-6 rounded-xl overflow-hidden">
            <img
              src="../2.png"
              alt=""
              className="w-full h-full object-cover "
            />
          </div>

          <div className="py-6 flex  gap-4">
            <button className="uppercase py-2 px-4 border-[1px] rounded-full">
              pitch deck
            </button>
          </div>
        </motion.div>

        <h1 className="absolute text-[8vw] left-1/4 top-1/3 text-[#CDEA68] leading-none main uppercase overflow-hidden ">
        {"AH2 & Matt Horn".split('').map((item, index)=><motion.span
        
              initial={{ y: "100%" }}
              animate={cards[1]}

              transition = {{ease:[0.22, 1, 0.36, 1], delay:index*.02}}
              className="inline-block"
        
        
        >{item}</motion.span>)}</h1>


      </div>

      <div className="parent-card w-full flex px-10 gap-5 mt-10 relative">



        <motion.div 

        onHoverStart={() => handleHover(2)}
        onHoverEnd={() => handleHoverEnd(2)}
        
        className="main-card w-full ">
          <div className="w-full flex gap-3 items-center">
            <div className="h-3 w-3 rounded-full bg-white"></div>
            <h1 className="manu uppercase">Fyde</h1>
          </div>

          <div className="w-full h-[80vh] bg-green-600 mt-6 rounded-xl overflow-hidden">
            <img
              src="../3.png"
              alt=""
              className="w-full h-full object-cover "
            />
          </div>

          <div className="py-6 flex  gap-4">
            <button className="uppercase py-2 px-4 border-[1px] rounded-full">
              Branded Template
            </button>
            <button className="uppercase py-2 px-4 border-[1px] rounded-full">
              Branded Template
            </button>
            <button className="uppercase py-2 px-4 border-[1px] rounded-full">
              Branded Template
            </button>
          </div>
        </motion.div>

        <h1 className="absolute text-[8vw] left-1/2 top-1/3 -translate-x-[50%] text-[#CDEA68] leading-none main uppercase overflow-hidden ">
        {"fyde".split('').map((item, index)=><motion.span
        
              initial={{ y: "100%" }}
              animate={cards[2]}

              transition = {{ease:[0.22, 1, 0.36, 1], delay:index*.03}}
              className="inline-block"
        
        
        >{item}</motion.span>)}</h1>
        

        <motion.div 
        
        onHoverStart={() => handleHover(3)}
        onHoverEnd={() => handleHoverEnd(3)}
        
        
        className="main-card w-full ">
          <div className="w-full flex gap-3 items-center">
            <div className="h-3 w-3 rounded-full bg-white"></div>
            <h1 className="manu uppercase">vise</h1>
          </div>

          <div className="w-full h-[80vh] bg-green-600 mt-6 rounded-xl overflow-hidden">
            <img
              src="../4.jpg"
              alt=""
              className="w-full h-full object-cover "
            />
          </div>

          <div className="py-6 flex  gap-4">
            <button className="uppercase py-2 px-4 border-[1px] rounded-full">
              pitch deck
            </button>
          </div>
        </motion.div>

        <h1 className="absolute text-[8vw] left-1/2 top-1/3 -translate-x-[50%] text-[#CDEA68] leading-none main uppercase overflow-hidden ">
        {"vise".split('').map((item, index)=><motion.span
        
              initial={{ y: "100%" }}
              animate={cards[3]}

              transition = {{ease:[0.22, 1, 0.36, 1], delay:index*.03}}
              className="inline-block "
        
        
        >{item}</motion.span>)}</h1>


      </div>

      <button className="uppercase manu text-sm bg-[#bebbbb] flex gap-8 items-center ml-[45vw] text-black mt-16 py-4 px-6 rounded-full">
        view all case studies
        <div className="w-2 h-2 bg-black rounded-full"></div>
      </button>
    </div>
  );
};

export default Featured;
