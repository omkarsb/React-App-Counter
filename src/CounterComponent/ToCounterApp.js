import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import CounterApp from './CounterApp'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

const initialState = {
  counter : 0
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'INCREASE_COUNTER':
    return{counter: state.counter + 1}
    case 'DECREASE_COUNTER':
    return{counter: state.counter - 1}
  }
  return state
}

const store = createStore(reducer)

class ToCounterApp extends React.Component {
    static navigationOptions = {
        title: 'Counter',
      };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Provider store={store}>
         <CounterApp />
      </Provider>
    );
  }
}

export default ToCounterApp

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
