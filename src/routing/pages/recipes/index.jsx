import { useLocation } from "react-router-dom";
import useFetch from "../../../hooks/UseFetch";
import useWindowResize from "../../../hooks/UseWindowResize";
import useLocalStorage from "../../../hooks/useLocalStorage";

const RecipeList = () => {
  const location = useLocation();

  const { data, loading, error } = useFetch("https://dummyjson.com/recipes");
  const windowSize = useWindowResize();
  const [name, setName] = useLocalStorage("name", "John Doe");
  console.log(name)
  // useLocalStorage
  // useCounter
  // useSessionStorage
  // useOutsideClick
  // console.log(location);

  if (loading) return <h1>Fetching Recipes Please Wait....</h1>;
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h1 style={{ color: windowSize.width < 760 ? "blue" : "black" }}>
        {" "}
        Recipe List Page
      </h1>
      <h3>
        Current window width is {windowSize.width} and Current window height is{" "}
        {windowSize.height}
      </h3>
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
