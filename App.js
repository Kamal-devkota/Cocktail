import logo from './logo.svg';
import React from 'react';
import { ReactDOM } from 'react';
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Cocktail from './Cocktail.js';
import Nav from './Nav.js';
import Search from './Search.js';
import Cocktaillist from './Cocktaillist';
import Loading from './Loading';
import { useGlobalContext } from './Context';
import Details from './Details';
import About from './About';
function App() {
 const {drinks,loading}=useGlobalContext();
 console.log(drinks);
 
  return (
    
    <BrowserRouter>
    <Nav />
    <Search/> 
    {loading && <Loading />}
     
    <Switch>
      
    
  <Route exact path="/" > <Cocktail /></Route>
    <Route path='/about'> <About /></Route>
   <Route path='/:idDrink'><Details /></Route>
     
    </Switch>
    </BrowserRouter>
    

    
  );
}

export default App;
