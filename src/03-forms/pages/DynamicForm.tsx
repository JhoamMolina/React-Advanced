import { Form, Formik } from "formik";
import * as Yup from "yup";
import { MySelect, MyTextInput } from "../components";
import formData from "../data/custom-form.json";

interface initialValues {
  [key: string]: any;
}

export const DynamicForm = () => {
  const initialValues: initialValues = {};
  const requiredFields: initialValues = {};

  for (const input of formData) {
    initialValues[input.name] = input.value;

    if (!input.validations) continue;

    let schema = Yup.string();

    for (const validation of input.validations) {
      if (validation.type === "required") {
        schema = schema.required(validation.message);
      }

      if (validation.type === "minLength") {
        schema = schema.min(validation.value!, validation.message);
      }

      if (validation.type === "maxLength") {
        schema = schema.max(validation.value!, validation.message);
      }

      if (validation.type === "email") {
        schema = schema.email(validation.message);
      }
    }

    requiredFields[input.name] = schema;
  }

  const validationSchema = Yup.object({ ...requiredFields });

  return (
    <div>
      <h1>Dynamic Form</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form noValidate onSubmit={formik.handleSubmit}>
            {formData.map(({ type, name, placeholder, label, options }) => {
              if (type === "input" || type === "email" || type === "password") {
                return (
                  <MyTextInput
                    key={name}
                    type={type as any}
                    name={name}
                    label={label}
                    placeholder={placeholder}
                  />
                );
              } else if (type === "select") {
                return (
                  <MySelect key={name} name={name} label={label}>
                    {options?.map(({ value, label }) => (
                      <option key={value} value={value}>
                        {label}
                      </option>
                    ))}
                  </MySelect>
                );
              }

              throw new Error(`Type: ${type} not allowed`);
            })}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
