import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const RecipeDetails = () => {
    const { id } = useParams()
    const [recipe, setRecipe] = useState({})

    useEffect(() => {
        const getRecipe = async () => {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            const data = await response.json()
            setRecipe(data)
        }
        getRecipe()
    }, [id])

    const renderIngredients = (recipe) => {
        const ingredients = []
        for (let i = 1; i <= 20; i++) {
            const ingredientKey = `strIngredient${i}`
    
            if (recipe[ingredientKey] && recipe[ingredientKey].trim() !== "") {
                ingredients.push(
                    <ul key={i} className="mb-1">
                        <li>{i}. {recipe[ingredientKey]}</li>
                    </ul>
                )
            }
        }
        return (
            <div>
                {ingredients.length > 0 ? ingredients : "Nenhum ingrediente encontrado"}
            </div>
        )
    }
    const renderMeasure = (recipe) => {
        const measures = []
        for (let i = 1; i <= 20; i++) {
            const measureKey = `strMeasure${i}`
    
            if (recipe[measureKey] && recipe[measureKey].trim() !== "") {
                    measures.push(
                    <ul key={i} className="mb-1">
                        <li>{i}. {recipe[measureKey]}</li>
                    </ul>
                )
            }
        }
        return (
            <div>
                {measures.length > 0 ? measures : "Nenhuma medida encontrado"}
            </div>
        )
    }

    return (
        <section>
            {  
                recipe.meals && recipe.meals.length > 0 ? (
                    recipe.meals.map(rcp => (
                        <section className="max-w-[800px] mx-auto p-4">
                            <h2 className="text-4xl font-bold mb-10 text-[#16BA75]">Detalhes da Receita</h2>
                            <h3 className="text-3xl font-bold mb-10">{rcp.strMeal}</h3>
                            <img className="rounded-t-lg" src={rcp.strMealThumb} alt={rcp.strMeal} />
                            <div className="grid grid-cols-1 sm:grid-cols-3 py-2">
                                <span><strong>Categoria: </strong>{rcp.strCategory}</span>
                                <span><strong>Area: </strong>{rcp.strCategory}</span>
                                <span><strong>Tags: </strong>{rcp.strTags}</span>
                            </div>
                            <div>
                                <p className="mt-5 mb-5">{rcp.strInstructions}</p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2">
                                <div>
                                    <h4 className="text-2xl font-bold mb-2">Ingredientes</h4>
                                    {renderIngredients(rcp)}
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold mb-2">Medidas</h4>
                                    {renderMeasure(rcp)}
                                </div>
                            
                                <a href={rcp.strYoutube} target="_blank" rel="noopener noreferrer" className="bg-[#16BA75] w-[200px] rounded-md font-medium my-6 mx-auto py-2 border text-center border-[#2b9468] hover:bg-[#2b9468]">YouTube</a>
                                {
                                    rcp.strSource !== null && (
                                        <a className="my-6 mx-auto pt-2 text-indigo-600" href={rcp.strSource} target="_blank" rel="noopener noreferrer">
                                            Fonte Original
                                        </a>
                                    )
                                }
                            </div>
                        </section>
                    ))
                ) : (
                    <p className="flex justify-center">Nenhuma receita encontrada</p>
                )
            }
            
        </section>
    )
}

export default RecipeDetails