import { useState, useEffect } from 'react'
import RecipeCard from '../components/RecipeCard'
import { getRandomColor } from "../lib/utils";

const APP_ID = 'c15f7ce0';
const APP_KEY = '83ad1bcbc2d2d1785c35f44e5afbb3d5';
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
      <div className='flex flex-col gap-5 p-10 w-full max-w-screen-xl mx-auto mb-10'>
        <form onSubmit={handleSearchRecipe}>
          <label className="input input-bordered flex items-center gap-2  shadow-sm">
            <input type="text" className="grow outline-none" placeholder="What do you want to cook today?" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70">
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd" />
            </svg>
          </label>
        </form>

        {/* Content */}
        <div className="">
          <h1 className='text-2xl md:text-3xl font-bold'>Recommended Recipes</h1>
          <p className='text-[#807d7d] mt-5'>Popular choices</p>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {(!loading && recipes.length > 0) && recipes.map((recipe) => (
              <RecipeCard key={recipe.recipe.label} recipe={recipe.recipe} badgeColor={getRandomColor().badge} />
            ))}

            {loading &&
              [...Array(9)].map((_, index) => (
                <div key={index} className='flex flex-col gap-4 w-full'>
                  <div className='skeleton h-40 w-full'></div>
                  <div className='flex justify-between'>
                    <div className='skeleton h-4 w-28'></div>
                    <div className='skeleton h-4 w-24'></div>
                  </div>
                  <div className='skeleton h-4 w-full'></div>
                  <div className='skeleton h-4 w-full'></div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage