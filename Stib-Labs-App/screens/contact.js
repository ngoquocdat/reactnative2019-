import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert, FLatList } from 'react-native';
import Expo, { Constants } from 'expo';

export default class App extends Component {

  constructor(props) {
        super(props);
        this.state = {
            contact_name:[],
            phone_number:[],      
        }
    }

  async componentDidMount() {
    const time = Date.now();
    const permission = await Expo.Permissions.askAsync(Expo.Permissions.CONTACTS);
    if (permission.status !== 'granted') { return; }

    const contacts = await Expo.Contacts.getContactsAsync({
      fields: [
        Expo.Contacts.PHONE_NUMBERS,
        Expo.Contacts.EMAILS,
      ],
      pageSize: 10000,
      pageOffset: 0,
    });
    
    const elapsed = (Date.now() - time) / 1000;
    // Alert.alert('Contacts Read', `Read ${contacts.data.map(item=> item.name)
    // } contacts in ${elapsed} seconds`);
    this.setState({
      contact_name:contacts.data.map(item=> item.name),
      phone_number:contacts.data.map(item=> item.phoneNumbers[0].number)
    })
  }
  
  render() {
    return (
      <View style={styles.container}>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
