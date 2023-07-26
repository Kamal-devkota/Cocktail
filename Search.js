import React from "react"
import { useGlobalContext } from "./Context"
export default function Search(){
   
    const {setSearch}=useGlobalContext();
    const searchValue=React.useRef("");
    console.log(searchValue.current)
    


    function find(e){
e.preventDefault();
setSearch(searchValue.current.value)

    }
    return (
        <div className="search-bar">
            <h4>Search your favourite Cocktail</h4>
            <form>
                <input type="text"  ref={searchValue} onChange={(e)=>find(e)} />
            </form>
        </div>
    )

}