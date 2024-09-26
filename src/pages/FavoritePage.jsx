import RecipeCard from '../components/RecipeCard'
import { getRandomColor } from "../lib/utils";

const FavoritePage = () => {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  
  return (
    <div className='flex flex-col gap-5 p-10 w-full max-w-screen-xl mx-auto  mb-10'>
      <div className=''>
        <h1 className='text-3xl font-bold text-[#3e3e3e] dark:text-white'>My Favorites</h1>
      </div>
      <div>
          {!favorites && (
            <div className='h-[80vh] flex flex-col items-center gap-4'>
              <img src='/404.svg' className='h-3/4' alt='404 svg' />
            </div>
          )}
          {favorites && (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
              {(favorites.length > 0) && favorites.map((favorite) => (
                <RecipeCard key={favorite.label} recipe={favorite} badgeColor={getRandomColor().badge} />
              ))}
            </div>
          )}
      </div>
    </div>
  )
}

export default FavoritePage