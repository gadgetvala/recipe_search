import React,{ useEffect , useState } from 'react';
import './css/App.css';
import Recipe from "./Recipe";
import SearchBar from "./SearchBar";

const App = () => {

  const API_ID = "ea1977da";
  const API_KEY = "1583f8777adbe7b584496cfc50777fd6";

  const [recipes,setRecipes] = useState([]);
  const [searchTerm,setSearchTerm] = useState("");

  useEffect(() => {
      getRecipes();
  }, [searchTerm]) ;

  const getRecipes = async () => {
    const respones = await fetch(`https://api.edamam.com/search?q=${searchTerm}&app_id=${API_ID}&app_key=${API_KEY}`);
    const data = await respones.json();
    setRecipes(data.hits);
  };

  const setSearch = search => {
      setSearchTerm(search);
  }

  return(
    <div className="App">
      <SearchBar setSearch={setSearch}/>

      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe 
            key={recipe.recipe.label} 
            title={recipe.recipe.label} 
            calories={recipe.recipe.calories} 
            image={recipe.recipe.image} 
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
