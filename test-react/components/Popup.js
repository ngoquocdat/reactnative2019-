import React from 'react';
import { Text, View, ScrollView, Modal,TouchableOpacity } from 'react-native';
import { createStackNavigator, createAppContainer} from "react-navigation";
import {Icon} from 'react-native-elements'

var styles = require('./Styles');

export default class Popup extends React.Component {
	constructor(props){
    super(props)
    this.state ={
      showPopup:false,
      iconArrow:'arrow-forward',
    }
  }
  render() {
  	return(
  		<View style={styles.orange_block}>
            <Text style={styles.white_title}>Mobile Apps Developers (Android / IOS)</Text>
            <Modal 
            	visible={this.state.showPopup}
            	animationType="fade" //another value: slide, none
          		transparent={true}
            >
            	<View style={{
            		backgroundColor:'#f68420',
            		width:'50%',
            		height:'70%',
            		position:'absolute',
            		top:'25%',
            		left:'25%',
            	}}>
            		<TouchableOpacity
            			style={{
            				position:'absolute',
            				top:0,
            				right:0,
            				paddingTop:10,
            				paddingRight:10,
            				zIndex:10,
            			}}
	            		onPress={()=>{
	                		this.setState({
	                			showPopup:false,
	                			iconArrow:'arrow-forward'
	                		})
	                	}}>
	            		<Icon
	                  		color='white'
	                 	 	name='close'
	                 	/>
            		</TouchableOpacity>
            		<Text 
            			style={{
            				color:'white',
            				textAlign:'center',
            				position:'relative',
            				top:50,
            			}}
            		> 
            			Popup is opened </Text>
            	</View>
            </Modal>
 
                <TouchableOpacity 
                style={styles.orange_button_popup}
                onPress={()=>{
                		this.setState({
                			showPopup:true,
                			iconArrow:'arrow-downward'
                		})
                	}}>
                	<Icon
                		iconStyle={{marginRight:20}}
                  		color='white'
                 	 	name={this.state.iconArrow}
                 	/>
            		<Text style={{
            			color:'white',
            			paddingLeft: 10,
            			paddingTop:15,
            		}}>View Position(Popup)</Text>
            		
            	</TouchableOpacity>

        </View>
  	)
  }
}