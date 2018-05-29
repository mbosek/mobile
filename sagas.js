
import { all, takeEvery, takeLatest } from 'redux-saga/effects'

import { LOAD_PROPERTY_REQUEST } from './screens/Properties/redux/actions';
import { propertiesSaga } from './screens/Properties/redux/sagas';

import { LOAD_SINGLE_PROPERTY_REQUEST } from './screens/Property/redux/actions';
import { propertySaga } from './screens/Property/redux/sagas';

export default function* rootSaga() {
    yield all([
        takeLatest(LOAD_PROPERTY_REQUEST, propertiesSaga),
        takeLatest(LOAD_SINGLE_PROPERTY_REQUEST, propertySaga),
    ]);
}
