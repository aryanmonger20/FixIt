import React from "react";
import { Text, StyleSheet, Platform } from "react-native";
import defaultStyles from '../config/style'

function AppText({ children, style }) {
  return <Text style={[defaultStyles.text, style]}>{children}</Text>;
}



export default AppText;
