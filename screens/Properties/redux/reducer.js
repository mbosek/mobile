import { LOAD_PROPERTY_REQUEST, LOAD_PROPERTY_SUCCESS } from './actions';

const initialState = {
    data: [],
};

export const propertiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_PROPERTY_REQUEST:
        case LOAD_PROPERTY_SUCCESS:
            return { ...state, data: action.payload }
        default:
            return state;
    }
};
