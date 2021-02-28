import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/lists/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppTextInput from "./app/components/TextInput";
import AppPicker from "./app/components/Picker";
import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import { Button, Image } from "react-native";
import ImageInput from "./app/components/ImageInput";

export default function App() {
  const [imageUri, setImageUri] = useState();

  const requestPermission = async () => {
    const result = await Permissions.askAsync(
      Permissions.CAMERA_ROLL,
      Permissions.LOCATION
    );
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) alert("You need to enable permission to access");
  };
  useEffect(() => {
    requestPermission();
  }, []);
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) setImageUri(result.uri);
    } catch (error) {
      console.log("error reading image");
    }
  };
  return (
    <Screen>
      <Button title="Select Image" onPress={selectImage}></Button>
      <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
      <ImageInput />
    </Screen>
    // <ListingEditScreen/>
  );
}
