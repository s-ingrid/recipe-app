import { useEffect, useState } from "react"
import Card from "../../components/Card"

const Home = () => {
    const [ recips, setRecips ] = useState([])

    useEffect(() => {
        const getRandomRecipe = async () => {
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
            const data = await response.json()
            return data.meals[0]
        }
    
        const getMultipleRandomRecips = async () => {
            const randomRecips = []
            for (let i = 0; i < 10; i++) {
                const recipe = await getRandomRecipe()
                randomRecips.push(recipe)
            }
            setRecips(randomRecips)
        }
    
        getMultipleRandomRecips()
    }, [])
    return (
        <section>
            <h2 className="text-4xl font-bold mb-10 text-[#16BA75]">Receitas Aleatórias</h2>
            {  
                recips && recips.length > 0 ? (
                    <section className="grid md:grid-cols-3 gap-8">
                        {
                            recips.map(recipe => (
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
                    <p className="flex justify-center">Carregando...</p>
                )
            }
        </section>
    )
}

export default Home