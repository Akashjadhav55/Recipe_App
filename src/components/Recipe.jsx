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
    <div key={recipes.id} className='flex flex-col items-center' >
        <
    </div>
  )
}

export default Recipe