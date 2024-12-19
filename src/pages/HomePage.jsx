import {  Search } from 'lucide-react'
import { useEffect, useState } from 'react'
import RecipeCard from '../components/RecipeCard'
import Skelatons from '../components/Skelatons';
import { getRandomColor } from '../lib/utils';



function HomePage() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRecipes = async(searchQuery) => {
    setLoading(true);
    setRecipes([])

    try {
      const res = await fetch(`https://dummyjson.com/recipes/search?q=${searchQuery}`)
      const data = await res.json()
      setRecipes(data.recipes)
      // console.log(data.recipes )
    } catch (error) {
      console.log(error.message)
    }finally{
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchRecipes("chicken")
  },[])

  const handleSearchRecipe = (e) => {
    e.preventDefault();
    fetchRecipes(e.target[0].value)
  }

  return (
    <div className='bg-[#faf9fb] p-10 flex-1'>
       <div className='max-w-screen-lg mx-auto'>
        <form onSubmit={handleSearchRecipe} >
          <label htmlFor="" className='input shadow-lg flex items-center gap-3'>
            <Search size={"24"}  />
            <input type='text' className='text-sm md:text-md grow' placeholder='What do you want to cook today' />
          </label>
        </form>

        <p className='font-bold text-3cl md:text-5xl mt-4' >
          Recommended Recipes
        </p>
        <p className='text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight' >
          Popular Choices
        </p>
        <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3' >
          {/* 1st recipe */}
           {!loading  && recipes.map((recipe, index) => (
            <RecipeCard key={`${recipe.id}-${index}`} recipe={recipe} {...getRandomColor()} />
           )) } 
           {loading && [...Array(9)] .map((_, index) => <Skelatons key={index} />)}
        </div>
       </div>
    </div>
  )
}

export default HomePage