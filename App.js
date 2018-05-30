import React from 'react';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import mySaga from './sagas';
import PropertiesScreen from './screens/Properties';
import PropertyScreen from './screens/Property';
import HomeScreen from './screens/Home'
import SavedScreen from './screens/Saved'
import MyAccountScreen from './screens/MyAccount'
import FiltersScreen from './screens/Filters'
import MapScreen from './screens/Map'
import Icon from 'react-native-vector-icons/FontAwesome';
// import { pushNotifications } from './services/pushNotifications';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);



const BottomNavigator = createBottomTabNavigator({
  Properties: { screen: PropertiesScreen },
  Saved: { screen: SavedScreen },
  MyAccount: { screen: MyAccountScreen },
}, {
    tabBarOptions: {
      activeTintColor: '#e20031',
      inactiveTintColor: 'gray',
    },
    navigationOptions: {
      header: true
    },
    initialRouteName: 'Properties',
  });

const FiltersStack = createStackNavigator({
  Filters: { screen: FiltersScreen },
});

const PropertyStack = createStackNavigator({
  Property: { screen: PropertyScreen },
  Map: { screen: MapScreen },
});

const PropertiesStack = createStackNavigator({
  Properties: { screen: BottomNavigator },
  Property: { screen: PropertyStack },
  Filters: FiltersScreen,
}, {
    navigationOptions: {
      header: null
    }
  });

const RootStack = createStackNavigator({
  Home: { screen: HomeScreen },
  Properties: { screen: PropertiesStack },
}, {
    navigationOptions: {
      header: null
    }
  });
// pushNotifications.configure();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}
