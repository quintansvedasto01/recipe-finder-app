import { useState } from 'react'
import { LuHeart, LuHeartPulse  } from "react-icons/lu";
import { TbBowlChopsticks } from "react-icons/tb";
import { MdDinnerDining } from "react-icons/md";

const getTwoValuesFromArray = (arr) => {
	return [arr[0], arr[1]];
};

const RecipeCard = ({recipe, badgeColor}) => {

    const [isFavorite, setIsFavorite] = useState(localStorage.getItem('favorites')?.includes(recipe.label));

    const healthLabels = getTwoValuesFromArray(recipe.healthLabels);

    const addRecipeToFavorites = () => {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        
        const isRecipeInFavorites = favorites.some(favorite => favorite.label === recipe.label);
        if (isRecipeInFavorites) {
            favorites = favorites.filter(favorite => favorite.label !== recipe.label);
            setIsFavorite(false);
        } else {
            favorites.push(recipe);
            setIsFavorite(true);
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
    }

    return (
        <>
            <div className={(localStorage.getItem('theme') === 'dark' ? 'dark' : '') + ' flex flex-col rounded-md overflow-hidden shadow-md dark:bg-slate-900'}>
                {/* href={`recipe.url} 
                    href={`https://www.youtube.com/results?search_query=${recipe.label} recipe`}
                */}
                <a  href={recipe.url}
                    target='_blank'className="relative rounded-t-md">
                    <img src={recipe.image} alt="recipe img" className='w-full app-transition'/>

                    <div 
                        onClick={(e) => {
                            e.preventDefault();
                            addRecipeToFavorites()
                        }} 
                        className='bg-slate-200 dark:bg-slate-700 group rounded-full absolute top-[5px] left-[5px] p-2'
                    >
                        {isFavorite ? (
                            <LuHeart size={15} className='fill-red-500 text-red-500 ' />
                        ) : (
                            <LuHeart size={15} className='group-hover:fill-red-500 group-hover:text-red-500' />
                        )}
                    </div>
                    <div className='flex items-center gap-1 py-1 px-2 rounded-full absolute bottom-[5px] right-[5px] bg-slate-200 hover:bg-slate-100 dark:dark:bg-slate-700 text-[#3e3e3e] dark:text-white'>
                        <TbBowlChopsticks size={14}/>
                        <span className='text-[12px] ml-1 '>{recipe.yield} Servings</span>
                    </div>
                </a>
                <div className='px-3 py-2'>
                    <p className='font-bold tracking-wide capitalize text-[#3e3e3e] dark:text-white'>{recipe.label}</p>
                    <p className='capitalize text-[#3e3e3e] dark:text-white'>{recipe.cuisineType[0]} Cuisine</p>
                    <p className='capitalize text-slate-500 dark:text-white text-sm flex items-center gap-1'>
                        <MdDinnerDining size={14}/>
                        {recipe.mealType[0]}
                    </p>
                    <div className='flex flex-wrap gap-1 mt-2'>
                        {healthLabels.map((label, idx) => (
                            <div key={idx} className={`badge ${badgeColor} text-[#3e3e3e] flex items-center gap-1  whitespace-nowrap border-0`}>
                                <LuHeartPulse size={14}/>
                                {label}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecipeCard