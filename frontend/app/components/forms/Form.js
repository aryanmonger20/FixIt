import React from "react";
import { Formik } from "formik";
import { StyleSheet } from "react-native";

function AppForm({ initialValues, onSubmit, validationSchema, children }) {
  return (
    <Formik
      // style={styles.field}
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
}

export default AppForm;

// const styles = StyleSheet.create({
//   field:{
//     elevation:10,
//     borderRadius:6,
//     borderColor:"#acacda"
//   }
// });
