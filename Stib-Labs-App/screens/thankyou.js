import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, ActivityIndicator } from 'react-native';
// import Image from 'react-native-remote-svg';
import { Font, Permissions, Svg } from 'expo';
const { Circle, Rect, Path, Polygon, Polyline, Line, G } = Svg;

const library = [
    {
        lang: 'Vietnamese', 
        thankyou: 'Đăng ký thành công!', 
        text: 'Chúc mừng! Bạn đã đăng ký thành công 1 tài khoản tại Stib.co'
    },
    {
        lang: 'English',
        thankyou: 'Register, success!',
        text: 'You just created an account at StiB.co'
    }
]

// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: '#1c5b7a',
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
//     group_logo:{
//         flexDirection: 'row',
//         alignItems: 'center',    
//         marginLeft: 'auto',
//         marginRight: 'auto',
//         marginTop: 35,        
//     },
//     group_contain: {
//         marginTop: 40, 
//         paddingLeft: 15,
//         paddingRight: 15       
//     },
//     group_contain2: {
//         paddingLeft: 15,
//         paddingRight: 15,
//         alignItems: 'center', 
//         marginTop:15,   
//         marginLeft: 'auto',
//         marginRight: 'auto',  
//     },
//     text: {
//         color: '#30d0a5',
//         fontSize: 18,
//         fontFamily: 'Muli'
//     }
// });

export default class Thankyou extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            languageKit: {},
            fontLoad: false            
        }
    }

    componentDidMount(){
        Font.loadAsync({
            'Muli': require('../assets/fonts/MuliRegular.ttf'),
            'MuliB': require('../assets/fonts/MuliBold.ttf')
        })
        const { navigation } = this.props;
        const lang = navigation.getParam('lang');
        console.log(lang);
        if(lang === 'Vietnamese'){
            this.setState({
                languageKit: library[0],
                fontLoad: true
            })
        } else {
            this.setState({
                languageKit: library[1],
                fontLoad: true
            })
        }
    }

    render() {
        const { navigation } = this.props;
        const email = navigation.getParam('email');
        const {languageKit, fontLoad} = this.state;
        if(fontLoad){
            return (
                <View style={{
                    backgroundColor: '#ffffff',
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',    
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginTop: 35,  
                    }}>
                        {/*logo image*/}
                        
                        <Svg width="90" height="56">
                        <G>
                            <Polygon fill="#F46800" points="41.7,47 33.9,50 33.3,43 41.3,42.3  "/>
                            <Polygon fill="#F46800" points="38.5,9.2 30.4,9.9 30,6.7 38,3.8    "/>
                        </G>
                        <Rect x="59.1" y="16.3" transform="matrix(0.7071 0.7071 -0.7071 0.7071 33.4118 -38.9033)" fill="#108738" width="9.1" height="9.1"/>
                        <G id="surface1_1_">
                            <Path fill="#FFFFFF" d="M66.4,20.8l-2.8,0.8l-2.8-0.8l2.8-3.9L66.4,20.8z"/>
                            <Path fill="#FFFFFF" d="M66.5,21.3l-3,3.2l-2.9-3.1l2.9,1.4L66.5,21.3z"/>
                            <Path fill="#FFFFFF" d="M63.5,24.5"/>
                            <Path fill="#FFFFFF" d="M66.4,20.8l-2.8,0.8v-4.7L66.4,20.8z"/>
                        </G>
                        <Path fill="#108738" d="M6.6,51l2.2-3.6c0,0,14.6-2.4,23.5-6.2c4.3-1.8,8.8-4.7,7.4-10c-1.8-6.9-10.3-2.3-10.3-2.3s6.9-3.7,9.4-4.4
                            c3.1-0.8,10.8-1.1,10.4,7.3C48.5,49.6,6.6,51,6.6,51z"/>
                        <Path fill="#F46800" d="M57.6,5L57,7.8c0,0-14.6,2.6-23.5,6.5c-4.3,1.9-11.2,5.2-10.8,10c0.5,4.8,6.2,4.5,6.2,4.5s-3,1.2-7.3,0.8
                            c-2.3-0.3-6-1-6.6-5.2C12.6,6.7,57.6,5,57.6,5z"/>
                        <Path d="M56.3,32.2v4.7c0,0.7,0.2,1.2,0.5,1.5c0.3,0.3,0.8,0.5,1.4,0.5c0.3,0,0.7-0.1,1.2-0.2v2.8c-0.6,0.2-1.3,0.3-2.1,0.3
                            c-1.5,0-2.6-0.4-3.4-1.3c-0.8-0.8-1.2-2-1.2-3.6v-4.8h-2.3v-2.7h2.3v-2.8l3.6-1.2v4h3.1v2.7H56.3z"/>
                        <Path d="M62.2,41.6V29.5h3.6v12.1H62.2z"/>
                        <Path fill="#108738" d="M82.2,34.3c0.5,0.7,0.8,1.6,0.8,2.6c0,1.4-0.5,2.6-1.6,3.4c-1.1,0.8-2.5,1.3-4.3,1.3H69v-17h7.8
                            c1.8,0,3.2,0.4,4.2,1.2c1,0.8,1.5,1.9,1.5,3.2c0,0.9-0.2,1.7-0.7,2.3c-0.5,0.7-1.1,1.2-1.9,1.5C80.9,33.1,81.6,33.6,82.2,34.3z
                             M72.6,31.5h3.6c1,0,1.7-0.2,2.1-0.5s0.7-0.8,0.7-1.5c0-0.7-0.2-1.2-0.7-1.6c-0.5-0.3-1.2-0.5-2.1-0.5h-3.6V31.5z M78.8,38.2
                            c0.5-0.3,0.7-0.9,0.7-1.6c0-0.8-0.2-1.3-0.7-1.7c-0.5-0.3-1.2-0.5-2.2-0.5h-4v4.3h4C77.6,38.7,78.4,38.5,78.8,38.2z"/>
                        </Svg>       
                    </View>
                    
                    <View style={{
                        marginTop: 40, 
                        paddingLeft: 15,
                        paddingRight: 15    
                    }}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{fontSize: 24, marginLeft:5, color:'#313131', fontFamily: 'MuliB'}}>
                                {languageKit.thankyou}
                            </Text>
                        </View>                    
                        {/*<Text style={{fontSize: 24, color: '#fff'}}>{email}</Text>*/}
                    </View>
                    
                    <View style={{
                        paddingLeft: 15,
                        paddingRight: 15,
                        alignItems: 'center', 
                        marginTop:15,   
                        marginLeft: 'auto',
                        marginRight: 'auto',  
                    }}>
                        <Text style={{color: '#108738', fontSize: 18, fontFamily: 'Muli'}}>{languageKit.text}</Text>
                    </View>                
                    
                </View>
            );
        }
        else{
            return (
                <View style={{flex: 1, backgroundColor: '#108738', position:'relative'}}>
                    <View style={{position:'absolute', top:'50%', left:'50%'}}><ActivityIndicator size="large" color="#30d0a5" /></View>  
                </View>
            )
        }
    }
}

