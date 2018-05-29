import { call, put } from 'redux-saga/effects'
import { PropertyApiService } from '../../../services/PropertyService';
import { loadPropertySuccess } from './actions';
import ApiRequestService from '../../../services/ApiRequestService';
import {DeserializeService} from '../../../services/DeserializerService';

export function* propertiesSaga(action) {
    try {
        const URL = yield call(PropertyApiService.dataFilter, action.payload);
        const res = yield call(ApiRequestService, URL);
        const deserializedData = yield call(DeserializeService.simple, res);
        yield put(loadPropertySuccess(deserializedData));
    } catch (err) {
        console.log(err)
    }
}
