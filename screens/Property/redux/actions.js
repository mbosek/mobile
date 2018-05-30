export const LOAD_SINGLE_PROPERTY_REQUEST = "LOAD_SINGLE_PROPERTY_REQUEST";
export const LOAD_SINGLE_PROPERTY_SUCCESS = "LOAD_SINGLE_PROPERTY_SUCCESS";
export const SAVE_PROPERTY = "SAVE_PROPERTY";

export const loadPropertyRequest = (payload) => (
    { type: LOAD_SINGLE_PROPERTY_REQUEST, payload }
);

export const loadPropertySuccess = (payload) => (
    { type: LOAD_SINGLE_PROPERTY_SUCCESS, payload }
);

export const saveProperty = (payload) => (
    { type: SAVE_PROPERTY, payload }
);
