import { SAVE_PROPERTY } from './actions';

const initialState = {
    data: [],
};

export const savePropertiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_PROPERTY:
            return { ...state, data: [...state.data, action.payload] }
        default:
            return state;
    }
};
