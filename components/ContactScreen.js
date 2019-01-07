import React from 'react';
import { StyleSheet, Text, View, Button, FlatList,ScrollView } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
var styles = require('./Styles');
export default class ContactScreen extends React.Component {

  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={styles.mainpage_contact}>
        <View>
          <Text style={styles.title}>
          Contact
          </Text>
        </View>

        <View style={styles.paragraph}>
          <Text>
          We are based out of Boston, USA and our development team is based in Saigon, Vietnam. Our exchange will serve everyone around the world with beautiful UI, awesome UX plus it's very secured with Multi-Sigs and amazing features that you fall in love instantly.
          </Text>
        </View>

        <View style={styles.paragraph}>
          <Text>
          We at Stib Labs have a simple mission to create cool and awesome applications on top of the Blockchain protocol. And we believe this is it, it's one of the killer applications that everyone has been waiting for. We are building the best and the most innovative runway so that Bitcoin can take off to reach mass adoption around in the world. We are targeting consumers, casual traders, day-traders, and investors of all kinds. Of course when we talk about Peer to Peer (P2P) then the power is on your hands; however we are going one step further, it's Peers to Peers (P2Ps). When everyone is working together harmoniously it's even more powerful, especially in the world of finance and particularly the Blockchain either as a payment system or a global currency. Jobs (Global) - Do you think you'd be a great addition to StiB team? Send in your resume here, along with the cover letter about how you would contribute to the team.
          </Text>
        </View>

        <View>
          <FlatList
            style={styles.paragraph}
            data={[
              {key: '1. ', title:'For Supports, please email Support AT StiB.co'}, 
              {key: '2. ', title:'For Investments & Partnerships, please email Ben AT StiB.co'},
              {key: '3. ', title:'For Technical, please email Alin AT StiB.co'},
              {key: '4. ',title:'Give us a call / text: 617 539 8361'},
              {key: '5. ',title:'Trading OTC (Over The Counter) please contact Ben.'}
              ]}
            renderItem={({item}) => <Text>{item.key}{item.title}</Text>}
          />
          <Text style={styles.paragraph}>
          You can connect with our Founder/CEO, Ben Le on LinkedIn
          Or Chat on: Telegram/Whatapps @ BenATStiB
          </Text>
        </View>
        <View style={{marginBottom:20,}}></View>
      </ScrollView>
    );
  }
}