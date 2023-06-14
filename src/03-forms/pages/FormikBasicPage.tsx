import { FormikErrors, useFormik } from "formik";
import "../styles/styles.css";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export const FormikBasicPage = () => {
  const validate = (values: FormValues) => {
    const { firstName, email, lastName } = values;

    const errors: FormikErrors<FormValues> = {};

    if (!firstName) errors.firstName = "First name is required";
    else if (firstName.length >= 15) {
      errors.firstName = "First name is too long";
    }

    if (!lastName) errors.lastName = "Last name is required";
    else if (lastName.length >= 10) errors.lastName = "Last name is too long";

    if (!email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  const { handleChange, values, handleSubmit, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validate,
    });

  return (
    <div>
      <h1>Formik Basic Tutorial</h1>

      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.firstName}
        />
        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.lastName}
        />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor="email">Email Adress</label>
        <input
          type="email"
          name="email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.email}
        />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
