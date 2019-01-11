import React from 'react'
import { SafeAreaView,View, Text } from 'react-native'
import style from './GlobalStyle'
import AppContainer  from './components/Navigation'

export default class About extends React.Component{

    render(){
        return(
            <SafeAreaView style={style.droidSafeArea}>
                <AppContainer/>
            </SafeAreaView>
        )
    }



}


