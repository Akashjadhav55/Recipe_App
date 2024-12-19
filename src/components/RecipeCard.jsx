import { Heart, Soup, Tag } from 'lucide-react'
import { Link } from "react-router-dom"
 
const getTwoValues = (arr) => {
  return arr.slice(0, 2)
}

function RecipeCard({recipe, bg, badge}) {
  const  tags = getTwoValues(recipe.tags)
  return (
    <Link to={`/recipe/${recipe.id}`}  >
    <div  className={`flex flex-col rounded-md ${bg} overflow-hidden p-3 relative`} >
    <div href="#" className='relative h-32'>
      <img src={recipe.image} alt='recipe image' className='rounded-md w-full h-full object-cover cursor-pointer' />
      <div className='absolute bottom-2 left-2 bg-white rounded-full pl-2 p-1 pr-2 cursor-pointer flex items-center gap-1 text-sm' >
       <Soup size={16} />{recipe.servings} Servings
      </div>

      <div className='absolute top-1 right-2 bg-white rounded-full cursor-pointer'>
        <Heart className='hover:fill-red-500 hover:text-red-500' size={20} />
      </div>
    </div>

    <div className='flex mt-1'>
      <p className='font-bold tracking-wide'>{recipe.name}</p>
    </div>
    <p className='my-2'>{recipe.cuisine}</p>
    <div className='flex gap-5 mt-auto'>
      { tags.map((tag,index) => (
        <div key={index} className={`flex gap-1 ${badge} items-center p-1 rounded-md`}>
        <Tag size={16} />
        <span className='text-sm tracking-tighter font-semibold '>{tag}</span>
      </div> 
      )) }
    </div>
    </div>
  </Link>
  )
}

export default RecipeCard