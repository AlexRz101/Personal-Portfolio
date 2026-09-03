import { Link } from "react-router-dom";

function Navbar({ navBarColor, textColor } : { navBarColor: string, textColor: string }) {
    return(
        <nav className={`w-max h-1/8 bg-${navBarColor} text-${textColor}`}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;