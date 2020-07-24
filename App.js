

import React from 'react';
import {
  AsyncStorage,
  TouchableOpacity,
  Text
} from 'react-native';
import Todos from './todos'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Add from './addScree'

const Stack = createStackNavigator()

export default class App extends React.Component {
  render() {
    return (
      <Todos/>
    )
  }
}

