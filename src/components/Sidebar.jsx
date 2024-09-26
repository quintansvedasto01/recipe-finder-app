import { useState, useEffect } from 'react'
import { FaUtensils } from "react-icons/fa";
import { LuHome, LuHeart, LuMoonStar, LuSun  } from "react-icons/lu";
import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {
  
  return (
    <>
        <DesktopSidebar />
        <MobileSidebar />
    </>
  )
}

export const DesktopSidebar = () => {
  
  const location = useLocation();
  
  const [theme, setTheme] = useState(localStorage.getItem('theme'))
  const [showTooltip, setShowTooltip] = useState(window.innerWidth < 768);

  const toggleTheme = () => {
    const root = document.querySelector('#root');
    root.classList.toggle('dark');
    localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light');
    setTheme(localStorage.getItem('theme'));
  };

  useEffect(() => {
    const handleResize = () => {
      setShowTooltip(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={(localStorage.getItem('theme') === 'dark' ? 'dark' : '') +  
      ' min-h-screen p-3 md:p-10 bg-[#ECFFE6] dark:bg-slate-900 shadow-lg w-24 md:w-64 hidden sm:block app-transition relative'}>
      <div className='w-full flex justify-center'>
        <div className='flex flex-col gap-20 h-full fixed top-0 py-[45px]'>
          <Link to='/' className='flex flex-col items-center cursor-pointer hover:opacity-80'>
              <div className='w-[50px] h-[50px] md:w-[70px] md:h-[70px] flex flex-col items-center justify-center  border-[3px] border-green-500 rounded-full app-transition'>
                  <FaUtensils className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] text-green-500 app-transition"/>
              </div>
              <p className='text-2xl hidden md:block font-bold app-transition'>
                <span className='text-green-500'>Reci</span>
                <span className='text-[#3e3e3e] dark:text-gray-300'>Feast</span>
              </p>
          </Link>
          <div className='flex flex-col justify-between gap-4 h-full '>
            <ul className='flex flex-col items-center md:items-start gap-4'>
                <Link to='/' className={
                  (showTooltip ? "tooltip tooltip-top z-[20]" : "") + 
                  (location.pathname === "/" ? " text-green-500 dark:text-green-500" : " text-[#3e3e3e] dark:text-gray-500") +
                  " flex items-center gap-1 p-1 hover:text-green-500 app-transition"} data-tip="Home">
                  <LuHome size={24} />
                  <span className="font-bold md:block hidden">Home</span>
                </Link>
                <Link to='/favorites' className={(showTooltip ? "tooltip tooltip-top !z-[20]" : "") + 
                  (location.pathname === "/favorites" ? " text-green-500 dark:text-green-500" : " text-[#3e3e3e] dark:text-gray-500") + " flex items-center gap-1 p-1 hover:text-green-500 dark:text-gray-500 app-transition"} data-tip="Favorites">
                  <LuHeart size={24} />
                  <span className="font-bold md:block hidden">Favorites</span>
                </Link>
            </ul>
            <button onClick={toggleTheme} className={ " flex items-center justify-center gap-1 app-transition"}>
                <div className='p-1 rounded-full z-[5] hover:text-green-500 tooltip tooltip-top' 
                data-tip={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}>
                    {theme === 'dark' && <LuSun size={24} className='text-black dark:text-gray-500 hover:text-green-500  dark:hover:text-green-500'/>}
                    {theme !== 'dark' && <LuMoonStar size={24} className='text-black dark:text-gray-500 hover:text-green-500  dark:hover:text-green-500'/>}
                </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export const MobileSidebar = () => {
  const location = useLocation();

  const [theme, setTheme] = useState(localStorage.getItem('theme'))

  const toggleTheme = () => {
    const root = document.querySelector('#root');
    root.classList.toggle('dark');
    localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light');
    setTheme(localStorage.getItem('theme'));
  };

  return (
    <div className="h-[50px] p-1 bg-[#ECFFE6] dark:bg-slate-900 shadow-lg fixed bottom-0 w-full block sm:hidden z-10">
      <ul className='flex items-center justify-evenly h-full'>
          <Link to='/favorites' className={(location.pathname === "/favorites" ? " text-green-500 dark:text-green-500" : " text-[#3e3e3e] dark:text-gray-500") + " flex items-center gap-1 p-1 hover:text-green-500 dark:text-gray-500 app-transition tooltip tooltip-top"}  data-tip="Favorites">
            <LuHeart size={25} />
          </Link>
          <Link to='/' className={(location.pathname === "/" ? " text-green-500 dark:text-green-500" : " text-[#3e3e3e] dark:text-gray-500") + " flex items-center gap-1 p-1 hover:text-green-500 dark:text-gray-500 app-transition tooltip tooltip-top"} data-tip="Home">
            <LuHome size={25} />
          </Link>
          <button onClick={toggleTheme} className={ " flex items-center justify-center gap-1 app-transition"}>
              <div className='p-1 rounded-full z-[5] hover:text-green-500 tooltip tooltip-top' 
              data-tip={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}>
                  {theme === 'dark' && <LuSun size={24} className='text-black dark:text-gray-500 hover:text-green-500  dark:hover:text-green-500'/>}
                  {theme !== 'dark' && <LuMoonStar size={24} className='text-black dark:text-gray-500 hover:text-green-500  dark:hover:text-green-500'/>}
              </div>
          </button>
      </ul>
    </div>    
  )
}

export default Sidebar

