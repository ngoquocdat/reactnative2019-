import React from 'react';
import { StyleSheet, Text, View, Button, TextInput,TouchableOpacity, KeyboardAvoidingView, Keyboard } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
var styles = require('./Styles');
export default class ContactScreen extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      email:'',
      password:''
    }
  }
  handleEmail = (text) => {
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }
   login = (email, pass) => {
      alert('email: ' + email + ' password: ' + pass)
   }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <KeyboardAvoidingView style={{padding:20,}} behavior="padding">
      <View style={styles.form} >
        <View>
          <Text style={styles.title}>SignUp</Text>
        </View>
        <View>
          <TextInput
          style={styles.input}
          keyboardType='email-address' 
          value={this.state.email} 
          onChangeText={this.handleEmail} 
          placeholder="Email"
          autoFocus={true}
          />
        </View>
        <View>
          <TextInput 
          style={styles.input}
          value={this.state.password} 
          onChangeText={this.handlePassword} 
          autoFocus={true}
          placeholder="Password"
          secureTextEntry
          />
        </View>
        <View>
        <TouchableOpacity 
          style={styles.buttonContainer}
          onPress = {
            () => this.login(this.state.email, this.state.password)}
            >
               
               <Text style={styles.buttonText}> Submit </Text>
        </TouchableOpacity>
        </View>
      </View>
      </KeyboardAvoidingView>
    );
  }
}