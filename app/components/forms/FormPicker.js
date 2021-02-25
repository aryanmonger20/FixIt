import React from "react";
import { useFormikContext } from "formik";

import AppPicker from "../Picker";
import ErrorMessage from "./ErrorMessage";

function AppFormPicker({ items, name,PickerItemComponent, placeholder }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
        PickerItemComponent={PickerItemComponent}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
