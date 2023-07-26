import React from "react";
import Cocktaillist from "./Cocktaillist";
import { useGlobalContext } from "./Context";
import Loading from "./Loading";

export default function Cocktail(){
 
 
    const data=useGlobalContext() ;
    const {drinks,loading}=data;
if(!(drinks) ){
   return <h3 className="center"> NO Match Was Found.</h3>
}


   return(
    <div className="cocktail-bar">
            <h3>COCKTAILS</h3>
            
         <div className="cocktaillist-container">
            {drinks.map((item)=> <Cocktaillist item={item}  key={item.idDrink} />)}
       
         </div>
    </div>
   ) 
}