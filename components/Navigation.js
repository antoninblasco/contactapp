import React from 'react';
import About from '../components/About'
import ContactsList from '../components/Contacts'
import { createAppContainer, createMaterialTopTabNavigator } from 'react-navigation'


const AppNavigator = createMaterialTopTabNavigator(
    {
        ContactsList: ContactsList,
        About: About
    },
    {
        tabBarPosition: 'bottom',
        tabBarOptions: {
            showIcon: true,
            swipeEnabled: true,
            activeTintColor: '#87ce40',
            inactiveTintColor: 'gray',
            tabStyle: {
                backgroundColor: '#e8e8e8'
            },
            labelStyle: {
                fontSize: 10,
                marginBottom: 0
            },
            style:{
                backgroundColor: 'white',
            }
        }
    }
);


const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
