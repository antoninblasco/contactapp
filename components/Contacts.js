import React from 'react'
import { SafeAreaView, View, TextInput } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome";
import style from '../GlobalStyle'
import Contacts from 'react-native-contacts'

export default class ContactsList extends  React.Component{

    constructor(props){
        super(props);
        this.state = {
            contactName: 'Antonin'
        }
    }

    static navigationOptions = {
        tabBarIcon: ({tintColor}) => <Icon name="users" size={20} color={tintColor}/>
    };

    setContactName(nom){
        this.setState({
            contactName: nom
        })
    }

    getContacts(){
        Contacts.getAll((contacts) => {
            // contacts returned
            console.log(contacts)
        });
    }

    componentWillMount(){
        this.getContacts()
    }

    render(){
        return(
            <View style={style.viewCustom}>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 10}}
                    value={this.state.contactName}
                    onChangeText={(text) => this.setContactName(text)}
                />
            </View>
        )
    }
}