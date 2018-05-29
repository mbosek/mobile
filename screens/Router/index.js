import React, { Component } from 'react';
import { createStackNavigator, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';
import Properties from './screens/Properties';
import Property from './screens/Property';
import Home from './screens/Home'

export default createSwitchNavigator({
    Properties: Properties,
});
