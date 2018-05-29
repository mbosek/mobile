import { combineReducers } from 'redux';
import { propertiesReducer } from './screens/Properties/redux/reducer';
import { propertyReducer } from './screens/Property/redux/reducer';

export default combineReducers({
    properties: propertiesReducer,
    property: propertyReducer,
});