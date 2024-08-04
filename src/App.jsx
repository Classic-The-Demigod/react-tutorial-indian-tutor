// import { useEffect, useState } from "react";
// import ContextButton from "./ContextButton";
// import ContextText from "./ContextText";
// import UseReducerExample from "./use-reducer/use-reducer";
// import LoginComponent from "./components/login";
// import RegisterComponent from "./components/register";

import { Link, useNavigate, useRoutes } from "react-router-dom";
import CommentsList from "./routing/pages/comments/Comments";
import RecipeList from "./routing/pages/recipes";
import RecipeDetailsPage from "./routing/pages/recipe-details";
import NotFoundPage from "./routing/pages/not-found";
import Layout from "./routing/components/layouts/Layout";

// import Form from "./Form";

function CustomRoutes() {
  const element = useRoutes([
    {
      path: "/home",
      element: <Layout />,
      children: [
        { path: "recipe-list", element: <RecipeList /> },
        { path: "comments-list", element: <CommentsList /> },
        { path: "recipe-list/:id", element: <RecipeDetailsPage /> },
      ],
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);

  return element;
}

function App() {
  const navigate = useNavigate();
  // const [count, setCount] = useState(0);
  // const [usersList, setUsersList] = useState([]);
  // const [pending, setPending] = useState(false);

  // async function fetchAllUsers() {
  //   try {
  //     setPending(true);
  //     const apiResponse = await fetch("https://dummyjson.com/users");
  //     const result = await apiResponse.json();

  //     if (result?.users) {
  //       setUsersList(result?.users);
  //       setPending(false);
  //     } else {
  //       setUsersList();
  //       setPending(false);
  //     }
  //     console.log(result);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // function handleFetchListOfUsers() {
  //   fetchAllUsers();
  // }
  // useEffect(() => {
  //   fetchAllUsers();
  // }, []);

  // if (pending) return <h1>fetching User! Please Wait</h1>;

  return (
    <div>
      {/* <h1>All Users List</h1>
      <button onClick={handleFetchListOfUsers}>fetch Users List</button> */}
      {/* <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase Count
      </button>
      <h1>Hello {count}</h1>
      <button
        onClick={() => {
          count > 0 ? setCount(count - 1) : setCount(0);
        }}
      >
        Decrease Count
      </button> */}
      {/* <ul>
        {usersList && usersList.length > 0 ? (
          usersList.map((userItem) => (
            <li key={userItem?.id}>
              <p>
                {userItem?.firstName} {userItem?.lastName}
              </p>
            </li>
          ))
        ) : (
          <h1>No users found! Please try again</h1>
        )}
      {/* <ContextButton />
      <ContextText />
      <UseReducerExample /> 
      </ul> */}

      {/* Forms Handling */}
      {/* <Form /> */}
      {/* <div style={{display: "flex", gap: "2rem", justifyContent: "center"}}>
        <LoginComponent />
        <RegisterComponent />
      </div> */}

      {/* React Router */}
      <h1 style={{ textAlign: "center" }}>React Router DOM</h1>
      <div>
        <Link to={"/home/recipe-list"}>
          Alternative way of navigating to recipe list page
        </Link>
        <Link to={"/home/comments-list"}>
          Alternative way of navigating to comments list page
        </Link>
      </div>
      <button
        onClick={() => navigate("/home/recipe-list")}
        style={{ background: "black", color: "white" }}
      >
        Navigate to Recipe List Page
      </button>
      <button
        onClick={() => navigate("/home/comments-list")}
        style={{ background: "black", color: "white" }}
      >
        Navigate to Comments List Page
      </button>
      {/* <Routes>
        <Route path="/home" element={<Layout />}>
          <Route path="recipe-list" element={<RecipeList />} />
          <Route path="comments-list" element={<CommentsList />} />
          <Route path="recipe-list/:id" element={<RecipeDetailsPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes> */}
      <CustomRoutes />
    </div>
  );
}

export default App;
