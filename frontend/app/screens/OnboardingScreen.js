import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';
import routes from "../navigation/routes"

const Dots = ({selected}) => {
    let backgroundColor;

    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

    return (
        <View 
            style={{
                width:6,
                height: 6,
                marginHorizontal: 3,
                backgroundColor
            }}
        />
    );
}

const Skip = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Skip</Text>
    </TouchableOpacity>
);

const Next = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Next</Text>
    </TouchableOpacity>
);

const Done = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Done</Text>
    </TouchableOpacity>
);

const OnboardingScreen = ({navigation}) => {
    return (
        <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        DotComponent={Dots}
        onSkip={() =>   navigation.navigate(routes.WELCOMESCREEN)}
        onDone={() => navigation.navigate(routes.WELCOMESCREEN)}
        pages={[
          {
            backgroundColor: '#a6e4d0',
            image: <Image source={require('../assets/findYourNeeds.png')} />,
            title: 'Find your needs',
            subtitle: 'A New Way To Connect With The Workers',
          },
          {
            backgroundColor: '#fdeb93',
            image: <Image source={require('../assets/chat.png')} />,
            title: 'Chat with workers',
            subtitle: 'Share Your Problem or Requirements with them',
          },
          {
            backgroundColor: '#e9bcbe',
            image: <Image source={require('../assets/onboarding-img3.png')} />,
            title: 'Receive Your work',
            subtitle: "We will serve your work at your doorstep",
          },
        ]}
      />
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});







