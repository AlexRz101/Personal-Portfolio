import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar({ navBarColor, textColor, shadowColor }: { navBarColor: string, textColor: string, shadowColor: string }) {
    return (
        <nav className={`${navBarColor} ${textColor} ${shadowColor} w-fit rounded-full shadow-md responsive-navbar`}>
            <ul className="flex items-center font-semibold">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/view-my-work">View My Work</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;