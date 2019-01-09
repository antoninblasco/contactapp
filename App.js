import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import About from './components/About'
import style from './GlobalStyle'

export default class App extends React.Component {
  render() {
    return (
        <SafeAreaView style={style.droidSafeArea}>
            <About/>
        </SafeAreaView>
    );
  }
}
