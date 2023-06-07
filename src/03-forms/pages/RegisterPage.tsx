import { ChangeEvent, FormEvent, useState } from "react";
import "../styles/styles.css";

const RegisterPage = () => {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });

  const { email, name, password1, password2 } = registerData;

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    return setRegisterData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(registerData);
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
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
        />
        <input
          name="password1"
          type="password"
          placeholder="Password"
          value={password1}
          onChange={onChange}
        />
        <input
          name="password2"
          type="password"
          placeholder="Repeat password"
          value={password2}
          onChange={onChange}
        />

        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default RegisterPage;
