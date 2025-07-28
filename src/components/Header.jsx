import { NavLink } from "react-router-dom"

export default function Header(){
    return(
        <>
            <header className="bg-dark">
                <nav className="nav justify-content-center  py-3 ">
                    <NavLink className="nav-link  text-light" to="/" aria-current="page">Home</NavLink>
                    <NavLink className="nav-link text-light" to="/products">Products</NavLink>
                    <NavLink className="nav-link  text-light" to="/about">About Us</NavLink>
                </nav>
            </header>
        </>
    )
}