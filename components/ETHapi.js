import React from 'react';
import { ActivityIndicator, Text, View, TextInput,TouchableOpacity, Picker,Modal} from 'react-native';
import {Icon} from 'react-native-elements'

export default class ETHapi extends React.Component {

  constructor(props){
    super(props);
    this.state ={ 
      isLoading: true,
      dataSource:null,
      num: '2',
      currency:'USD',
      convert_value:0,
      showPopup:false,
    }
  }

  componentDidMount(){
    return fetch('https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH&tsyms=USD,EUR,VND')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.ETH,
        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }



  render(){

    

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    let temp = 0
    if(this.state.currency==='USD'){
      temp= JSON.stringify(this.state.dataSource.USD)
    }
    else if(this.state.currency==='EUR'){
      temp=JSON.stringify(this.state.dataSource.EUR)
    }
    else if(this.state.currency==='VND'){
      temp=JSON.stringify(this.state.dataSource.VND)
    }

    return(
      <View style={{
        flex: 1, 
        paddingTop:20,
        paddingLeft:20,
        flexDirection:'row',
      }}>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            width: '20%',
            paddingHorizontal: 10,
            marginBottom:20,
          }}
          onChangeText={(num) => this.setState({num})}
          value={this.state.num}
        />
        <Text> ETH</Text>
        <TouchableOpacity>
          <Icon
            name='arrow-forward'
          />
        </TouchableOpacity>
       <Text>{temp*this.state.num}</Text>
       <TouchableOpacity 
            onPress={()=>{
                this.setState({
                  showPopup:true,
                })
              }}>
            <Text
              style={{paddingLeft:10,}}
            >{this.state.currency}</Text>
            
        </TouchableOpacity>
       <Modal 
            visible={this.state.showPopup}
            animationType="slide" //another value: slide, none
            transparent={true}
        >
        <TouchableOpacity
            style={{
              position:'absolute',
              bottom:'50%',
            }}
            onPress={()=>{
                this.setState({
                  showPopup:false,
                })
            }}>
            <Text>Done</Text>
          </TouchableOpacity>
          <Picker
            selectedValue={this.state.currency}
            style={{
                backgroundColor:'#eee',
                width:'100%',
                position:'absolute',
                bottom:0,}}
            onValueChange={(itemValue, itemIndex) => this.setState({currency: itemValue})}>
            <Picker.Item label="USD" value="USD" />
            <Picker.Item label="EUR" value="EUR" />
            <Picker.Item label="VND" value="VND" />
          </Picker>
        </Modal>
      </View>
    );
  }
}
