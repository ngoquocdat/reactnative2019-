import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, Modal,TouchableHighlight } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import {Button, Icon} from 'react-native-elements'
import Popup from './Popup'
import SlideDown from './SlideDown'

var styles = require('./Styles');
export default class CareersScreen extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={{ 
        flex: 1, 
        alignItems: "left",
      }}>
      <View style={{
        padding:20,
      }}>
        <View>
          <Text  style={styles.careers_title}>Careers</Text>
        </View>

        <View>
          <Text style={styles.black_title}>
          VALUES
          </Text>
        </View>
        
        <View>
          <Text style={styles.orange_title}>
          Ambition
          </Text>
        </View>

        <View>
          <Text style={styles.paragraph_0}>
          Aiming at a potiential cryptocurrency market, which will bring a lot of economic benefics.
          </Text>
        </View>

        <View>
          <Text style={styles.orange_title}>
          Teamwork
          </Text>
        </View>

        <View>
          <Text style={styles.paragraph_0}>
          Thinking as a team, working as a team. We put our individual egos aside in the best interests of the team.
          </Text>
        </View>

        <View>
          <Text style={styles.orange_title}>
          Performance
          </Text>
        </View>

        <View>
          <Text style={styles.paragraph_0}>
          We think fast, work fast and effectively. Being accountable and reconigsed for our work.
          </Text>
        </View>

        <View>
          <Text style={styles.orange_title}>
          Attitude
          </Text>
        </View>

        <View>
          <Text style={styles.paragraph_0}>
          You have a passion, enthusiasm and creativity with your work to overcome tough challenges.
          </Text>
        </View>

        <View>
          <Text style={styles.orange_title}>
          Workplace environment
          </Text>
        </View>

        <View>
          <Text style={styles.paragraph_0}>
          We have a creative, flexible and convinient working condition. We support employee's health and metal conscientiously.
          </Text>
        </View>

        <View>
          <Text style={styles.orange_title}>
          Community Oriented
          </Text>
        </View>

        <View>
          <Text style={styles.paragraph_0}>
          Making the globle and comprehensive trading. Satisfying custumer individual needs and wants.
          </Text>
        </View>
        </View>
        <ScrollView style={styles.grey_block}>
          <View style={styles.inside_block}>
            <View>
              <Text style={styles.white_title}>
                Apply Today and Join the Team
              </Text>
            </View>

            <View>
              <Text style={styles.paragraph_1}>
              Attractive salary
              </Text>
            </View>

            <View>
              <Text style={styles.paragraph_1}>
              13 months of salary
              </Text>
            </View>

            <View>
              <Text style={styles.paragraph_1}>
              15 days paid leave per year
              </Text>
            </View>

            <View>
              <Text style={styles.paragraph_1}>
              Healthcare insurance
              </Text>
            </View>

            <View>
              <Text style={styles.paragraph_1}>
              Professional responsibility
              </Text>
            </View>

            <View>
              <Text style={styles.paragraph_1}>
              Fun working start-up environment
              </Text>
            </View>

            <View>
              <Text style={styles.paragraph_1}>
              Flexible working time
              </Text>
            </View>

            <View>
              <Text style={styles.paragraph_1}>
              Free coffee and snack
              </Text>
            </View>

            <View>
              <Text style={styles.paragraph_1}>
              Work with Tech Dev team
              </Text>
            </View>

            <SlideDown/>

            <Popup/>

          </View>

        </ScrollView>

        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />


      </ScrollView>
    );
  }
}