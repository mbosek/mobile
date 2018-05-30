import { call, put } from 'redux-saga/effects'
import { loadPropertySuccess } from './actions';

export function* saveSaga(action) {
    try {
        yield put(loadPropertySuccess({ ...json, images}));
    } catch (err) {
        console.log(err)
    }
}
