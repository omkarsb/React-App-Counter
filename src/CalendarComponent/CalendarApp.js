import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import styles from './CalendarApp.style.js';
import { Calendar } from 'react-native-calendars';


class CalendarApp extends React.Component {
    static navigationOptions = {
      title: 'Calendar',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View style={styles.container}>
           <Calendar
          current={'2012-03-01'}
          // minDate={'2012-05-10'}
          // maxDate={'2012-05-30'}
          // onDayPress={day => {
          //   console.log('selected day', day);
          // }}
          // monthFormat={'yyyy MM'}
          // onMonthChange={month => {
          //   console.log('month changed', month);
          // }}
          // hideArrows={true}
          // hideExtraDays={true}
          // disableMonthChange={true}
          // firstDay={1}
        />
        </View>
      );
    }
  }

  export default CalendarApp

