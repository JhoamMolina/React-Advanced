import { ErrorMessage, useField } from "formik";

interface MyCheckBoxProps {
  label: string;
  name: string;
  [x: string]: any; // for the rest property
}

export const MyCheckBox = ({ label, ...props }: MyCheckBoxProps) => {
  const [field] = useField({ ...props, type: "checkbox" });
  return (
    <>
      <label>
        <input type="checkbox" {...field} {...props} />
        {label}
      </label>
      <ErrorMessage name={props.name} component="span" />
      {/*       {meta.touched && meta.error && (
        <span className="error">{meta.error}</span> */}
      {/*    )} */}
    </>
  );
};
