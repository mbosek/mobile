export const LOAD_SINGLE_PROPERTY_REQUEST = "LOAD_SINGLE_PROPERTY_REQUEST";
export const LOAD_SINGLE_PROPERTY_SUCCESS = "LOAD_SINGLE_PROPERTY_SUCCESS";

export const loadPropertyRequest = (payload) => (
    { type: LOAD_SINGLE_PROPERTY_REQUEST, payload }
);

export const loadPropertySuccess = (payload) => (
    { type: LOAD_SINGLE_PROPERTY_SUCCESS, payload }
);
