import { Link } from "react-router-dom"

const Card = ({recipe, description, image_url, youtube_url, id_meal}) => {
    return (
        <div className="shadow-lg rounded-lg hover:scale-105 duration-300">
           <Link to={`/recipe/${id_meal}`}><img className="h-35 rounded-t-lg" src={image_url} alt={recipe} /></Link>
            <div className="p-5">
                <h3 className="text-2xl font-bold mb-2">{ recipe }</h3>
                {
                    description && description.length > 0 ? (
                        <p className="text-lg font-normal mb-6">{ description.slice(0, 120) }...</p>
                    ) : (
                        []
                    )
                }                
                <a href={youtube_url} target="_blank" rel="noopener noreferrer" className="bg-[#16BA75] w-[200px] rounded-md font-medium px-6 py-3 border text-center border-[#2b9468] hover:bg-[#2b9468]">YouTube</a>
            </div>
        </div>
    )
}

export default Card