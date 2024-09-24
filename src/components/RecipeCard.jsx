import React from 'react'
import { LuHeart, LuHeartPulse  } from "react-icons/lu";
import { TbBowlChopsticks } from "react-icons/tb";

const RecipeCard = () => {
  return (
    <div className='flex flex-col rounded-md overflow-hidden shadow-md'>
        <a href="#" className="relative rounded-t-md">
            <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="" />

            <div className='bg-slate-200 hover:bg-slate-100 rounded-full absolute top-[5px] left-[5px] p-2'>
                <LuHeart size={15} />
            </div>
            <div className='flex items-center gap-1 py-1 px-2 rounded-full absolute bottom-[5px] right-[5px] bg-slate-200 hover:bg-slate-100'>
                <TbBowlChopsticks size={14}/>
                <span className='text-[12px] ml-1'>4 Servings</span>
            </div>
        </a>
        <div className='px-3 py-2'>
            <p className='font-bold tracking-wide'>Takoyaki</p>
            <p>Japanese Kitchen</p>
            <div className='grid grid-cols-2 gap-1'>
                <div className="badge bg-green-300 my-2 flex items-center gap-1  whitespace-nowrap">
                    <LuHeartPulse size={14}/>
                    Sugar Conscious
                </div>
            </div>
        </div>
    </div>
  )
}

export default RecipeCard