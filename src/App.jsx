import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Land from './Components/land/Land';
import Marquee from './Components/marquee/Marquee';
import About from './Components/about/About';
import Eyes from './Components/Eyes/Eyes';
import Featured from './Components/featured/Featured';
import Maincard from './Components/mainCard/Maincard';
import Footer from './Components/Footer/Footer';
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {
  
  const locomotiveScroll = new LocomotiveScroll();

  return (
    
        <div className='w-full h-screen text-white bg-zinc-900'>
        <Navbar/>
        <Land/>
        <Marquee/>
        <About/>
        <Eyes/>
        <Featured/>
        <Maincard/>
        <Footer/>

        </div>


  )
}

export default App
