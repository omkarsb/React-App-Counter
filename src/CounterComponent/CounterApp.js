import React from 'react';
import {Text, View, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux'
import styles from './CounterApp.style.js'

class CounterApp extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'column', width: 200, justifyContent: 'space-around', alignItems:'center'}}>
          <TouchableOpacity onPress={()=>this.props.increaseCounter()}>
            <Text style={styles.textbox}>Increase</Text>
          </TouchableOpacity>
          <Text style={styles.counter}>{this.props.counter}</Text>
          <TouchableOpacity onPress={()=>this.props.decreaseCounter()}>
            <Text style={styles.textbox}>Decrease</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state){
    return{
        counter: state.counter
    }
}

function mapDispatchToProps(dispatch){
    return{
        increaseCounter : () =>  dispatch({type:'INCREASE_COUNTER'}),
        decreaseCounter : () =>  dispatch({type:'DECREASE_COUNTER'}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp)
