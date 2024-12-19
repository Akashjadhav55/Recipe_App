import { Tag } from 'lucide-react';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Recipe() {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    let  params  = useParams();
   

    const recipeGetById = async (params) => {
        setLoading(true);
        setRecipes([])

        try {
            const res = await fetch(`https://dummyjson.com/recipes/${params.id}`)
            const data = await res.json()
            setRecipes(data)
            console.log(data)
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        recipeGetById(params)
    },[])
  return (
    <div className="max-w-3xl mx-auto my-10 p-6 border rounded-lg shadow-lg bg-white">
      {/* Recipe Image */}
      <div className="overflow-hidden rounded-lg">
        <img
          src={recipes.image}
          alt=""
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>

      {/* Recipe Content */}
      <div className="mt-6">
        {/* Recipe Name */}
        <h2 className="text-3xl font-bold text-gray-800">{recipes.name}</h2>

        {/* Recipe Info (Prep, Cook Time, Servings) */}
        <div className="mt-4 flex justify-between text-gray-600 text-sm">
          <span>Prep Time: {recipes.prepTimeMinutes} mins</span>
          <span>Cook Time: {recipes.cookTimeMinutes} mins</span>
          <span>Servings: {recipes.servings}</span>
        </div>

        {/* Rating */}
        <div className="mt-2 text-gray-600">
          <span>Rating: {recipes.rating} / 5</span>
        </div>

        {/* Ingredients Section */}
        <div className="mt-4">
          <h3 className="text-xl font-semibold text-gray-700 uppercase tracking-wider">
            Ingredients
          </h3>
          <ul className="mt-2 space-y-2 list-disc pl-5 text-gray-600">
            {recipes.ingredients}
          </ul>
        </div>

        {/* Instructions Section */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-700 uppercase tracking-wider">
            Instructions
          </h3>
          <ol className="mt-2 space-y-2 list-decimal pl-5 text-gray-600">
            {recipes.instructions}
          </ol>
        </div>

        <div className='flex gap-5 mt-auto'>
            <div  className={`flex gap-1 bg-[#F9EFE1] items-center p-1 rounded-md`}>
            <Tag size={16} />
            <span className='text-sm tracking-tighter font-semibold '>{recipes.tags}</span>
        </div> 
    </div>
      </div>
    </div>
  )
}

export default Recipe