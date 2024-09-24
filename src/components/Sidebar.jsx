import { useState, useEffect } from 'react'
import { FaUtensils } from "react-icons/fa";
import { LuHome, LuHeart  } from "react-icons/lu";
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
        <DesktopSidebar />
        <MobileSidebar />
    </>
  )
}

export const DesktopSidebar = () => {
  const [showTooltip, setShowTooltip] = useState(window.innerWidth < 768);


  useEffect(() => {
    const handleResize = () => {
      setShowTooltip(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='min-h-screen p-3 md:p-10 bg-[#ECFFE6] shadow-lg w-24 md:w-64 hidden sm:block app-transition'>
      <div className='flex flex-col gap-20'>
        <Link to='/' className='flex flex-col items-center cursor-pointer hover:opacity-80'>
            <div className='w-[50px] h-[50px] md:w-[70px] md:h-[70px] flex flex-col items-center justify-center  border-[3px] border-green-500 rounded-full app-transition'>
                <FaUtensils className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] text-green-500 app-transition"/>
            </div>
            <p className='text-2xl hidden md:block font-bold app-transition'>
              <span className='text-green-500'>Reci</span>
              <span>Feast</span>
            </p>
        </Link>
        <ul className='flex flex-col items-center md:items-start gap-4'>
            <Link to='/' className={(showTooltip ? "tooltip tooltip-right" : "") + " flex items-center gap-1 p-1 hover:text-green-500 app-transition"} data-tip="Home">
              <LuHome size={24} />
              <span className="font-bold md:block hidden">Home</span>
            </Link>
            <Link to='/favorites' className={(showTooltip ? "tooltip tooltip-right" : "") + " flex items-center gap-1 p-1 hover:text-green-500 app-transition"} data-tip="Favorites">
              <LuHeart size={24} />
              <span className="font-bold md:block hidden">Favorites</span>
            </Link>
        </ul>
      </div>
    </div>
  )
}

export const MobileSidebar = () => {
  return (
    <div className="h-[50px] p-1 bg-[#ECFFE6] shadow-lg fixed bottom-0 w-full block sm:hidden z-10">
      <ul className='flex items-center justify-evenly h-full'>
          <Link to='/' className="flex items-center gap-1 p-1 hover:text-green-500 app-transition tooltip tooltip-top" data-tip="Home">
            <LuHome size={25} />
          </Link>
          <Link to='/favorites' className="flex items-center gap-1 p-1 hover:text-green-500 app-transition tooltip tooltip-top"data-tip="Favorites">
            <LuHeart size={25} />
          </Link>
      </ul>
    </div>    
  )
}

export default Sidebar

