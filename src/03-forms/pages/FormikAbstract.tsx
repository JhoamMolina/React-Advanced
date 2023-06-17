import { Form, Formik } from "formik";
import * as Yup from "yup";
import { MyCheckBox, MySelect, MyTextInput } from "../components";
import "../styles/styles.css";

export const FormikAbstract = () => {
  return (
    <div>
      <h1>Formik Abstract</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(10, "Must be 10 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          terms: Yup.boolean().oneOf([true], "You must accept the terms"),
          jobType: Yup.string()
            .notOneOf(["product"], "Option not allowed")
            .required("Required"),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput
              label="First Name"
              name="firstName"
              placeholder="Jhoam"
            />
            <MyTextInput
              label="last Name"
              name="lastName"
              placeholder="Molina"
            />

            <MyTextInput
              label="Email Address"
              name="email"
              type="email"
              placeholder="molina_504@hotmail.com"
            />

            <MySelect label="Job Type" name="jobType">
              <option value="">Select a job type</option>
              <option value="designer">Designer</option>
              <option value="development">Developer</option>
              <option value="product">Product Manager</option>
            </MySelect>

            <MyCheckBox name="terms" label="Accept terms and conditions" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
