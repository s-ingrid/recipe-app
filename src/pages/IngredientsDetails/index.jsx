import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Card from "../../components/Card"

const RecipeDetails = () => {
    const { ingredientName } = useParams()
    const [recipe, setRecipe] = useState({})

    useEffect(() => {
        const getRecipe = async () => {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredientName}`)
            const data = await response.json()
            setRecipe(data)
        }
        getRecipe()
    }, [ingredientName])
    return (
        <section>
            <h2 className="text-4xl font-bold mb-10 text-[#16BA75]">Receitas com { ingredientName }</h2>
            {  
                recipe.meals && recipe.meals.length > 0 ? (
                    <section className="grid md:grid-cols-3 gap-8">
                        {
                            recipe.meals.map(recipe => (
                                <Card
                                    key={recipe.idMeal}
                                    id_meal={recipe.idMeal}
                                    recipe={recipe.strMeal}
                                    image_url={recipe.strMealThumb}
                                />
                            ))
                        }                        
                    </section>
                ) : (
                    <p className="flex justify-center">Nenhuma receita encontrada</p>
                )
            }
        </section>
    )
}

export default RecipeDetails