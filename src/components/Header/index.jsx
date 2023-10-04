import React, { useState } from "react"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import { Link } from "react-router-dom"

const Header = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <header className="border-b border-gray-300">
            <div className="flex justify-between items-center max-w-[1240px] mx-auto px-4 text-[#000300]">
            <h1 className="w-full pt-2 pb-2 text-3xl font-bold text-[#16BA75]"><Link to="/">Receitas</Link></h1>
                <nav className="w-full">
                    <ul className="hidden md:flex">
                        <Link to="/search-recips"><li className="hover:bg-[#16BA75] p-4">Pesquisar Receitas</li></Link>
                        <Link to="/by-letter"><li className="hover:bg-[#16BA75] p-4">Receitas por Letra</li></Link>
                        <Link to="/by-ingredients"><li className="hover:bg-[#16BA75] p-4">Receitas por Ingredientes</li></Link>
                    </ul>
                </nav>
                <div onClick={handleNav} className="block md:hidden">
                    {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
                </div>
                <nav className={nav ? " px-4 fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-300 bg-[#FCFCFC] ease-in-out duration-500" : "fixed left-[-100%]"}>
                    <h1 className="w-full pt-2 pb-2 text-3xl font-bold text-[#16BA75]"><Link to='/'>Receitas</Link></h1>
                    <ul className="uppercase">
                        <Link to="/search-recips"><li className="hover:bg-[#16BA75] p-4">Pesquisar Receitas</li></Link>
                        <Link to="/by-letter"><li className="hover:bg-[#16BA75] p-4">Receitas por Letra</li></Link>
                        <Link to="/by-ingredients"><li className="hover:bg-[#16BA75] p-4">Receitas por Ingredientes</li></Link>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header