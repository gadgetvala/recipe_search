import Loader from 'components/loader/loader';
import { IRecipe } from 'interfaces/api/response/iRecipe';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IState } from 'redux_config/reducers';
import DataList from './component/data_list/data_list';
import {
  MainContainer,
  MainImageContainer,
  MainContentContainer,
  ContentSelector,
  ContentButton,
} from './style';

enum TypeOfContent {
  HealthLabels,
  Ingredient,
}

const RecipeDetails = () => {
  // Variables
  let params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTypeOfContent, setTypeOfSelectedContent] = useState(
    TypeOfContent.Ingredient
  );
  const [currentRecipe, setCurrentRecipe] = useState<IRecipe>();
  const allRecipe = useSelector((state: IState) => state.recipe.recipeList);

  // Helper Functions
  const loadRecipe = () => {
    for (let i of allRecipe) {
      let id = i.uri.split('#')[1];
      if (id === params.id) {
        setCurrentRecipe(i);
        setIsLoading(false);
      }
    }
  };

  const updateSelectedContent = () => {
    let newSelection =
      selectedTypeOfContent === TypeOfContent.Ingredient
        ? TypeOfContent.HealthLabels
        : TypeOfContent.Ingredient;

    setTypeOfSelectedContent(newSelection);
  };

  useEffect(() => {
    loadRecipe();
  }, []);

  return (
    <MainContainer>
      {/* If Current Page is In Loading State */}
      {isLoading && <Loader />}

      {/* If No Data Found*/}
      {!isLoading && currentRecipe === undefined && (
        <div>
          <p>No Data Found</p>
        </div>
      )}

      {/* If We found Data */}
      {!isLoading && currentRecipe !== undefined && (
        <>
          <MainImageContainer>
            <h1>{currentRecipe.label}</h1>
            <img src={currentRecipe.image} alt={currentRecipe.label} />
          </MainImageContainer>
          <MainContentContainer>
            {/* Main Content Buttons */}
            <ContentSelector>
              <ContentButton
                onClick={updateSelectedContent}
                isSelected={
                  selectedTypeOfContent === TypeOfContent.HealthLabels
                }
              >
                Ingredient
              </ContentButton>
              <ContentButton
                onClick={updateSelectedContent}
                isSelected={selectedTypeOfContent === TypeOfContent.Ingredient}
              >
                Health Labels
              </ContentButton>
            </ContentSelector>

            {/* Main Content */}
            {selectedTypeOfContent === TypeOfContent.Ingredient ? (
              <DataList data={currentRecipe.ingredientLines} />
            ) : (
              <DataList data={currentRecipe.healthLabels} />
            )}
          </MainContentContainer>
        </>
      )}
    </MainContainer>
  );
};

export default RecipeDetails;
