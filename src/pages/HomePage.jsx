import React from 'react'
import RecipeCard from '../components/RecipeCard'

const HomePage = () => {

  const handleSearchRecipe = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
  }

  return (
    <div className='flex flex-col gap-5 p-10 w-full max-w-screen-xl mx-auto'>
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
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
        </div>
      </div>
    </div>
  )
}

export default HomePage