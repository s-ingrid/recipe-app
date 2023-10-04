import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const RecipsByIngredients = () => {
    const [ingredients, setIngredients] = useState([])
    const [search, setSearch] = useState('')
    useEffect(() => {
        const getIngredients = async () => {
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
            const data = await response.json()
            setIngredients(data)
        }
        getIngredients()
    }, [])
    
    const filteredIngredients = 
        ingredients.meals && ingredients.meals.length > 0 
            ? ingredients.meals.filter(ingredient => ingredient.strIngredient.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
            : []
    return (
        <section>
            <h2 className="text-4xl font-bold mb-10 text-[#16BA75]">Ingredients</h2>
            <input
                    onChange={(ev) => setSearch(ev.target.value)}
                    value={search}
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:text-[#000300] mb-11"
                    placeholder="Search for Meals"
                />
            <div className="grid md:grid-cols-2 gap-3">
                {
                    filteredIngredients && filteredIngredients.length > 0 ? (
                        filteredIngredients.map(ingredient => (
                            <Link to={`/by-ingredients/${ingredient.strIngredient}`}>
                                <div key={filteredIngredients.id} className="p-6 bg-white border border-gray-200 rounded-lg shadow ">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#000300]">{ingredient.strIngredient}</h5>
                                </div>
                            </Link>                  
                        ))
                    ) : (
                        <p className="flex justify-center">Nenhum ingrediente encontrado</p>
                    )
                }
            </div> 
        </section>
    )
}

export default RecipsByIngredients