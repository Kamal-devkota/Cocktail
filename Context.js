import React from "react";
import { ReactDOM } from "react";
import { useParams } from "react-router-dom";
const AppContext=React.createContext();


const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const details= `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=`;
const AppProvider=({children})=>{
   
   
    const [state,setState]=React.useState([]);
    const [loading,setLoading]=React.useState(true);
const [details,setDetails]=React.useState([])
    const [search,setSearch]=React.useState("")
    
console.log(state)

   


 async function fetchData(search) {
  
        const res = await fetch(url+search) ;
        const data = await res.json();
        setLoading(false)
         setState(data)
    }
    
    React.useEffect(function(){
        setLoading(true)
        fetchData(search);
     
     },[search])

     async function fetchDetails(search) {
  
        const res = await fetch(details+search) ;
        const data = await res.json();
        setLoading(false)
         setDetails(data)
    }
    
    React.useEffect(function(){
        setLoading(true)
         fetchDetails()
 },[details])

    
    

return <AppContext.Provider value={{...state,loading,search,setSearch,details,setDetails
}}>
    {children}
</AppContext.Provider>
}

const useGlobalContext=()=>{
    return React.useContext(AppContext)
}
export {useGlobalContext,AppContext,AppProvider}