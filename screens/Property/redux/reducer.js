import { LOAD_SINGLE_PROPERTY_REQUEST, LOAD_SINGLE_PROPERTY_SUCCESS } from './actions';

const initialState = {
    data: [],
};

export const propertyReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_SINGLE_PROPERTY_REQUEST:
        case LOAD_SINGLE_PROPERTY_SUCCESS:
            return { ...state, data: action.payload }
        default:
            return state;
    }
};
