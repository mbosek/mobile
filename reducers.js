import { combineReducers } from 'redux';
import { propertiesReducer } from './screens/Properties/redux/reducer';
import { propertyReducer } from './screens/Property/redux/reducer';
import { savePropertiesReducer } from './screens/Saved/redux/reducer';

export default combineReducers({
    savedProperties: savePropertiesReducer,
    properties: propertiesReducer,
    property: propertyReducer,
});