import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import RecipsByIngredients from "./pages/RecipsByIngredients"
import RecipsByLetter from "./pages/RecipsByLetter"
import SearchRecips from "./pages/SearchRecips"
import PageBase from "./pages/PageBase"
import RecipeDetails from "./pages/RecipeDetails"
import IngredientsDetails from "./pages/IngredientsDetails"

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route to="/" element={ <PageBase/> }>
                    <Route index element={ <Home/> }></Route>
                    <Route path="/recipe/:id" element={ <RecipeDetails /> }></Route>
                    <Route path="/by-ingredients" element={ <RecipsByIngredients/> }></Route>
                    <Route path="/by-ingredients/:ingredientName" element={ <IngredientsDetails /> }></Route>
                    <Route path="/by-letter" element={ <RecipsByLetter/> }></Route>
                    <Route path="/by-letter/:recipeLetter" element={ <RecipsByLetter /> }></Route>
                    <Route path="/search-recips" element={ <SearchRecips/> }></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes