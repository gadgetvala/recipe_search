// Global Imports
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Pages Imports
import Homepage from './pages/homepage/homepage';
import NotFound from './pages/not_found/not_found';
import RecipeDetails from './pages/recipe_details/recipe_details';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="details/:id" element={<RecipeDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
