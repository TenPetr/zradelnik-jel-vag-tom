import React from "react";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Formik, Field, useField } from "formik";
import { Input, Button, Checkbox, Radio, Select } from "antd";
import * as yup from "yup";

import Layout from "../components/organisms/Layout";

const TextField = ({ label, placeholder, ...props }) => {
  const [field, meta] = useField(props);
  const errorMessage = meta.error && meta.touched ? meta.error : "";

  return (
    <>
      <label>{label}</label>
      <Input {...field} />
      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
    </>
  );
};

const AddNewPage = () => {
  return (
    <Layout>
      <Formik initialValues={{
        name:"nazev"
      }}>
        {({
          values,
          errors,
          isSubmitting,
          handleSubmit,
          isValid,
          handleBlur,
          handleChange,
        }) => (
          <form onSubmit={handleSubmit}>
            {/* <Field
              name="name"
              value={values.name}
              as={Input}
              placeholder="name"
            /> */}
             <TextField name='name' type='input' label='Name' placeholder='nazev' />
          </form>
        )}
      </Formik>
    </Layout>
  );
};

export default AddNewPage;
