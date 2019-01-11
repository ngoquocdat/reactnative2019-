import React, { Component } from 'react'
import {
  DatePickerIOS,
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Text,
} from 'react-native'

export default class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      chosenDate: new Date(),
      showPopup:false,
    };

    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
    this.setState({chosenDate: newDate})
  }

  render() {
    return (
      <View>
        <Modal 
            visible={this.state.showPopup}
            animationType="slide" //another value: slide, none
            transparent={true}
        >
        <View style={{
                backgroundColor:'#eee',
                width:'100%',
                position:'absolute',
                bottom:0,
        }}>
          <TouchableOpacity
            onPress={()=>{
                this.setState({
                  showPopup:false,
                  chosenDate:this.state.chosenDate
                })
            }}>
            <Text>Done</Text>
          </TouchableOpacity>
          <View style={styles.container}>
            <DatePickerIOS
              date={this.state.chosenDate}
              onDateChange={this.setDate}
              mode='date'
            />
          </View>
        </View>
        </Modal>
        <TouchableOpacity 
            onPress={()=>{
                this.setState({
                  showPopup:true,
                })
              }}>
            <Text>
              {this.state.chosenDate.getDate()}/
              {this.state.chosenDate.getMonth()+1}/
              {this.state.chosenDate.getFullYear()}</Text>
            
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
})