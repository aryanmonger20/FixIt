import React, { useState, useEffect } from 'react';

import { Form, FormField, SubmitButton } from "./forms";
import { Keyboard } from "react-native";
import * as Notifications from 'expo-notifications'
import { FontAwesome } from '@expo/vector-icons'; 

import { Alert, View, StyleSheet, Text, Linking, TextInput, TouchableOpacity } from 'react-native';
import Button from "../components/Button"
export default function App(cont) {
 const cellNumber=cont.contact;
//console.log(cellNumber)
  //const [cellNumber, setCellNumber] = useState('');
  const handleSubmit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss();
  }
  const [whatsAppMessage, setWhatsAppMessage] = useState();

  const sendMsg = () => {
  
    
    let URL = 'whatsapp://send?text=' +  whatsAppMessage + '&phone=91' + cellNumber;

    Linking.openURL(URL)
      .then((data) => {
        console.log('WhatsApp Opened');
      })
      .catch(() => {
        Alert.alert('Make sure Whatsapp installed on your device');
      });
      Keyboard.dismiss();
      
  };
  
  return (

    <View >
 <Form
      initialValues={{ message: "" }}
      onSubmit={sendMsg,handleSubmit}

      
    >
     
      <FormField
        maxLength={255}
        multiline
        name="message"
        value={whatsAppMessage}
        numberOfLines={3}
        placeholder="Message..."
        onChangeText={
          (whatsAppMessage) => setWhatsAppMessage(whatsAppMessage)
        }
      />
      </Form>

     
        <Button 
        title="Send Message Via WhatsApp"
        onPress={sendMsg}
        color="wht"></Button>
        
      
    </View>

  );
}

const styleSheet = StyleSheet.create({
 
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    padding: 10
  },

  text1: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  textInputStyle: {
    height: 42,
    borderColor: 'blue',
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: 10,
    marginTop: 20
  },

  button: {
    justifyContent: 'center',
    marginTop: 18,
    padding: 12,
    backgroundColor: '#00B8D4',
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  
 
});