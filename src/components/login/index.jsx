import { useState } from "react";
import { loginFormElements } from "../../config";
import CommonForm from "../common-form";

const initialFormData = {
  email: "",
  password: "",
  textarea: "",
};
function LoginComponent() {
  const [loginFormData, setLoginFormData] = useState(initialFormData);
  

  function onHandleSubmit(event) {
    event.preventDefault();

    console.log(loginFormData, "loginformdata");
    setLoginFormData(initialFormData)
  }
  return (
    <div>
      <h1>Login Page/Component</h1>
      <CommonForm
        formData={loginFormData}
        setFormData={setLoginFormData}
        formControls={loginFormElements}
        buttonText={"Login"}
        onHandleSubmit={onHandleSubmit}
      />
     
    </div>
  );
}

export default LoginComponent;
