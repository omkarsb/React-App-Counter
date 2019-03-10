import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import styles from './HomeScreenApp.style.js';
import { Icon } from 'react-native-elements'

class HomeScreenApp extends React.Component {
    static navigationOptions = {
      title: 'Welcome',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View style={styles.container}>
            <Image source={require('../../img/footerlogo.png')}/>            
            <View>
                <Text style={styles.textPara}>Check Them Out</Text>
                <Icon style={styles.icon}  color='#1245a8' name='rowing'/>            
                <Icon style={styles.icon} color='#1245a8' type='font-awesome' name='long-arrow-down' />            
            </View>
        </View>
      );
    }
  }

  export default HomeScreenApp