import { Form, Formik } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "../components";
import "../styles/styles.css";

export const RegisterFormikPage = () => {
  /* const {
    name: "",
    email: "",
    password1: "",
    password2: "", */

  return (
    <div>
      <h1>Register Formik Page</h1>

      <Formik
        initialValues={{
          name: "Jhoam",
          email: "molina_504@hotmail.com",
          password1: "123456",
          password2: "123456",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .required("Required")
            .min(2, "Must be at least 2 characters")
            .max(15, "Must be 15 characters or less"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password1: Yup.string()
            .required("Required")
            .min(6, "Must be at least 6 characters"),
          password2: Yup.string()
            .required("Required")
            .oneOf([Yup.ref("password1")], "Passwords must match"),
        })}
      >
        {({ handleReset, handleSubmit }) => {
          return (
            <Form onSubmit={handleSubmit}>
              <MyTextInput
                label="Name"
                name="name"
                type="text"
                placeholder="Inserta a Name"
              />
              <MyTextInput
                label="Email"
                name="email"
                type="email"
                placeholder="Insert an email"
              />
              <MyTextInput
                label="Password"
                name="password1"
                type="password"
                placeholder="*******"
              />
              <MyTextInput
                label="Confirm Password"
                name="password2"
                type="password"
                placeholder="*******"
              />

              <button type="submit">Submit</button>

              <button onClick={handleReset} type="reset">
                Reset
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
