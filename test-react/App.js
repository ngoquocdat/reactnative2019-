import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView,TouchableOpacity } from 'react-native';
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
    Home: {
      screen:HomeScreen,
      navigationOptions:{
        header:null,
      }
    },
    ClipboardScreen: ClipboardScreen,
    ETHapi: ETHapi,
  },
);

const AppNavigator = createMaterialTopTabNavigator(
  {
    QRCode: QRCodeScanner,
    Contact: ContactScreen,
    Home: {
      screen: HomeStack, 
      navigationOptions: {
          title:'',
          header:null,

          tabBarIcon: ({ focused, tintcolor }) => (
            <View
              style={{
                backgroundColor:'#108738',
                borderColor:'white',
                borderWidth: 2,
                borderRadius: '100%',
                width:80,
                height:80,
                flex:1,
                justifyContent:'center',
                alignItems:'center',
                position:'absolute',
                // marginBottom:20,
                // top:15,
              }}
            >
              <Image 
              source={logo} 
              style={{
                justifyContent:'center', 
                width:50, 
                height:50,
                alignItems:'center',
              }}/>
            </View>
          )
        },
    },
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
      activeTintColor: '#E8B214',
      inactiveTintColor: 'white',
      inactiveBackgroundColor: '#108738',
      activeBackgroundColor: '#108738',
      showIcon: true,
      tabStyle:{
        //backgroundColor:'#108738',
        // position: 'fixed',
        bottom: 25,
        fontSize:10,
        height:'auto',
      },
      labelStyle: {        
       fontSize: 10,
       justifyContent:'center',
       textAlign:'center',
       fontWeight:'700',
       whiteSpace:'nowrap',
       width:'auto',
       height:45,
       backgroundColor: '#108738',
      },
      style:{
        height:45,
        backgroundColor: '#108738',
      },
      indicatorStyle: {
        display:'none',
      },
      
      upperCaseLabel: false,
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
