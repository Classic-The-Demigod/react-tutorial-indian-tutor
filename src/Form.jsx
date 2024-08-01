import { useState } from "react";

function Form() {
  const [inputValue, setInputValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [formdata, setFormData] = useState({
    name: '',
    email: '',
  })
  function handleInputChange(event) {
    const { value } = event.target;
    setInputValue(value);
  }

  function handleEmailChange(event) {
    const { value } = event.target;
    setEmailValue(value);
  }

  function handleOnChange(event) {
    console.log(event.target.name)

    const { name, value } = event.target
    setFormData({
      ...formdata;
    })
  }

  function handleSumbit(e) {
    e.preventDefault();

    console.log(inputValue, emailValue, "inputValue");
  }

  return (
    <div>
      <form action="submit" onSubmit={handleSumbit}>
        <input
          type="text"
          name="text"
          id="text"
          value={inputValue}
          placeholder="enter your name"
          onChange={handleOnChange}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          onChange={handleOnChange}
          value={emailValue}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
