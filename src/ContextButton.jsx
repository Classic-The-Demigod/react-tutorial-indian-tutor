import { useContext } from "react";
import { GlobalContext } from "./context/context";

const ContextButton = () => {
  const {handleChangeThemeOnButtonClick } =
    useContext(GlobalContext);
  return (
    <button onClick={handleChangeThemeOnButtonClick}>Context Button</button>
  );
};

export default ContextButton;
