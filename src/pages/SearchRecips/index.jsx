import { useState } from "react"
import Card from "../../components/Card"

const SearchRecips = () => {
    const [search, setSearch] = useState('')
    const [recipe, setRecipe] = useState([])
    const handleKeyUp = async (event) => {
        if (event.key === 'Enter') {
            if(search != '') {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
                const data = await response.json()
                setRecipe(data.meals)
            } else {
                setRecipe([])
            }
        }
    }
    return (
        <section>
            <h2 className="text-4xl font-bold mb-10 text-[#16BA75]">Search Meals by Name</h2>
            <div className="px-8 pb-3">
                <input
                    onChange={(ev) => setSearch(ev.target.value)}
                    onKeyUp={handleKeyUp}
                    value={search}
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:text-[#000300] mb-11"
                    placeholder="Search for Meals"
                />
                {  
                (recipe && recipe.length  > 0) && recipe != null ? (
                    <section className="grid md:grid-cols-3 gap-8">
                        {
                            recipe.map(recipe => (
                                <Card
                                    key={recipe.idMeal}
                                    id_meal={recipe.idMeal}
                                    recipe={recipe.strMeal} 
                                    description={recipe.strInstructions}
                                    image_url={recipe.strMealThumb}
                                    youtube_url={recipe.strYoutube}
                                />
                            ))
                        }                        
                    </section>
                ) : (
                    <p className="flex justify-center">Nenhuma receita encontrada</p>
                )
            }
            </div>
            
        </section>
    )
}

export default SearchRecips