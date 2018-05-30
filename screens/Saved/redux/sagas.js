import { call, put } from 'redux-saga/effects'
import { loadPropertySuccess } from './actions';

export function* propertySaga(action) {

    const API_KEY = '8940391-bfea17ef909adc801ff40a6ee';

    try {
        const res = yield call(fetch, `https://swapi.co/api/people/${action.payload}`);
        const json = yield call([res, res.json]);

        const URL = `https://pixabay.com/api/?key=8940391-bfea17ef909adc801ff40a6ee&q=stormtrooper`;
        const imageResponse = yield call(fetch, URL);
        const images = yield call([imageResponse, imageResponse.json]);
        yield put(loadPropertySuccess({ ...json, images}));
    } catch (err) {
        console.log(err)
    }
}
