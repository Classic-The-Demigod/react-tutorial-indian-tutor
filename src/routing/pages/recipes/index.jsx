import { useLocation } from "react-router-dom";
import useFetch from "../../../hooks/UseFetch";

const RecipeList = () => {
  const location = useLocation();

  const { data, loading, error } = useFetch("https://dummyjson.com/recipes");

  // console.log(location);

  if (loading) return <h1>Fetching Recipes Please Wait....</h1>;
  return (
    <div>
      <h1> Recipe List Page</h1>
      <ul>
        {data?.recipes?.length > 0
          ? data?.recipes.map((recipeItem) => (
              <div key={recipeItem.id}>
                <img src={recipeItem.image} />
                <label htmlFor="">{recipeItem.name}</label>
              </div>
            ))
          : null}
      </ul>
    </div>
  );
};

export default RecipeList;
