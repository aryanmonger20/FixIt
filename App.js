import React,{useState} from "react";

import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen"
import WelcomeScreen from "./app/screens/WelcomeScreen";
import MessagesScreen from './app/screens/MessagesScreen'
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";

// const categories = [
//   { label: "Furniture", value: 1 },
//   { label: "Clothing", value: 2 },
//   { label: "Cameras", value: 3 },
// ];

 export default function App() {
//   const [category, setCategory] = useState(categories[0]);

  return (
    <Screen>
     
      <LoginScreen/>
    </Screen>
  );
}