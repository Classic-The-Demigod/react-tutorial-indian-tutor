// import { useEffect, useState } from "react";
// import ContextButton from "./ContextButton";
// import ContextText from "./ContextText";
// import UseReducerExample from "./use-reducer/use-reducer";

import Form from "./Form";

function App() {
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

    <Form />
    </div>

  );
}

export default App;
