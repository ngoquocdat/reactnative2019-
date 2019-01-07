import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
import { createMaterialTopTabNavigator, createAppContainer, TabBarBottom,createStackNavigator } from "react-navigation";
import { Ionicons } from '@expo/vector-icons';
import Image from 'react-native-remote-svg'

import ContactScreen from './components/ContactScreen';
import CareersScreen from './components/CareersScreen'
import SignUpScreen from './components/SignUpScreen'
import TableClass from './components/Table'
import DatePicker from './components/DatePicker'
import QRCodeScanner from './components/QRCodeScanner'
import ClipboardScreen from './components/Clipboard'
import ETHapi from './components/ETHapi'

const logo = require ('./images/logo.svg')

var styles = require('./components/Styles');

class HomeScreen extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={styles.mainpage}>
        <Text style={styles.title}>Home</Text>
        <Button
          title="Contact"
          onPress={() => this.props.navigation.navigate('Contact')}
        />
        <Button
          title="Careers"
          onPress={() => this.props.navigation.navigate('Careers')}
        />
        <Button
          title="SignUp"
          onPress={() => this.props.navigation.navigate('SignUp')}
        />

        <TableClass/>
        <Text>Date Picker: </Text>
        <DatePicker/>

        <Button
          title="QR Code Scanner"
          onPress={() => this.props.navigation.navigate('QRCodeScanner')}
        />

        <Button
          title="Clipboard"
          onPress={() => this.props.navigation.navigate('ClipboardScreen')}
        />

        <Button
          title="ETHapi"
          onPress={() => this.props.navigation.navigate('ETHapi')}
        />

      </ScrollView>
    );
  }
}

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    QRCodeScanner: QRCodeScanner,
    ClipboardScreen: ClipboardScreen,
    ETHapi: ETHapi,
  },
);

const AppNavigator = createMaterialTopTabNavigator(
  {
    Home: {
      screen: HomeStack, 
      navigationOptions: {
          title:'',
          tabBarIcon: ({ focused, tintcolor }) => (
            <Image 
            source={logo} 
            style={{justifyContent:'center', marginTop:25,width:50, height:50}}/>
          )
        },
    },
    Contact: ContactScreen,
    Careers: CareersScreen,
    SignUp: SignUpScreen,
  },
  {
    // defaultNavigationOptions: ({ navigation }) => ({
    //   tabBarIcon: ({ focused, tintColor }) => {
    //     const { routeName } = navigation.state;
    //     console.log(navigate.state)
    //     if (routeName === 'Home') {
    //       return <Image 
    //       source={logo} 
    //       style={{ width: '90%', height: '90%', justifyContent:'center',marginTop:5,}}/>
    //     } else if (routeName === 'Contact') {
    //       return <Image source={logo}/>
    //     }
    //   },
    // }),
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'white',
      //activeBackgroundColor: 'red',
      showIcon: true,
      tabStyle:{
        backgroundColor:'#1c5c7b',
        position: 'fixed',
        bottom: 20,
      },
      style:{
        height:60,
        backgroundColor:'#1c5c7b',
      },
    },
    animationEnabled: true,
    swipeEnabled: true,
    initialRouteName : "Home",
    lazy:true,
    backBehavior: 'yes',
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
