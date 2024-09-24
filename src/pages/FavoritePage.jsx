import React from 'react'
import RecipeCard from '../components/RecipeCard'

const FavoritePage = () => {
  const favorite = true;

  return (
    <div className='flex flex-col gap-5 p-10 w-full max-w-screen-xl mx-auto'>
      <div className=''>
        <h1 className='text-3xl font-bold'>My Favorites</h1>
      </div>
      <div>
          {!favorite && (
            <div className='h-[80vh] flex flex-col items-center gap-4'>
              <img src='/404.svg' className='h-3/4' alt='404 svg' />
            </div>
          )}
          {favorite && (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
              <RecipeCard />
              <RecipeCard />
              <RecipeCard />
            </div>
          )}
      </div>
    </div>
  )
}

export default FavoritePage