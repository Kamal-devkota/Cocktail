import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./Context";
import { useParams } from "react-router-dom";
export default function Cocktaillist({item}){
    const {getDetails}=useGlobalContext();
    const{idDrink,strDrink,strDrinkThumb,strAlcoholic,strGlass}=item;

  
return(
    <div className="drink-item"  >
       <img src={strDrinkThumb}/>
       <h4 >{strDrink}</h4>
       <h5 >{strGlass}</h5>
       <p>{strAlcoholic}</p>
       <Link to={`/:${idDrink}`} onClick={getDetails}><button className="btn-details"  >Details</button></Link>
    </div>
)
}