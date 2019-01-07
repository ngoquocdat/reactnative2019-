import React from 'react';
import { Text, View, ScrollView, Animated, TouchableOpacity, StyleSheet, Button, Dimensions} from 'react-native';
import { createStackNavigator, createAppContainer} from "react-navigation";
import Panel from 'react-native-panel';
import {Icon} from 'react-native-elements'
import CollapsibleList from 'react-native-collapsible-list'

const content_0 = 'Hello it is expanded'
const deviceWidth = Dimensions.get('window').width
var styles = require('./Styles');
export default class Popup extends React.Component {
	constructor(props){
	    super(props)
	    this.state ={
		    buttonClose:true,
		    expanded: false,
		    content:'',
		    iconArrow:'arrow-forward',
		}
  	}
	componentWillMount = () => {
      this.animatedWidth = new Animated.Value(deviceWidth)
      this.animatedHeight = new Animated.Value(70)
   }


   animatedBox = () => {
   	this.setState({
   		buttonClose:false,
   		expanded: true,
   		content: content_0,
   		iconArrow:'arrow-downward'
   	})
      // Animated.timing(this.animatedWidth, {
      //    toValue: 200,
      //    duration: 1000
      // }).start()
      Animated.timing(this.animatedHeight, {
         toValue: 200,
         duration: 500
      }).start()
   }


   closeBox = () => {
   	this.setState({
   		buttonClose:true,
   		expanded: false,
   		content:'',
   		iconArrow:'arrow-forward',
   	})
      // Animated.timing(this.animatedWidth, {
      //    toValue: 50,
      //    duration: 1000
      // }).start()
      Animated.timing(this.animatedHeight, {
         toValue: 70,
         duration: 500
      }).start()
   }
   render() {
      const animatedStyle = { width: this.animatedWidth*0.9, height: this.animatedHeight }
      return (
      	<View>
      		<Text style={styles.white_title}>JavaScript Back-end Developers</Text>
	        <TouchableOpacity 
	         	onPress = {this.state.expanded === false ? this.animatedBox : this.closeBox}
	         	style={styles.orange_block}>

	            <Animated.View style = {[styles.orange_block, animatedStyle]}>
	            <View style={{
	            	flex:1,
	            	flexDirection:'row',
	            	backgroundColor:'#f68420',
	            	alignItem:'flex-start',
	            }}>
	            	<Text style={{
	            			color:'white',
	            			paddingLeft: 10,
	            			paddingTop:16,
	            			paddingBottom:10,
	            			flex:2,
	            			
	            		}}>View Position(Slide down)</Text>
	            	<Icon
                		iconStyle={{
                			paddingTop:14,
                			marginRight:20,
                			flex:2,
                			justifyContent:'flex-end'
                		}}
                  		color='white'
                 	 	name={this.state.iconArrow}
                 	/>
                </View>
	            	<Text>{this.state.content}</Text>

	            </Animated.View>
	        </TouchableOpacity>
        </View>
      )	
  }
}