import React, { useEffect, useState } from 'react';
import './css/App.css';
import Recipe from "./Recipe";
import SearchBar from "./SearchBar";
import Alert from './Alert';

const App = () => {

  const API_ID = "ea1977da";
  const API_KEY = "1583f8777adbe7b584496cfc50777fd6";

  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    getRecipes();
    // eslint-disable-next-line
  }, [searchTerm]);

  const getRecipes = async () => {
    const respones = await fetch(`https://api.edamam.com/search?q=${searchTerm}&app_id=${API_ID}&app_key=${API_KEY}`);
    const data = await respones.json();
    setRecipes(data.hits);
  };

  const setSearch = search => {
    setSearchTerm(search);
  }

  const showAlert = (message, type) => {
    setAlert({
      mssg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  return (
    <div className="App">
      <Alert alert={alert} />
      <SearchBar setSearch={setSearch} showAlert={showAlert} />

      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.url}
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
