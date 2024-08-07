import React from "react";
import { useForm } from "react-hook-form";

function ReactHookForm() {
  const {
    register,
      handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function onSubmitForm(formData) {
      console.log(formData);
      reset()
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h1>React Hook Form</h1>

      <form action="" onSubmit={handleSubmit(onSubmitForm)}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            {...register("email", {
              required: true,
            })}
            type="email"
            name="email"
            id="email"
          />
          {errors.email && errors.email.type === "required" ? (
            <p style={{ color: "red", fontWeight: "bolder", margin: "20px" }}>
              Email is required
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            {...register("password", {
              required: true,
              minLength: 8,
            })}
            type="password"
            name="password"
            id="password"
          />
          {errors.password && errors.password.type === "required" ? (
            <p style={{ color: "red", fontWeight: "bolder", margin: "20px" }}>
              password is required
            </p>
          ) : null}
          {errors.password && errors.password.type === "minLength" ? (
            <p style={{ color: "red", fontWeight: "bolder", margin: "20px" }}>
              Password should be at least 8 characters!, Please verify the password you entered
            </p>
          ) : null}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ReactHookForm;
