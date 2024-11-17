import React from 'react'



const About = () => {
  return (
    
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className='w-full py-20  bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl '>

      
        <h1 className='text-black manu px-10 text-[4vw] leading-[4vw]'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>

        

        <div className='w-full border-t-[1px] border-[#A6BD58] px-10 mt-20 flex'>

            <div className='w-1/2  pt-10 '>
                <h1 className='text-[#212121] manu text-[4vw] tracking-tight'>Our approach:</h1>
                <button className='uppercase manu text-sm bg-[#212121] flex gap-8 items-center text-white mt-3 py-4 px-6 rounded-full'>read more
                    <div className='w-2 h-2 bg-white rounded-full'></div>

                </button>
            </div>
            
            <div className='w-1/2 h-[70vh] rounded-xl bg-[#a2bc4b] mt-10 overflow-hidden '>
                <img src="../admi.jpg" alt="" />
            </div>    
       
       
        </div>  

    </div>

    
  )
}

export default About
