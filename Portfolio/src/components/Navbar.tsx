import { Link } from "react-router-dom";

function Navbar({ navBarColor, textColor, shadowColor }: { navBarColor: string, textColor: string, shadowColor: string }) {
    return (
        <nav className={`${navBarColor} ${textColor} ${shadowColor} w-fit rounded-full shadow-md responsive-navbar`}>
            <ul className="flex items-center gap-6 px-8 py-3 text-lg font-semibold">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/view-my-work">View My Work</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;