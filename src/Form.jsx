import { useState } from "react";

function Form() {
  const [inputValue, setInputValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  function handleInputChange(event) {
    const { value } = event.target;
    setInputValue(value);
  }

  function handleEmailChange(event) {
    const { value } = event.target;
    setEmailValue(value);
  }

  function handleOnChange(event) {
    console.log(event.target.name);

    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSumbit(e) {
    e.preventDefault();

    console.log(inputValue, emailValue, "inputValue");
  }

  console.log(formData);

  return (
    <div>
      <form action="submit" onSubmit={handleSumbit}>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          placeholder="enter your name"
          onChange={handleOnChange}
          // onChange={(event) =>
          //   setFormData({
          //     ...formData,
          //     [event.target.name]: event.target.value,
          //   })
          // }
        />
        <input
          value={formData.email}
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          onChange={handleOnChange}
          // onChange={(event) =>
          //   setFormData({
          //     ...formData,
          //     [event.target.name]: event.target.value,
          //   })
          // }
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
