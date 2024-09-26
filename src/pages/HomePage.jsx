import { useState, useEffect } from 'react'
import RecipeCard from '../components/RecipeCard'
import { getRandomColor } from "../lib/utils";
import { LuSearch } from "react-icons/lu";

const APP_ID = import.meta.env.VITE_APP_ID;
const APP_KEY = import.meta.env.VITE_APP_KEY;
const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  

  const handleSearchRecipe = (e) => {
    e.preventDefault();
    getRecipes(e.target[0].value);
  }

  const getRecipes = async (category) => {
    setLoading(true);
    setRecipes([]);

    try {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?app_id=${APP_ID}&app_key=${APP_KEY}&q=${category}&type=public`); 
      const data = await response.json();
      
      setRecipes(data.hits);
      setTimeout(() => {
        setLoading(false);
      }, 2000)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getRecipes('salad');
  }, [])

  return (
    <>
      <div className={
        (localStorage.getItem('theme') === 'dark' ? 'dark ' : '') + ' flex flex-col gap-5 p-10 w-full max-w-screen-xl mx-auto mb-10'}>
        <form onSubmit={handleSearchRecipe}>
					<label className='input shadow-md flex items-center gap-2 bg-white dark:dark:bg-slate-900'>
						<LuSearch size={"24"} />
						<input
							type='text'
							className='text-sm md:text-md grow'
							placeholder='What do you want to cook today?'
						/>
					</label>
				</form>
        {/* Content */}
        <div className="">
          <h1 className='text-2xl md:text-3xl font-bold text-[#3e3e3e] dark:text-white'>Recommended Recipes</h1>
          <p className='text-[#807d7d] dark:text-slate-500 mt-5'>Popular choices</p>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {(!loading && recipes.length > 0) && recipes.map((recipe) => (
              <RecipeCard key={recipe.recipe.label} recipe={recipe.recipe} badgeColor={getRandomColor().badge} />
            ))}

            {loading &&
              [...Array(9)].map((_, index) => (
                <div key={index} className='flex flex-col gap-4 w-full'>
                  <div className='animate-pulse rounded-lg h-40 w-full bg-slate-300 dark:bg-slate-900'></div>
                  <div className='flex justify-between'>
                    <div className='animate-pulse rounded-full h-4 w-28 bg-slate-300 dark:bg-slate-900'></div>
                    <div className='animate-pulse rounded-full h-4 w-24 bg-slate-300 dark:bg-slate-900'></div>
                  </div>
                  <div className='animate-pulse rounded-full h-4 w-full bg-slate-300 dark:bg-slate-900'></div>
                  <div className='animate-pulse rounded-full h-4 w-full bg-slate-300 dark:bg-slate-900'></div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage