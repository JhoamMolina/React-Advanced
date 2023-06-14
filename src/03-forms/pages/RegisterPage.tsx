import { FormEvent } from "react";

import { useForm } from "../hooks/useForm";

import "../styles/styles.css";

const RegisterPage = () => {
  const {
    name,
    email,
    password1,
    password2,
    onChange,
    formData,
    resetForm,
    isValidEmail,
  } = useForm({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>Register Page</h1>

      <form noValidate onSubmit={onSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={name}
          onChange={onChange}
          className={`${name.trim().length <= 0 && "has-error"}`}
        />
        {name.trim().length <= 0 && <span>This field is needed</span>}
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
          className={`${!isValidEmail(email) && "has-error"}`}
        />
        {!isValidEmail(email) && <span>Email is not valido</span>}

        <input
          name="password1"
          type="password"
          placeholder="Password"
          value={password1}
          onChange={onChange}
        />
        {password1.trim().length <= 0 && <span>This field is needed</span>}
        {password1.trim().length <= 6 && password1.trim().length > 0 && (
          <span>Password needs to have at elast 6 characeters</span>
        )}

        <input
          name="password2"
          type="password"
          placeholder="Repeat password"
          value={password2}
          onChange={onChange}
        />

        {password2.trim().length <= 0 && <span>This field is needed</span>}
        {password2.trim().length > 0 && password1 !== password2 && (
          <span>Password don't match</span>
        )}

        <button type="submit">Create</button>

        <button type="button" onClick={resetForm}>
          ResetForm
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
