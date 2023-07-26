

import { Outlet, Link } from "react-router-dom";
export default function Nav(){
    return (
        <nav>
            <li>THE<strong>COCKTAIL</strong>DB</li>
            <span>
           <Link to="/"><li>HOME</li></Link>
        <Link to="/about"> <li>ABOUT</li></Link> 
            </span>
        </nav>
    )
}