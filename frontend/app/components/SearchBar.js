import { SearchBar } from 'react-native-elements';
import React, { useEffect, useState } from "react";
import colors from '../config/colors';


import { StyleSheet, Text, View } from 'react-native'



export default class App extends React.Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (

      



      <View style={styles.search}>

        <SearchBar
          lightTheme
          rounded="true"
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          value={search}
        
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  search:{
    backgroundColor: colors.light,
    marginBottom:15,
  }
  
})
