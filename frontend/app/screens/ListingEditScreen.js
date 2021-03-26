import React, { useState } from "react";
import { StyleSheet ,Text} from "react-native";
import * as Yup from "yup";

import {
  Form,
  FormField,
  FormPicker as Picker,
  SubmitButton,
} from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";
import Screen from "../components/Screen";
import FormImagePicker from "../components/forms/FormImagePicker";
import listingsApi from "../api/listings";
import useLocation from "../hooks/useLocation";
import UploadScreen from "./UploadScreen";
import users from "../api/users";
import colors from "../config/colors";

import "yup-phone";


const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;


const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  contact: Yup.string()
  .phone("IN", true)
  .required(),
});

const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "table-chair",
    label: "Carpenter",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    label: "Mechanic",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    label: "Cameraman",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "pipe-wrench",
    label: "Plumber",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "human-female",
    label: "Maid",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "home-lightbulb-outline",
    label: "Electrician",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "music",
    label: "Musician",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    icon: "school",
    label: "Tutor",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "format-paint",
    label: "Painter",
    value: 10,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Other",
    value: 9,
  },
];
function ListingEditScreen() {
  const location = useLocation();
  //console.log(location);
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await listingsApi.addListing(
      { ...listing, location },
      (progress) => setProgress(progress)
    );

    if (!result.ok) {
      setUploadVisible(false);
      return alert("Could not save the listing");
    }

    resetForm();
  };

  return (
    <Screen style={styles.container}>
      <UploadScreen
        onDone={() => setUploadVisible(false)}
        progress={progress}
        visible={uploadVisible}
      />
      <Text style={styles.contact}>Registration From For Workers!!</Text>
      <Form
        initialValues={{
          id:users.id,
          title: "",
          price: "",
          description: "",
          category: null,
          contact:"",
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        style={styles.name}
      >
        {/* <FormImagePicker name="images" /> */}
        <FormField maxLength={255} name="title" placeholder="Name"  />
        <FormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <Picker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        />
        <FormField
        minLength={10}
          maxLength={12}
          keyboardType="numeric"
          name="contact"
          numberOfLines={1}
          placeholder="Phone-Number"
        />
        <FormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="About You (in less than 100 words)"
        />
        <SubmitButton  title="Post" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor:"#499cf5"
  },
  contact:{
    padding:15,
    fontSize:22,
    color:colors.white,
    fontWeight:"600",
    textShadowOffset:{width:10,height:10},
   //fontFamily:"Roboto",
    textShadowRadius:10

  },
  name: {
    elevation:10,
    borderRadius:6,
    borderColor:"#0c0c0c"
  },
 
});
export default ListingEditScreen;
