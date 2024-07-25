import { useContext } from "react";
import { GlobalContext } from "./context/context";

const ContextText = () => {
  const { theme } = useContext(GlobalContext);

  //   console.log(getStateFromGlobalContext);
  return (
    <h1
      style={{
        fontSize: theme === "light" ? "50px" : "100px",
        backgroundColor: theme === "light" ? "#fff" : "#000",
        color: theme === "light" ? "blue" : "yellow",
      }}
    >
      Context Text
    </h1>
  );
};

export default ContextText;
