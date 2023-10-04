import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Card from "../../components/Card"
const RecipsByLetter = () => {
    const [selectedLetter, setSelectedLetter] = useState('')
    const [recips, setRecips ] = useState([])
    const getRecips = async () => {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${selectedLetter}`)
      const data = await response.json()
      setRecips(data)
    }
    useEffect(() => {
      if (selectedLetter) {
        getRecips()
      }
    }, [selectedLetter])
    const handleLetterSelect = (letter) => {
        setSelectedLetter(letter)
    }
    return (
        <div>
          <h2 className="text-4xl font-bold mb-10 text-[#16BA75]">Receitas por Letra</h2>
          <div >
            <ul className="flex flex-wrap justify-center gap-3 px-8 mb-6">
              {
                Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)).map((letter) => (

                  <li
                    className="hover:text-[#16BA75] hover:scale-105 duration-400"
                    key={letter}
                    onClick={() => handleLetterSelect(letter)}
                    style={{ cursor: 'pointer', textDecoration: selectedLetter === letter ? 'underline' : 'none' }}
                  >
                    <Link to={`/by-letter/${letter}`}>
                      {letter}
                    </Link>
                  </li>
                )
                )
              }
            </ul>
          </div>
            <section>
              {  
                  recips.meals && recips.meals.length > 0 ? (
                      <section className="grid md:grid-cols-3 gap-8">
                          {
                              recips.meals.map(recipe => (
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
          </section>
        </div>
      )
    }

export default RecipsByLetter