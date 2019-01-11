import React from 'react';
import {Text, View, TextInput,TouchableOpacity, Picker,Modal, ScrollView} from 'react-native';
import {Icon} from 'react-native-elements'
import Flag from 'react-native-flags'

export default class Language extends React.Component {

	constructor(props){
    super(props);
    this.state ={ 
      countryCode: '',
      showPopup:false,
    }
  }

  componentDidMount(){
  	fetch('http://ip-api.com/json')
    .then(res => res.json())
    .then(body => {
        let country = body.country;
        if (country === 'Vietnam') {
            this.setState({
                countryCode: body.countryCode,
            })
        } else {
            this.setState({
                countryCode: body.countryCode,
            })
        }
    })
  }

  render(){

  	return(
  		<View
  			style={{
  				flex: 1,
  				flexDirection:'row',
  				padding:20,
  				position:'absolute',
  				top: 0,
  				right: 0,
  				justifyContent:'flex-end',
  				width:200,
  			}}
  		>
  			<Modal 
	            visible={this.state.showPopup}
	            animationType="slide" //another value: slide, none
	            transparent={true}
	        >
	        
	          <Picker
	            selectedValue={this.state.countryCode}
	            style={{
	                backgroundColor:'#eee',
	                width:'100%',
	                position:'absolute',
	                bottom:0,}}
	            onValueChange={(itemValue, itemIndex) => this.setState({countryCode: itemValue})}>
	            <Picker.Item label="US" value="US" />
	            <Picker.Item label="VN" value="VN" />
	          </Picker>
	          <TouchableOpacity
	            style={{
	              position:'absolute',
	              bottom:'28%',
	              right:10,
	            }}
	            onPress={()=>{
	                this.setState({
	                  showPopup:false,
	                })
	            }}>
	            <Text>Done</Text>
	          </TouchableOpacity>
	        </Modal>
  			<Flag
			    code={this.state.countryCode}
			    size={32}
		  	/>
  			<TouchableOpacity 
  				style={{zIndex:10}}
	            onPress={()=>{
	                this.setState({
	                  showPopup:true,
	                })
	              }}>
	            <Text
	              style={{paddingLeft:10, paddingTop:10}}
	            >{this.state.countryCode}</Text>
	            
	        </TouchableOpacity>
	       
  		</View>
  	)
  }

}