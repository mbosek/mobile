import React from 'react';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import mySaga from './sagas';
import Properties from './screens/Properties';
import Property from './screens/Property';
import Home from './screens/Home'
import Icon from 'react-native-vector-icons/FontAwesome';
// import { pushNotifications } from './services/pushNotifications';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);

const Router = createBottomTabNavigator({
  Home: { screen: Home },
  Properties: { screen: Properties },
  Property: { screen: Property },
}, {
    tabBarOptions: {
      activeTintColor: '#e20031',
      inactiveTintColor: 'gray',
    },
    initialRouteName: 'Home',
  });

// pushNotifications.configure();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
