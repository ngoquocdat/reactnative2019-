import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, FlatList, ActivityIndicator, WebView, Image } from 'react-native';
import { ScrollView, Dimensions } from 'react-native';
// import { Col, Row, Grid } from "react-native-easy-grid";
// import Image from 'react-native-remote-svg';
import PhoneInput from 'react-native-phone-input';
import Flag from 'react-native-flags'
import ModalDropdown from 'react-native-modal-dropdown'
import {Icon} from 'react-native-elements'
import { Dropdown } from 'react-native-material-dropdown'

//LinearGradient,
import { Font, Permissions, Svg } from 'expo';
const { Circle, Rect, Path, Polygon, Polyline, Line, G } = Svg;
const styles = StyleSheet.create({
    loading:{}
})
// const styles = StyleSheet.create({
//     mainpage: {
//             backgroundColor: '#1c5c7b'
//         },
//         textWhite:{
//             color: '#fff'
//         },
//         group_logo:{
//             flex: 1,
//             flexDirection: 'row',
//             justifyContent: 'space-between',
//             alignItems: 'center',    
//             marginLeft: 'auto',
//             marginRight: 'auto',
//             marginTop: 50,
//             marginBottom: 20
//         },
//         signupCont: {
//             flexGrow: 1,
//             alignItems: 'center',
//             justifyContent: 'flex-end',
//             paddingVertical: 16,
//             flexDirection: 'row'
//         },
//         titleTop:{
//             fontSize: 24,
//             marginTop: 5,
//             color: '#fff',
//             marginBottom: 10,
//             fontFamily: 'MuliB'
//         },
//         signupText: {
//             color: 'rgba(255,255,255,0.7)',
//             fontSize: 16
//         },
//         signupButton: {
//             color: '#ffffff',
//             fontWeight: '500',
//             fontSize: 16
//         },
//         form: {
//             justifyContent: 'center',
//             alignItems: 'center',
//             flex: 1,
//             fontFamily: 'Muli'
//         },
//         inputBox: {
//             width: 300,
//             color: '#fff',
//             backgroundColor: '#5e92ab',
//             borderRadius: 0,
//             paddingLeft: 16,
//             borderColor: '#1c5a79',
//             borderWidth: 1,
//             fontSize: 16,
//             marginTop: 15
//         },
//         inputWith: {
//             height:20, 
//             width:'100%'
//         },
//         select_flag: {
//             width:80, 
//             height:20,
//             position: 'relative'        
//         },
//         disable_phone:{
//             position:'absolute',
//             opacity:0, 
//             zIndex:1, 
//             width: 43, 
//             height:20, 
//             backgroundColor:'white', 
//             top:10,
//             left:50
//         },
//         flag: {
//            color: '#000',
//            fontSize: 16 
//         },
//         phone_group: {
//             flexDirection: 'row',
//             width: 300,
//             color: '#fff',
//             backgroundColor: '#5e92ab',
//             borderRadius: 0,
//             paddingLeft: 16,
//             borderColor: '#1c5a79',
//             borderWidth: 1,
//             fontSize: 16,
//             paddingTop: 10,
//             paddingBottom: 10,
//             marginTop: 15
//         },
//         errorMessage: {
//             color: '#30d0a5',
//             marginTop: 5,        
//         },
//         button: {
//             marginTop: 15,
//             width: 300,
//             lineHeight:40,
//             height:40,
//             paddingTop: 10,
//             paddingBottom: 10,
//             borderRadius: 0,
//             backgroundColor: '#30d0a5'       
//         },
//         buttonText: {
//             fontSize: 16,
//             fontWeight: '700',
//             color: '#ffffff',
//             textAlign: 'center'
//         },
//         group_contain: {
//             marginTop: 40, 
//             paddingLeft: 15,
//             paddingRight: 15       
//         },
//         bg_gray: {
//             backgroundColor: '#fff',
//             paddingTop: 25,
//             paddingBottom: 25,
//             color: '#313131',
//             fontFamily: 'Muli'
//         },
//         bg_gray_img: {
//             width: 80, 
//             height: 60
//         },
//         item: {
//             lineHeight: 20,
//             fontSize: 14,
//             color: '#f4f4f4',
//             fontFamily: 'Muli'
//         },
//         animation_group: {
//             flex: 1,
//             height: 275,
//             marginTop:20,
//         }
//   })
// import Styles from '../assets/css/Styles';

// var styles = require('../assets/css/Styles');

const library = [{
        lang: 'Vietnamese',
        textUnderLogo: 'Chào mừng bạn đến với StiB',
        email: 'Email',
        phone: 'Số điện thoại',
        register: 'Đăng ký',
        emptyEmail: 'Vui lòng nhập Email',
        invalidEmail: 'Email không hợp lệ',
        existsEmail: 'Email đã được đăng ký',
        emptyPhone: 'Vui lòng nhập số điện thoại',
        existsPhone: 'Số điện thoại đã được đăng ký'
    },
    {
        lang: 'English',
        textUnderLogo: 'Welcome to StiB',
        email: 'Email',
        phone: 'Phone',
        register: 'Register',
        emptyEmailL: 'Email is empty',
        invalidEmail: 'Email is invalid',
        existsEmail: 'Email was registered',
        emptyPhone: 'Phone is empty',
        existsPhone: 'Phone was registered'
    }
]

export default class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            phone: '',
            noteEmail: null,
            notePhone: null,
            note: null,
            languageKit: {},
            isLoading: false,
            fontLoad: false,
            countryCode: null,
            dropdown:false       
        }
    }

    onPress = async () => {
        const {status} = await Permissions.askAsync(Permissions.CAMERA);
    };
   
    componentDidMount() {
        Font.loadAsync({
            'Muli': require('../assets/fonts/MuliRegular.ttf'),
            'MuliB': require('../assets/fonts/MuliBold.ttf'),
        }) 
        fetch('http://ip-api.com/json')
            .then(res => res.json())
            .then(body => {
                let country = body.country;
                if (country === 'Vietnam') {
                    this.setState({
                        languageKit: library[0],
                        countryCode: body.countryCode.toLowerCase(),
                        fontLoad: true
                    })
                } else {
                    this.setState({
                        languageKit: library[1],
                        countryCode: body.countryCode.toLowerCase(),
                        fontLoad: true
                    })
                }
            })
    }

    HandleCheckPhone = (phone) => {
        let s = this.state;
        s.phone = phone.replace(/[^\d]/g, '').replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
        this.setState(s);   
        console.log('test')
    }

    _onClick = async () => {
        const {status} = await Permissions.askAsync(Permissions.CAMERA);
        let data = {
            email: this.state.email,
            phonenumber: this.state.phone,
            lang: this.state.languageKit.lang
        }
        const { languageKit } = this.state;
        this.setState({
            isLoading: true
        })
        setTimeout(function() {
            fetch('https://stib2019.appspot.com/users', {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                .then(res => res.json())
                .then(body => {
                    let message = body.message;
                    if (message === 'email empty') {
                        this.setState({
                            noteEmail: languageKit.emptyEmail,
                            notePhone: null,
                            note: null,
                            isLoading: false
                        })
                    } else if (message === 'invalid email') {
                        this.setState({
                            noteEmail: languageKit.invalidEmail,
                            notePhone: null,
                            note: null,
                            isLoading: false

                        })
                    } else if (message === 'email exists') {
                        this.setState({
                            noteEmail: languageKit.existsEmail,
                            notePhone: null,
                            isLoading: false

                        })
                    } else if (message === 'phone empty') {
                        this.setState({
                            notePhone: languageKit.emptyPhone,
                            noteEmail: null,
                            isLoading: false

                        })
                    } else if (message === 'phone exists') {
                        this.setState({
                            notePhone: languageKit.existsPhone,
                            noteEmail: null,
                            note: null,
                            isLoading: false
                        })
                    } else {
                        this.setState({
                            notePhone: null,
                            noteEmail: null,
                            note: null,
                            isLoading: false,
                            email: '',
                            phone: '',
                        })
                        this.props.navigation.navigate('Thankyou', {
                            email: body.email,
                            lang: languageKit.lang,

                        });
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        }.bind(this), 3000)
    }

    _getValue = (e) => {
        console.log(e)
    }

    // HandleDisable = (e) => {
    //     console('1')
    // }

    render() {
        let lang_list= ['VN','US']
        
        const {languageKit, fontLoad, countryCode } = this.state;
        const lang = languageKit.lang;
        if(fontLoad && countryCode!=null){
            return (
                <ScrollView style={{backgroundColor: '#ffffff'}}>
                    {/*<Flag
                        style={{
                            position:'absolute',
                            top:35,
                            right: 63,
                        }}
                        code={countryCode.toUpperCase()}
                        size={32}
                    />*/}
                    <ModalDropdown 
                        style={{
                            position:'absolute',
                            top:41,
                            right: 38,
                        }}
                        dropdownStyle={{
                            height:'auto',
                            width:40,
                            position:'absolute',
                            right:1,
                        }}
                        dropdownTextStyle={{
                            fontSize:16,
                            padding:10,
                        }}
                        options={lang_list}
                        //defaultValue={countryCode.toUpperCase()}
                        onSelect={(value,index) => this.setState({
                            countryCode:lang_list[value],
                            languageKit: lang_list[value] === 'VN' ? library[0] : library[1],
                        })}
                        onDropdownWillShow={()=> this.setState({dropdown:true})}
                        onDropdownWillHide={()=> this.setState({dropdown:false})}
                        >
                        <View
                            style={{
                                flex:1,
                                flexDirection:'row',
                            }}>
                            <Text
                                style={{
                                    fontWeight:'700',
                                    fontSize:16,
                                    marginLeft:1,
                                }}
                            >{countryCode.toUpperCase()}</Text>
                            <Image 
                                source={this.state.dropdown === false ?
                                    require('../assets/ic_arrow_drop_right_black_18dp.png') :
                                    require('../assets/ic_arrow_drop_down_black_18dp.png')}
                                style={{
                                    marginTop:4,
                                    width: 15, 
                                    height: 15,
                                    marginLeft:-3,
                                }}/>
                        </View>
                    </ModalDropdown>
                   
                    
                    {/*Form*/}
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        flex: 1,
                        fontFamily: 'Muli',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginTop: 80,
                    }}>
                        
                        {/*<Text style={{
                            fontSize: 24,
                            color: '#000',
                            fontFamily: 'MuliB'
                        }}>{languageKit.register}</Text>*/}
                        
                        <View style={{
                            flexDirection: 'row',
                            width: 300,
                            color: '#fff',
                            borderRadius: 4,
                            paddingLeft: 16,
                            borderColor: '#cccccc',
                            borderWidth: 1,
                            fontSize: 16,
                            paddingTop: 10,
                            paddingBottom: 10,
                            marginTop: 10,
                        }}>
                            <TextInput 
                                style={{
                                    fontSize:16,
                                    lineHeight:16,
                                    color:'#313131',
                                    height:30, 
                                    width:'100%',
                                }}
                                underlineColorAndroid='rgba(0,0,0,0)' 
                                placeholder= {languageKit.email} 
                                placeholderTextColor='#999'
                                keyboardType='email-address' 
                                onSubmitEditing={()=>this.password.focus()}
                                name='email'
                                onChangeText={email => this.setState({email})}
                                value={this.state.email} 
                            />
                        </View>
                        <View style={{flex: 1}}>
                            <Text style={this.state.noteEmail !== null ? {color: '#108738', marginTop: 5} : {display: 'none'}}>
                                {this.state.noteEmail}
                            </Text>
                        </View>
                                                
                        <View style={{
                            flexDirection: 'row',
                            width: 300,
                            color: '#fff',
                            borderRadius: 4,
                            paddingLeft: 16,
                            borderColor: '#cccccc',
                            borderWidth: 1,
                            fontSize: 16,
                            paddingTop: 10,
                            paddingBottom: 10,
                            marginTop: 15,
                        }}>
                            <View style={{
                                position:'absolute',
                                opacity:0, 
                                zIndex:1, 
                                width: 43, 
                                height:30, 
                                backgroundColor:'white', 
                                top:10,
                                left:50
                            }}/>
                            <PhoneInput 
                                initialCountry= {this.state.countryCode}
                                textStyle = {{position:'relative',zIndex:0}}
                                ref='phone' 
                                style={{
                                    width:80, 
                                    height:30,
                                    position: 'relative'   
                                }}
                            />                           
                            <TextInput 
                                style={{
                                    fontSize:16,
                                    lineHeight:16,
                                    color:'#313131',
                                    height:30, 
                                    width:'100%'
                                }}
                                underlineColorAndroid='rgba(0,0,0,0)' 
                                placeholder= {languageKit.phone}
                                placeholderTextColor='#999'
                                name='phone'
                                keyboardType='phone-pad'
                                onChangeText={this.HandleCheckPhone}
                                ref={(input) => this.password = input}
                                value={this.state.phone} 
                            />                        
                        </View>

                        <View style={{flex: 1}}>
                            <Text style={this.state.notePhone !== null ? {color: '#108738', marginTop: 5} : {display: 'none'} }>{this.state.notePhone}</Text>
                        </View>
                        
                        <TouchableOpacity 
                            style={{
                                marginTop: 15,
                                width: 300,
                                borderRadius: 4,
                                borderColor: '#cccccc',
                                borderWidth: 1,
                            }}
                            onPress={this._onClick}
                        >
                            <Text style={{
                                fontSize: 16,
                                paddingTop:15,
                                paddingBottom:15,
                                fontWeight: '700',
                                color: '#313131',
                                textAlign: 'center'
                            }}>{languageKit.register}</Text>
                        </TouchableOpacity>
                        <Text
                            style={this.state.note !== null ? null : {display: 'none'} }
                        >
                            {this.state.note}
                        </Text>
                        <View style={this.state.isLoading ? styles.loading : {display: 'none'}}><ActivityIndicator size="large" color="#30d0a5" /></View>                        
                    </View>

                    {/*Animation group*/}                    
                    
                    <View>
                        <WebView
                            style={{
                                flex: 1,
                                height: 275,
                                marginTop:25,
                            }}
                            scrollEnabled={false}
                            scalesPageToFit={true}
                            source={{uri:lang !== 'Vietnamese'? 'https://stib.co/stib_version2/animationGradient_en.html':'https://stib.co/stib_version2/animationGradient_vn.html'}}                         
                        />                                          
                    </View>                    

                    {/*three col group*/}
                    <View style={{
                        backgroundColor: '#fff',
                        paddingTop: 25,
                        color: '#313131',
                        fontFamily: 'Muli',
                        paddingRight:90,        
                    }}>
                        <View style={{
                            flexDirection: 'row', 
                            alignItems: 'center',
                        }}>
                            {/*Register image*/}
                             
                            <Svg width="80" height="60">
                                <G>
                                    <Path fill="#AFAFAF" d="M40.1,2.3c15.2,0,27.6,12.4,27.6,27.6S55.3,57.5,40.1,57.5S12.5,45.1,12.5,29.9S24.9,2.3,40.1,2.3 M40.1,0
                                        C23.6,0,10.2,13.4,10.2,29.9s13.4,29.9,29.9,29.9S70,46.4,70,29.9S56.6,0,40.1,0L40.1,0z"/>
                                </G>
                                <G>
                                    <G>
                                        <G>
                                            <Circle fill="#898989" cx="27.1" cy="23.6" r="5"/>
                                        </G>
                                        <Path fill="#898989" d="M36.6,41.3c0-5.8-4.3-10.4-9.6-10.4s-9.6,4.7-9.6,10.4"/>
                                    </G>
                                    <Line fill="none" stroke="#898989" stroke-width="3" stroke-miterlimit="10" x1="51.7" y1="18.4" x2="61.2" y2="18.4"/>
                                    <Line fill="none" stroke="#898989" stroke-width="3" stroke-miterlimit="10" x1="40.6" y1="34.3" x2="61.2" y2="34.3"/>
                                    <Line fill="none" stroke="#898989" stroke-width="3" stroke-miterlimit="10" x1="40.6" y1="41.1" x2="61.2" y2="41.1"/>
                                    <Polygon fill="#6AC259" points="51.9,32.4 46.8,27.3 48.5,25.6 51.9,29 59.5,21.4 61.2,23.1  "/>
                                </G>
                            </Svg>

                            <View>
                                <Text style={{
                                    display: lang !== 'Vietnamese' ? 'flex' : 'none', 
                                    color:'#313131'
                                }}>Reserve Your Spot Now to get Exclusives and when we officially launch before the Summer of 2019!</Text>
                                
                                <Text style={{
                                    display: lang === 'Vietnamese' ? 'flex' : 'none', 
                                    color:'#313131',
                                    
                                }}>Đăng ký để nhận được nhiều thông tin kèm ưu đãi đặt biệt khi chúng tôi bắt đầu trước mùa hè 2019</Text>
                            </View>                            
                        </View>

                        <View style={{flexDirection: 'row', marginTop:10, alignItems: 'center'}} >
                            {/*no_commission image*/}

                            <Svg width="80" height="60">
                            <G>
                                <Path fill="#AFAFAF" d="M40.1,2.3c15.2,0,27.6,12.4,27.6,27.6S55.3,57.5,40.1,57.5S12.5,45.1,12.5,29.9S24.9,2.3,40.1,2.3 M40.1,0
                                    C23.6,0,10.2,13.4,10.2,29.9s13.4,29.9,29.9,29.9S70,46.4,70,29.9S56.6,0,40.1,0L40.1,0z"/>
                            </G>
                            <G>
                                <Path fill="#96A5D7" d="M55.4,20l-3.8-9.5c-0.4-1.1-1.6-1.6-2.7-1.2s-1.6,1.6-1.2,2.7l3,7.5l-5,1.7h-5.2l0,0h-5.3h-0.5
                                    c-0.7,0-1.3,0.4-1.7,0.9l-3.1,4.6L29.5,26c-0.5-1-1.8-1.4-2.8-0.9c-1,0.5-1.4,1.8-0.9,2.8l2,3.9c0.7,1.4,2.7,1.5,3.6,0.2l3.9-5.7
                                    v14.2h10.6V25.4c0.6-0.2,3.4-1,8.3-2.7C55.2,22.3,55.8,21.1,55.4,20z"/>
                                <Path fill="#8093CF" d="M55.4,20l-3.8-9.5c-0.4-1.1-1.6-1.6-2.7-1.2s-1.6,1.6-1.2,2.7l3,7.5l-5,1.7h-5.2v18.5l0,0.8h5.3V25.5
                                    c1-0.3,3.9-1.2,8.3-2.7C55.2,22.3,55.8,21.1,55.4,20z"/>
                                <G>
                                    <Path fill="#FFB69E" d="M51.6,10.5c-0.4-1.1-1.6-1.6-2.7-1.2s-1.6,1.6-1.2,2.7L51.6,10.5z"/>
                                    <Path fill="#FFB69E" d="M29.5,26c-0.5-1-1.8-1.4-2.8-0.9c-1,0.5-1.4,1.8-0.9,2.8L29.5,26z"/>
                                </G>
                                <G>
                                    <Polygon fill="#FFFFFF" points="48.1,13 52,11.6 51.6,10.5 47.7,12      "/>
                                    <Path fill="#FFFFFF" d="M25.7,27.8l0.5,0.9l3.7-1.9l-0.4-0.8L25.7,27.8L25.7,27.8z"/>
                                    <Polygon fill="#FFFFFF" points="40.5,21.2 37.4,21.2 40.5,29.3 43.6,21.2        "/>
                                </G>
                                <Path fill="#838387" d="M41.8,24l-0.7-1.2l0.6-1.1c0.1-0.2,0-0.5-0.3-0.5h-2c-0.2,0-0.4,0.2-0.3,0.5l0.6,1.1L39.1,24
                                    C39,24.2,39,24.4,39,24.6l0.4,1.9l1,2.8l1-2.8l0.4-1.9C42,24.4,42,24.1,41.8,24z"/>
                                <Path fill="#68686B" d="M41.5,21.2c0.2,0,0.4,0.2,0.3,0.5l-0.6,1.1l0.7,1.2c0.1,0.2,0.1,0.4,0.1,0.5l-0.4,1.9l-1.1,2.8v-8.1H41.5
                                    L41.5,21.2z"/>
                                <G>
                                    <Path fill="#545454" d="M57.4,49.4H23.6c-0.9,0-1.7-0.8-1.7-1.8V32.1c0-1,0.7-1.8,1.7-1.8h33.8c0.9,0,1.7,0.8,1.7,1.8v15.5
                                        C59.1,48.6,58.4,49.4,57.4,49.4z"/>
                                </G>
                                <G>
                                    <Path fill="#FFFFFF" d="M30.9,44c-0.9,0-1.5-0.5-1.5-0.9c0-0.2,0.2-0.6,0.5-0.6c0.3,0,0.5,0.4,1.1,0.5v-1.2c-0.6-0.3-1.4-0.5-1.4-1.4
                                        c0-0.9,0.7-1.4,1.4-1.4v-0.2c0-0.1,0.1-0.2,0.3-0.2c0.1,0,0.3,0.1,0.3,0.2V39c0.5,0,1.3,0.1,1.3,0.6c0,0.2-0.1,0.6-0.5,0.6
                                        c-0.2,0-0.4-0.2-0.8-0.3v1c0.6,0.2,1.4,0.6,1.4,1.5c0,0.9-0.6,1.4-1.4,1.5v0.2c0,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.3-0.1-0.3-0.2
                                        L30.9,44L30.9,44L30.9,44z M30.9,40.7v-0.9c-0.3,0-0.5,0.2-0.5,0.4C30.5,40.5,30.7,40.6,30.9,40.7z M31.4,42v1
                                        c0.2,0,0.5-0.2,0.5-0.5C31.8,42.3,31.6,42.2,31.4,42z"/>
                                    <G>
                                        <Path fill="#FF8B00" d="M37.2,38.8c0.8,0,1.4,0.3,1.8,0.8c0.5,0.6,0.8,1.7,0.8,3.2c0,1.5-0.3,2.6-0.8,3.2c-0.4,0.5-1,0.8-1.8,0.8
                                            c-0.8,0-1.4-0.3-1.9-0.9s-0.7-1.6-0.7-3.2c0-1.5,0.3-2.6,0.8-3.2C35.8,39.1,36.4,38.8,37.2,38.8z M37.2,40c-0.2,0-0.4,0-0.5,0.2
                                            c-0.1,0.1-0.3,0.3-0.3,0.6c-0.1,0.4-0.1,1-0.1,2s0,1.6,0.1,1.9c0.1,0.4,0.2,0.6,0.4,0.7c0.1,0.1,0.3,0.2,0.5,0.2s0.4,0,0.5-0.2
                                            s0.3-0.3,0.3-0.6c0.1-0.4,0.1-1,0.1-2s0-1.6-0.1-1.9c-0.1-0.4-0.2-0.6-0.4-0.7C37.6,40.1,37.4,40,37.2,40z"/>
                                    </G>
                                    <G>
                                        <Path fill="#6AC259" d="M42.5,45.4v-5.7h3.7v0.8h-2.7v1.5H46v0.8h-2.5v2.4L42.5,45.4L42.5,45.4z"/>
                                        <Path fill="#6AC259" d="M50.4,43.4h-2.8c0,0.4,0.1,0.7,0.3,1c0.2,0.2,0.5,0.3,0.9,0.3c0.5,0,0.9-0.1,1.2-0.4l0.3,0.7
                                            c-0.2,0.1-0.4,0.3-0.7,0.4c-0.3,0.1-0.5,0.1-0.9,0.1c-0.6,0-1.2-0.2-1.5-0.5s-0.5-0.9-0.5-1.5c0-0.4,0.1-0.8,0.2-1.1
                                            c0.2-0.3,0.4-0.5,0.7-0.7c0.3-0.2,0.6-0.3,1-0.3c0.5,0,1,0.2,1.3,0.5c0.3,0.4,0.5,0.9,0.5,1.4C50.4,43.3,50.4,43.4,50.4,43.4z
                                             M48,42.2c-0.2,0.1-0.3,0.4-0.3,0.7h1.9c0-0.3-0.1-0.5-0.3-0.7c-0.1-0.1-0.4-0.2-0.6-0.2C48.3,42,48.1,42.1,48,42.2z"/>
                                        <Path fill="#6AC259" d="M54.7,43.4h-2.8c0,0.4,0.1,0.7,0.3,1c0.2,0.2,0.5,0.3,0.9,0.3c0.5,0,0.9-0.1,1.2-0.4l0.3,0.7
                                            c-0.2,0.1-0.4,0.3-0.7,0.4c-0.3,0.1-0.5,0.1-0.9,0.1c-0.6,0-1.2-0.2-1.5-0.5c-0.4-0.4-0.5-0.9-0.5-1.5c0-0.4,0.1-0.8,0.2-1.1
                                            c0.2-0.3,0.4-0.5,0.7-0.7c0.3-0.2,0.6-0.3,1-0.3c0.5,0,1,0.2,1.3,0.5c0.3,0.4,0.5,0.9,0.5,1.4C54.7,43.3,54.7,43.4,54.7,43.4z
                                             M52.3,42.2c-0.2,0.1-0.3,0.4-0.3,0.7h1.9c0-0.3-0.1-0.5-0.3-0.7S53.2,42,52.9,42C52.7,42,52.5,42.1,52.3,42.2z"/>
                                    </G>
                                </G>
                                <Circle fill="#FFB69E" cx="40.5" cy="15.6" r="4.3"/>
                            </G>
                            <G>
                                <Path fill="#FFFFFF" d="M26,37.2v-3.8h-1.4v-0.8h3.7v0.8H27v3.8H26z"/>
                                <Path fill="#FFFFFF" d="M29.4,37.2h-0.9v-3.4h0.8v0.5c0.1-0.2,0.3-0.4,0.4-0.5c0.1-0.1,0.2-0.1,0.4-0.1c0.2,0,0.4,0,0.6,0.2l-0.3,0.8
                                    c-0.1-0.1-0.3-0.1-0.4-0.1c-0.1,0-0.2,0-0.3,0.1c-0.1,0-0.1,0.2-0.2,0.4c0,0.2-0.1,0.5-0.1,1.1C29.4,36.2,29.4,37.2,29.4,37.2z"/>
                                <Path fill="#FFFFFF" d="M31.7,34.9l-0.8-0.1c0.1-0.3,0.2-0.5,0.5-0.7c0.2-0.1,0.5-0.2,1-0.2c0.4,0,0.7,0,0.9,0.1
                                    c0.2,0.1,0.3,0.2,0.4,0.4c0.1,0.1,0.1,0.4,0.1,0.8v1c0,0.3,0,0.5,0,0.6c0,0.1,0.1,0.3,0.2,0.5h-0.9c0,0,0-0.1-0.1-0.3
                                    c0,0,0-0.1,0-0.1c-0.1,0.1-0.3,0.3-0.5,0.3c-0.2,0.1-0.4,0.1-0.5,0.1c-0.4,0-0.6-0.1-0.8-0.3c-0.2-0.2-0.3-0.4-0.3-0.7
                                    c0-0.2,0-0.4,0.1-0.5c0.1-0.1,0.2-0.3,0.4-0.3c0.2-0.1,0.4-0.1,0.7-0.2c0.4-0.1,0.7-0.1,0.9-0.2v-0.1c0-0.2,0-0.3-0.1-0.4
                                    c-0.1-0.1-0.2-0.1-0.5-0.1c-0.1,0-0.3,0-0.4,0.1C31.8,34.7,31.8,34.8,31.7,34.9z M32.9,35.7c-0.1,0-0.3,0.1-0.5,0.1
                                    c-0.2,0-0.4,0.1-0.5,0.1c-0.1,0.1-0.2,0.2-0.2,0.3s0,0.2,0.1,0.3c0.1,0.1,0.2,0.1,0.4,0.1c0.2,0,0.3,0,0.5-0.1
                                    c0.1-0.1,0.2-0.2,0.2-0.3c0-0.1,0-0.2,0-0.5C32.9,35.8,32.9,35.7,32.9,35.7z"/>
                                <Path fill="#FFFFFF" d="M37.7,37.2h-0.8v-0.5c-0.1,0.2-0.3,0.3-0.5,0.4c-0.2,0.1-0.4,0.1-0.5,0.1c-0.4,0-0.7-0.1-1-0.5
                                    c-0.3-0.3-0.4-0.7-0.4-1.3c0-0.5,0.1-1,0.4-1.3c0.3-0.3,0.6-0.5,1-0.5c0.4,0,0.7,0.1,1,0.5v-1.7h0.9L37.7,37.2L37.7,37.2z
                                     M35.3,35.5c0,0.4,0,0.6,0.1,0.8c0.1,0.2,0.4,0.4,0.6,0.4c0.2,0,0.4-0.1,0.5-0.3s0.2-0.5,0.2-0.8c0-0.4-0.1-0.7-0.2-0.8
                                    c-0.1-0.2-0.3-0.3-0.5-0.3s-0.4,0.1-0.5,0.3C35.4,34.9,35.3,35.2,35.3,35.5z"/>
                                <Path fill="#FFFFFF" d="M40.5,36.2l0.9,0.1c-0.1,0.3-0.3,0.6-0.5,0.7c-0.2,0.2-0.5,0.3-0.9,0.3c-0.6,0-1-0.2-1.3-0.6
                                    c-0.2-0.3-0.3-0.7-0.3-1.1c0-0.5,0.1-1,0.5-1.3c0.3-0.3,0.6-0.5,1.1-0.5c0.5,0,0.9,0.2,1.2,0.5c0.3,0.3,0.4,0.8,0.4,1.5h-2.2
                                    c0,0.3,0.1,0.5,0.2,0.6c0.1,0.1,0.3,0.2,0.5,0.2c0.1,0,0.3,0,0.4-0.1C40.4,36.5,40.4,36.3,40.5,36.2z M40.6,35.3
                                    c0-0.3-0.1-0.5-0.2-0.6c-0.1-0.1-0.3-0.2-0.5-0.2s-0.4,0.1-0.5,0.2c-0.1,0.1-0.2,0.3-0.2,0.6L40.6,35.3L40.6,35.3z"/>
                            </G>
                            </Svg>

                            <Text style={{display: lang !== 'Vietnamese' ? 'flex' : 'none', color:'#313131'}}>Tranzactionaza fara risc p2p / Fara comisioane cu contractele inteligente P2P.</Text>
                            <Text style={{display: lang === 'Vietnamese' ? 'flex' : 'none', color:'#313131'}}>Không rủi ro, không hoa hồng khi giao dịch sang tay với hợp đồng thông minh StiB</Text>
                        </View>

                        <View style={{flexDirection: 'row', marginTop:10, alignItems: 'center'}}>
                            {/*support image*/}
                            <Svg width="80" height="60">
                            <G>
                                <Path fill="#AFAFAF" d="M39.8,2.3c15.2,0,27.5,12.4,27.5,27.5S55,57.3,39.8,57.3S12.3,45,12.3,29.8S24.6,2.3,39.8,2.3 M39.8,0
                                    C23.3,0,10,13.3,10,29.8s13.3,29.8,29.8,29.8s29.8-13.3,29.8-29.8S56.3,0,39.8,0L39.8,0z"/>
                            </G>
                            <G>
                                <G>
                                    <Path fill="#666666" d="M41.4,16.8l0.8,0c0,0.2,0.1,0.4,0.3,0.5c0.1,0.1,0.3,0.1,0.6,0.1c0.3,0,0.5,0,0.6-0.1s0.2-0.2,0.2-0.3
                                        c0-0.1,0-0.1-0.1-0.2c0,0-0.1-0.1-0.3-0.1c-0.1,0-0.3-0.1-0.6-0.1c-0.4-0.1-0.7-0.2-0.9-0.3c-0.2-0.2-0.4-0.4-0.4-0.7
                                        c0-0.2,0-0.3,0.2-0.5c0.1-0.1,0.3-0.3,0.5-0.3c0.2-0.1,0.5-0.1,0.8-0.1c0.5,0,0.9,0.1,1.1,0.3s0.4,0.4,0.4,0.7l-0.8,0
                                        c0-0.2-0.1-0.3-0.2-0.4c-0.1-0.1-0.3-0.1-0.5-0.1s-0.4,0-0.5,0.1c-0.1,0-0.1,0.1-0.1,0.2s0,0.1,0.1,0.2c0.1,0.1,0.4,0.1,0.7,0.2
                                        c0.4,0.1,0.7,0.1,0.9,0.2s0.3,0.2,0.5,0.3c0.1,0.1,0.1,0.3,0.1,0.5c0,0.2,0,0.4-0.2,0.5s-0.3,0.3-0.5,0.4s-0.5,0.1-0.9,0.1
                                        c-0.5,0-0.9-0.1-1.1-0.3C41.6,17.5,41.4,17.2,41.4,16.8z"/>
                                    <Path fill="#666666" d="M47.1,17.9v-0.4c-0.1,0.1-0.2,0.2-0.4,0.3S46.3,18,46.2,18c-0.2,0-0.4,0-0.5-0.1c-0.1-0.1-0.3-0.2-0.3-0.3
                                        s-0.1-0.3-0.1-0.5v-1.5H46v1.1c0,0.4,0,0.5,0,0.6s0.1,0.1,0.1,0.2c0.1,0,0.2,0,0.3,0c0.1,0,0.2,0,0.4-0.1c0.1,0,0.2-0.1,0.2-0.2
                                        s0-0.3,0-0.6v-1h0.8v2.4L47.1,17.9L47.1,17.9z"/>
                                    <Path fill="#666666" d="M48.6,15.5h0.7v0.4c0.1-0.1,0.2-0.2,0.4-0.3c0.1-0.1,0.3-0.1,0.5-0.1c0.3,0,0.6,0.1,0.9,0.3s0.4,0.5,0.4,0.9
                                        c0,0.4-0.1,0.7-0.4,0.9s-0.5,0.3-0.9,0.3c-0.1,0-0.3,0-0.4-0.1s-0.3-0.1-0.4-0.3v1.2h-0.8V15.5z M49.3,16.7c0,0.3,0,0.5,0.2,0.6
                                        s0.3,0.2,0.5,0.2s0.3,0,0.5-0.2c0.1-0.1,0.2-0.3,0.2-0.6s0-0.5-0.2-0.5c-0.1-0.1-0.3-0.2-0.5-0.2s-0.3,0-0.5,0.2
                                        C49.4,16.3,49.3,16.4,49.3,16.7z"/>
                                    <Path fill="#666666" d="M51.9,15.5h0.7v0.4c0.1-0.1,0.2-0.2,0.4-0.3c0.1-0.1,0.3-0.1,0.5-0.1c0.3,0,0.6,0.1,0.9,0.3s0.4,0.5,0.4,0.9
                                        c0,0.4-0.1,0.7-0.4,0.9s-0.5,0.3-0.9,0.3c-0.1,0-0.3,0-0.4-0.1s-0.3-0.1-0.4-0.3v1.2h-0.8V15.5z M52.7,16.7c0,0.3,0,0.5,0.2,0.6
                                        s0.3,0.2,0.5,0.2s0.3,0,0.5-0.2c0.1-0.1,0.2-0.3,0.2-0.6s0-0.5-0.2-0.5c-0.1-0.1-0.3-0.2-0.5-0.2s-0.3,0-0.5,0.2
                                        C52.8,16.3,52.7,16.4,52.7,16.7z"/>
                                    <Path fill="#666666" d="M55.2,16.7c0-0.2,0-0.4,0.2-0.6c0.1-0.2,0.3-0.4,0.5-0.5s0.5-0.1,0.8-0.1c0.5,0,0.8,0.1,1,0.4
                                        c0.3,0.2,0.4,0.5,0.4,0.9s-0.1,0.7-0.4,0.9S57,18,56.6,18c-0.3,0-0.5,0-0.8-0.1c-0.2-0.1-0.4-0.2-0.5-0.5
                                        C55.2,17.2,55.2,16.9,55.2,16.7z M55.9,16.7c0,0.2,0,0.4,0.2,0.5s0.3,0.2,0.5,0.2s0.4,0,0.5-0.2c0.1-0.1,0.2-0.3,0.2-0.5
                                        s0-0.4-0.2-0.5S56.8,16,56.6,16s-0.4,0-0.5,0.2C56,16.3,55.9,16.5,55.9,16.7z"/>
                                    <Path fill="#666666" d="M59.4,17.9h-0.8v-2.4h0.7v0.4c0.1-0.2,0.2-0.3,0.3-0.3c0.1,0,0.2-0.1,0.3-0.1c0.2,0,0.3,0,0.5,0.1l-0.2,0.5
                                        c-0.1-0.1-0.2-0.1-0.4-0.1c-0.1,0-0.2,0-0.3,0.1c-0.1,0-0.1,0.1-0.2,0.3s0,0.4,0,0.8L59.4,17.9L59.4,17.9z"/>
                                    <Path fill="#666666" d="M62.1,15.5V16h-0.5v1c0,0.2,0,0.3,0,0.4s0,0,0,0.1c0,0,0.1,0,0.1,0c0.1,0,0.2,0,0.3,0l0,0.5
                                        C62,18,61.8,18,61.6,18c-0.1,0-0.3,0-0.4,0c-0.1,0-0.2-0.1-0.2-0.1s-0.1-0.1-0.1-0.3c0-0.1,0-0.2,0-0.5v-1h-0.4v-0.5h0.4v-0.5
                                        l0.8-0.4v0.9L62.1,15.5L62.1,15.5z"/>
                                </G>
                            </G>
                            <G>
                                <Path fill="#6AC259" d="M39.1,30.3v-4.2h1.3l0.8,2.8l0.7-2.8h1.3v4.2h-0.8V27l-0.8,3.3h-0.8L39.9,27v3.3H39.1z"/>
                                <Path fill="#6AC259" d="M45.9,30.3v-0.5c-0.1,0.2-0.3,0.3-0.5,0.4c-0.2,0.1-0.4,0.1-0.5,0.1c-0.2,0-0.4,0-0.5-0.1
                                    c-0.2-0.1-0.3-0.2-0.4-0.4c-0.1-0.2-0.1-0.4-0.1-0.7v-1.9h0.8v1.4c0,0.4,0,0.7,0,0.8s0.1,0.2,0.2,0.2c0.1,0,0.2,0.1,0.3,0.1
                                    c0.1,0,0.3,0,0.4-0.1c0.1-0.1,0.2-0.2,0.2-0.3s0-0.4,0-0.8v-1.3h0.8v3L45.9,30.3L45.9,30.3z"/>
                                <Path fill="#6AC259" d="M47.5,30.3v-4.2h0.8v4.2H47.5z"/>
                                <Path fill="#6AC259" d="M50.5,27.2v0.6h-0.5v1.2c0,0.2,0,0.4,0,0.4c0,0,0,0.1,0.1,0.1c0,0,0.1,0,0.1,0c0.1,0,0.2,0,0.3-0.1l0,0.6
                                    c-0.2,0.1-0.4,0.1-0.6,0.1c-0.1,0-0.3,0-0.4-0.1c-0.1,0-0.2-0.1-0.3-0.2c0-0.1-0.1-0.2-0.1-0.3c0-0.1,0-0.3,0-0.5v-1.3h-0.4v-0.6
                                    h0.4v-0.6l0.8-0.5v1C49.9,27.2,50.5,27.2,50.5,27.2z"/>
                                <Path fill="#6AC259" d="M51,26.8v-0.7h0.8v0.7H51z M51,30.3v-3h0.8v3H51z"/>
                            </G>
                            <Path fill="none" stroke="#6B6B6B" stroke-width="2" stroke-miterlimit="10" d="M45.6,24.2"/>
                            <G>
                                <G>
                                    <G>
                                        <G>
                                            <Path stroke="#666666" stroke-width="2" stroke-miterlimit="10" d="M22,46"/>
                                            <Path fill="none" stroke="#666666" stroke-width="2" stroke-miterlimit="10" d="M21.2,39.4L20.7,40c-1.3,2-1.2,4.6,0.2,6.5V48"/>
                                        </G>
                                    </G>
                                    <G>
                                        <G>
                                            <Path fill="none" stroke="#666666" stroke-width="2" stroke-miterlimit="10" d="M35.9,48v-1.5c1.4-1.9,1.5-4.5,0.2-6.5l-0.4-0.7"/>
                                        </G>
                                    </G>
                                    <G>
                                        <G>
                                            <G>
                                                <Path fill="#666666" d="M32.5,32.6h0.6c2.2,0,4-1.8,4-4v-6.3c0-4.7-3.8-8.6-8.6-8.6s-8.6,3.8-8.6,8.6v6.3c0,2.2,1.8,4,4,4h0.6"/>
                                                <Path fill="#666666" d="M33,31.4"/>
                                            </G>
                                        </G>
                                        <G>
                                            <G>
                                                <Path fill="none" stroke="#666666" stroke-width="2" stroke-miterlimit="10" d="M25.6,32.6c0,0.6-0.5,1.1-1.1,1.1H21c-2.2,0-4,1.8-4,4v6 M41.6,48l5.6-10.3h0.2c2.2,0,4-1.8,4-4
                                                    c0-0.3-0.3-0.6-0.6-0.6h-5.1c-2.2,0-3.9,1.7-4,3.8L39.9,40v-2.4c0-2.2-1.8-4-4-4h-2.1h-1.3c-0.6,0-1.1-0.5-1.1-1.1 M28.5,40.8
                                                    l-1.8-2.5h3.6L28.5,40.8z M32.9,34.9l-1.7,2.3h-5.3l-1.7-2.3"/>
                                            </G>
                                        </G>
                                    </G>
                                </G>
                                <Path fill="#FFFFFF" d="M22.9,22.8c0.5-0.2,10.4-4.5,10.4-4.5s1.1,8.4-0.7,11.4c-0.4,0.7-1.6,1.4-2.4,1.8c-1.5,0.6-3.7,0.3-5-0.7
                                    C23.5,29.3,22.9,22.8,22.9,22.8z"/>
                            </G>
                            <Path fill="none" stroke="#666666" stroke-miterlimit="10" d="M53.4,33.1"/>
                            <G>
                                <Path d="M64.9,24.6h-2.3c0-1.1-0.2-2.1-0.4-3.1h1.4c0.1,0,0.2-0.1,0.2-0.2s-0.1-0.2-0.2-0.2h-1.6c-0.2-0.7-0.5-1.3-0.9-1.8
                                    c-0.1-0.1-0.2-0.1-0.3,0s-0.1,0.2,0,0.3c0.3,0.5,0.6,0.9,0.8,1.6h-2.3v-2c0-0.1-0.1-0.2-0.2-0.2s-0.2,0.1-0.2,0.2v2h-2.3
                                    c0.2-0.6,0.5-1.1,0.8-1.6c0.1-0.1,0-0.2,0-0.3s-0.2,0-0.3,0c-0.4,0.5-0.6,1.1-0.9,1.8h-1.6c-0.1,0-0.2,0.1-0.2,0.2s0.1,0.2,0.2,0.2
                                    H56c-0.3,0.9-0.4,2-0.4,3.1h-2.3c-0.1,0-0.2,0.1-0.2,0.2s0.1,0.2,0.2,0.2h2.3c0,1.1,0.2,2.1,0.4,3.1h-1.4c-0.1,0-0.2,0.1-0.2,0.2
                                    c0,0.1,0.1,0.2,0.2,0.2h1.6c0.2,0.7,0.5,1.3,0.9,1.8c0,0,0.1,0.1,0.2,0.1c0,0,0.1,0,0.1,0c0.1-0.1,0.1-0.2,0-0.3
                                    c-0.3-0.5-0.6-0.9-0.8-1.6h2.3v2c0,0.1,0.1,0.2,0.2,0.2s0.2-0.1,0.2-0.2v-2h2.3c-0.2,0.6-0.5,1.1-0.8,1.6c-0.1,0.1,0,0.2,0,0.3
                                    c0,0,0.1,0,0.1,0c0.1,0,0.1,0,0.2-0.1c0.4-0.5,0.6-1.1,0.9-1.8h1.6c0.1,0,0.2-0.1,0.2-0.2s-0.1-0.2-0.2-0.2h-1.4
                                    c0.3-0.9,0.4-2,0.4-3.1h2.3c0.1,0,0.2-0.1,0.2-0.2C65.1,24.7,65,24.6,64.9,24.6L64.9,24.6z M61.8,21.5c0.3,0.9,0.4,2,0.5,3.1h-2.8
                                    v-3.1C59.4,21.5,61.8,21.5,61.8,21.5z M56.6,21.5h2.4v3.1h-2.8C56.1,23.5,56.3,22.4,56.6,21.5z M56.6,28.1c-0.3-0.9-0.4-2-0.5-3.1
                                    h2.8v3.1H56.6z M61.8,28.1h-2.4v-3.1h2.8C62.2,26.1,62.1,27.2,61.8,28.1z"/>
                                <Path d="M64,20c-1.3-1.3-3-2-4.8-2s-3.5,0.7-4.8,2c-1.3,1.3-2,3-2,4.8c0,1.4,0.4,2.6,1.1,3.7l-0.8,2.5c0,0.1,0,0.2,0,0.2
                                    s0.1,0.1,0.2,0l2.5-0.8c1.1,0.7,2.4,1.1,3.7,1.1c1.8,0,3.5-0.7,4.8-2c1.3-1.3,2-3,2-4.8C66,23,65.3,21.3,64,20z M59.2,31.2
                                    c-1.3,0-2.5-0.4-3.6-1.1c0,0-0.1,0-0.1,0c0,0,0,0-0.1,0l-2.2,0.7l0.7-2.2c0,0,0-0.1,0-0.2c-0.7-1.1-1.1-2.3-1.1-3.6
                                    c0-3.5,2.8-6.4,6.4-6.4s6.4,2.8,6.4,6.4C65.6,28.4,62.7,31.2,59.2,31.2z"/>
                            </G>
                            </Svg>
                            <Text style={{display: lang !== 'Vietnamese' ? 'flex' : 'none', paddingRight:10, color:'#313131'}}>Tranzactioneaza local,Trimite national si transfera international prin aplicatiile StiB!</Text>
                            <Text style={{display: lang === 'Vietnamese' ? 'flex' : 'none', paddingRight:10, color:'#313131'}}>Giao dịch với cộng đồng, chuyển toàn quốc gia, thanh toán quốc tế với ứng dụng StiB</Text>
                        </View>                                          
                    </View>

                    {/*Four group*/}
                    <View style={{
                        marginTop:25,
                        paddingTop: 40,
                        paddingBottom:40, 
                        paddingLeft: 15,
                        paddingRight: 15,
                        backgroundColor:'#108738'    
                    }}>
                        <Text style={{display: lang !== 'Vietnamese' ? 'flex' : 'none',color:'#ffffff',fontSize: 18, fontFamily:'MuliB',marginBottom:15,fontWeight:'700'}}>
                            Why trade with StiB's Smart Contracts?
                        </Text>
                        <Text style={{display: lang == 'Vietnamese' ? 'flex' : 'none',color:'#ffffff',fontSize: 18, fontFamily:'MuliB',marginBottom:15,fontWeight:'700'}}>
                            Vì sao nên giao dịch bằng hợp đồng thông minh StiB
                        </Text>
                        <FlatList style={{display: lang !== 'Vietnamese' ? 'flex' : 'none'}} 
                          data={[
                            {key: 'Simple and easy to use'},
                            {key: 'Profitable with more trades'},
                            {key: 'No Commissions/Free p2p Trading'},
                            {key: 'Human Supports with our real Staff'},
                            {key: 'Zero downtime with Clouds and IPFS/Swarm'},
                            {key: 'End to End Encryptions with the best Security'},
                            {key: 'Responsive Web + Mobiles apps (iOS & Android)'},
                            {key: 'Available in 200+ countries with 10 most popular languages'},
                            {key: 'Trade risks free confidently from your own wallet to/from StiB&#39;s Smart Contracts'},
                            {key: '3 in 1 with ENS: your own vanity Wallet, Contract and Personal domain (e.g: ben.StiBp2p.eth)'},                        
                          ]}
                          renderItem={({item}) => <Text style={{lineHeight: 20, fontSize: 14, color: '#f4f4f4', fontFamily: 'Muli'}}>{item.key}</Text>}
                        />
                        <FlatList style={{display: lang === 'Vietnamese' ? 'flex' : 'none'}}
                          data={[
                            {key: 'Đơn giản và dể sử dụng'},
                            {key: 'Giao dịch lớn, lời càng lớn'},
                            {key: 'Không phí hoa hồng, không phí giao dịch'},
                            {key: 'Hỗ trợ bởi nhân viên chính thức'},
                            {key: 'Máy chủ luôn hoạt động 100% với điện toán Clouds và IPFS/Swarm'},
                            {key: 'Mã hóa toàn bộ với siêu bảo mật'},
                            {key: 'Tương thích với web và phần mềm điện thoại (iOS + Android)'},
                            {key: 'Có mặt trên 200 quốc gia với 10 ngôn ngữ phổ biến'},
                            {key: 'Tự tin giao dịch không rủi ro với ví bạn đến / từ hợp đồng thông minh StiB'},
                            {key: '3 trong 1 với ENS: Ví riêng, hợp đồng và tên miền của bạn (Ví dụ: ben.StiBp2p.eth)'},                        
                          ]}
                          renderItem={({item}) => <Text style={{lineHeight: 20, fontSize: 14, color: '#f4f4f4', fontFamily: 'Muli'}}>{item.key}</Text>}
                        />                                                          
                    </View>                                      
                </ScrollView>
            );
        } else {
            return (                
                <View style={{flex: 1, backgroundColor: '#108738', position:'relative'}}>
                    <View style={{position:'absolute', top:'50%', left:'50%'}}><ActivityIndicator size="large" color="#30d0a5" /></View>  
                </View>
            ); 
        }
    }
}


 {/*Logo*/}
                    <View style={{flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',    
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginTop: 120,
                        marginBottom: 20, width:90, height:56}}>
                        <Svg width='90' height='56'>
                        <G>
                            <Polygon fill='#F46800' points="41.27,49.59 32.68,52.9 32.02,45.19 40.83,44.42     "/>
                            <Polygon fill='#F46800' points="37.74,7.95 28.82,8.72 28.38,5.19 37.19,2   "/>
                        </G>
                        <Rect x="60.53" y="15.79" transform="matrix(0.7071 -0.7071 0.7071 0.7071 4.4882 52.4418)" fill='#108738' width="10.03" height="10.03"/>
                        <G id="surface1_1_">
                            <Path fill='#FFFFFF' d="M68.69,20.73l-3.08,0.88l-3.08-0.88l3.08-4.3L68.69,20.73z"/>
                            <Path fill='#FFFFFF' d="M68.8,21.28l-3.31,3.53l-3.19-3.42l3.19,1.54L68.8,21.28z"/>
                            <Path fill='#FFFFFF' d="M65.49,24.81"/>
                            <Path fill='#FFFFFF' d="M68.69,20.73l-3.08,0.88v-5.18L68.69,20.73z"/>
                        </G>
                        <Path fill='#108738' d="M2.6,54l2.42-3.97c0,0,16.08-2.64,25.89-6.83c4.74-1.98,9.69-5.18,8.15-11.02c-1.98-7.6-11.35-2.53-11.35-2.53
                            s7.6-4.08,10.36-4.85c3.42-0.88,11.9-1.21,11.46,8.04C48.76,52.46,2.6,54,2.6,54z"/>
                        <Path fill='#F46800' d="M58.79,3.32l-0.66,3.08c0,0-16.08,2.86-25.89,7.16c-4.74,2.09-12.34,5.73-11.9,11.02
                            c0.55,5.29,6.83,4.96,6.83,4.96s-3.31,1.32-8.04,0.88c-2.53-0.33-6.61-1.1-7.27-5.73C9.21,5.19,58.79,3.32,58.79,3.32z"/>
                        <Path d="M57.35,33.29v5.18c0,0.77,0.22,1.32,0.55,1.65c0.33,0.33,0.88,0.55,1.54,0.55c0.33,0,0.77-0.11,1.32-0.22v3.08
                            c-0.66,0.22-1.43,0.33-2.31,0.33c-1.65,0-2.86-0.44-3.75-1.43c-0.88-0.88-1.32-2.2-1.32-3.97v-5.29h-2.53V30.2h2.53v-3.08l3.97-1.32
                            v4.41h3.42v2.97L57.35,33.29L57.35,33.29z"/>
                        <Path d="M63.56,43.64V30.31h3.97v13.33H63.56z"/>
                        <Path fill='#108738' d="M85.89,35.6c0.55,0.77,0.88,1.76,0.88,2.86c0,1.54-0.55,2.86-1.76,3.75c-1.21,0.88-2.75,1.43-4.74,1.43h-8.92
                            V24.92h8.59c1.98,0,3.53,0.44,4.63,1.32c1.1,0.88,1.65,2.09,1.65,3.53c0,0.99-0.22,1.87-0.77,2.53c-0.55,0.77-1.21,1.32-2.09,1.65
                            C84.46,34.28,85.23,34.83,85.89,35.6z M75.31,32.52h3.97c1.1,0,1.87-0.22,2.31-0.55c0.44-0.33,0.77-0.88,0.77-1.65
                            c0-0.77-0.22-1.32-0.77-1.76C81.04,28.22,80.27,28,79.28,28h-3.97V32.52z M82.14,39.9c0.55-0.33,0.77-0.99,0.77-1.76
                            c0-0.88-0.22-1.43-0.77-1.87c-0.55-0.33-1.32-0.55-2.42-0.55h-4.41v4.74h4.41C80.82,40.45,81.7,40.23,82.14,39.9z"/>
                        </Svg>                     
                    </View>