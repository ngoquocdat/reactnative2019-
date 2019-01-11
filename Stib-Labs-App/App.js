import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Image } from 'react-native';
import Register from './screens/register_gradient'
import Thankyou from './screens/thankyou'
import Contact from './screens/contact'
import { createStackNavigator, createAppContainer, createMaterialTopTabNavigator } from 'react-navigation'; // Version can be specified in package.json
const logo = require ('./assets/icon.png')
const RootStack = createMaterialTopTabNavigator({
    Register: {
        screen: Register,
        navigationOptions: {
            header: null // Will hide header for HomePage
        }
    },
    Home: {
        screen: Thankyou,
        navigationOptions: {
            title:'',
            tabBarIcon: ({ focused, tintcolor }) => (
                <Image 
                source={logo} 
                style={{
                    justifyContent:'center', 
                    marginTop:50,
                    width:50, 
                    height:50,
                }}/>
              )
        },
    },
    Contact: {
        screen: Contact,
        navigationOptions: {
            header: null // Will hide header for HomePage
        }
    },

    }, {
    initialRouteName: 'Register',
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#E8B214',
      inactiveTintColor: '#108738',
      //activeBackgroundColor: 'red',
      showIcon: true,
      tabStyle:{
        backgroundColor:'white',
        position: 'fixed',
        bottom: 25,
      },
      style:{
        height:50,
        backgroundColor:'white',
      },
      indicatorStyle: {
        backgroundColor: '#108738',
        display:'none',
      },
      labelStyle:{
        fontWeight:'800',
      }
    },
    animationEnabled: true,
    swipeEnabled: true,
    lazy:true,
    backBehavior: 'yes',
});

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {

    render() {
        return (
            <AppContainer />
        )
    }
}
