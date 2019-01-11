import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import style from '../GlobalStyle'

export default class About extends React.Component{

    static navigationOptions = {
        tabBarIcon: ({tintColor}) => <Icon name="info" size={20} color={tintColor}/>
    };

    render(){
        return(
            <View style={style.viewCustom}>
                <Text>A propos</Text>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At autem commodi distinctio doloribus dolorum eligendi error
                    facilis illo laboriosam mollitia nam nisi nobis nostrum quo reiciendis ullam unde, vel veniam!
                </Text>
            </View>
        )
    }



}