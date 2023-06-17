import { ErrorMessage, useField } from "formik";

interface MyTextInputProps {
  label: string;
  name: string;
  placeholder?: string;
  [x: string]: any; // for the rest property
}

export const MySelect = ({ label, ...props }: MyTextInputProps) => {
  const [field] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      <ErrorMessage name={props.name} component="span" />
      {/*       {meta.touched && meta.error && (
        <span className="error">{meta.error}</span>
      )} */}
    </>
  );
};
