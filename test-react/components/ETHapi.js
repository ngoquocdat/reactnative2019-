import React from 'react';
import { ActivityIndicator, Text, View, TextInput,TouchableOpacity, Picker,Modal, ScrollView} from 'react-native';
import {Icon, CheckBox} from 'react-native-elements'
import { Dropdown } from 'react-native-material-dropdown'

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
      showPopup:false,
      countryCode: '',
    }
  }

  componentDidMount(){
      fetch('https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH&tsyms=USD,EUR,VND')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.ETH,
        });

      })
      .catch((error) =>{
        console.error(error);
      })

      fetch('http://ip-api.com/json')
            .then(res => res.json())
            .then(body => {
                let country = body.country;
                if (country === 'Vietnam') {
                    this.setState({
                        countryCode: body.countryCode.toLowerCase(),
                    })
                } else {
                    this.setState({
                        countryCode: body.countryCode.toLowerCase(),
                    })
                }
            })
  }



  render(){

    let payment_method=[
    {value: 'Cash'},
    {value: 'Bank transfer'},
    ]

    let payment_currency=[
    {value:'USD'},
    {value:'EUR'},
    {value:'VND'},
    ]

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
      <ScrollView>
        <View>
          <Text>My Offers / </Text>
          <Text> Create a new Offer </Text>
        </View>
        <View>
          <Text>Do you want to buy or sell ether?</Text>
        </View>
        <View>
          <CheckBox
            center
            title='Buy'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={true}
          />
          <CheckBox
            center
            title='Sell'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={true}
          />
        </View>
        <View>
          <Text>What location do you want to display?</Text>
          <Text>These cities appear close to you:</Text>
        </View>
        <View>
          <CheckBox
            center
            title='Ha Noi, VN'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={true}
          />
          <CheckBox
            center
            title='Other'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={true}
          />
        </View>
        <View>
          <Text>Which payment method do you want to accept?</Text>
          <Text>General payment method:</Text>
        </View>
        <View>
          <Dropdown data={payment_method}/>
          <CheckBox
            center
            title='Other'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={true}
          />
          <TextInput/>
        </View>
        <View>
          <Text>Which local currency do you want to trade with?</Text>
          <Text>You choose currency:</Text>
        </View>
        <View>
          <CheckBox
            center
            title='Ha Noi, VN'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={true}
          />
          <CheckBox
            center
            title='Other'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={true}
          />
        </View>
        <View>
          <Text>Choose another local currency:</Text>
          <Dropdown data={payment_currency}/>
        </View>
        <View>
          <Text>Dynamic Price: </Text>
          <Text>1 ETH = {this.state.currency}{temp}</Text>
        </View>
      </ScrollView>
    )
    // return(
    //   <View style={{
    //     flex: 1, 
    //     paddingTop:20,
    //     paddingLeft:20,
    //     flexDirection:'row',
    //   }}>
    //     <Text>{this.state.countryCode}</Text>
    //     <TextInput
    //       style={{
    //         height: 40,
    //         borderColor: 'gray',
    //         borderWidth: 1,
    //         width: '20%',
    //         paddingHorizontal: 10,
    //         marginBottom:20,
    //       }}
    //       keyboardType = 'numeric'
    //       onChangeText={(num) => this.setState({num})}
    //       value={this.state.num}
    //     />
    //     <Text> ETH</Text>
    //     <TouchableOpacity>
    //       <Icon
    //         name='arrow-forward'
    //       />
    //     </TouchableOpacity>
    //    <Text>{temp*this.state.num}</Text>
    //    <TouchableOpacity 
    //         onPress={()=>{
    //             this.setState({
    //               showPopup:true,
    //             })
    //           }}>
    //         <Text
    //           style={{paddingLeft:10,}}
    //         >{this.state.currency}</Text>
            
    //     </TouchableOpacity>
    //    <Modal 
    //         visible={this.state.showPopup}
    //         animationType="slide" //another value: slide, none
    //         transparent={true}
    //     >
    //     <TouchableOpacity
    //         style={{
    //           position:'absolute',
    //           bottom:'50%',
    //         }}
    //         onPress={()=>{
    //             this.setState({
    //               showPopup:false,
    //             })
    //         }}>
    //         <Text>Done</Text>
    //       </TouchableOpacity>
    //       <Picker
    //         selectedValue={this.state.currency}
    //         style={{
    //             backgroundColor:'#eee',
    //             width:'100%',
    //             position:'absolute',
    //             bottom:0,}}
    //         onValueChange={(itemValue, itemIndex) => this.setState({currency: itemValue})}>
    //         <Picker.Item label="USD" value="USD" />
    //         <Picker.Item label="EUR" value="EUR" />
    //         <Picker.Item label="VND" value="VND" />
    //       </Picker>
    //     </Modal>
    //   </View>
    // )
  }
}
