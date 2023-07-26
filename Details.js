import React from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "./Context";
export default function Details(){
    const {idDrink}=useParams();
    console.log(idDrink)
    React.useEffect(function(){
         async function fetchDetails(){
            const detailData=await fetch( `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`)
            const res=detailData.json();
            console.log(res)
        }
        fetchDetails()
    },[idDrink])
    
    return(
        <div className="details">
            <button>Home</button>
            <h3>{}</h3>
            <div className="detail">
             <img src=""/>
             <ul>
                <li>Name: <strong>{}</strong></li>
                <li>Category: <strong>{}</strong></li>
                <li>Info: <strong>{}</strong></li>
                <li>Class: <strong>{}</strong></li>
                <li>Instructions: <strong>{}</strong></li>
                <li>Ingredients: <strong>{}</strong></li>
             </ul>
            </div>
        </div>
    )
}