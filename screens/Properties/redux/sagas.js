import { call, put } from 'redux-saga/effects'
import { PropertyApiService } from '../../../services/PropertyService';
import { loadPropertySuccess } from './actions';
import ApiRequestService from '../../../services/ApiRequestService';
import {DeserializeService} from '../../../services/DeserializerService';

export function* propertiesSaga(action) {
    try {
        const URL = yield call(PropertyApiService.dataFilter, action.payload);
        console.log(URL)
        const res = yield call(ApiRequestService, URL);
        // TODO: problem with links after deserialization
        const deserializedRelationsData = yield call(DeserializeService.relationships, res);
        yield put(loadPropertySuccess(deserializedRelationsData));
    } catch (err) {
        console.log(err)
    }
}
