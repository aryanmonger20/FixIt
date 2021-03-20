import { SearchBar } from 'react-native-elements';
import React, { useEffect,useState } from "react";


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
      <SearchBar
      lightTheme
      rounded="true"
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
      />
    );
  }
}

const styles = StyleSheet.create({})
