export const LOAD_PROPERTY_REQUEST = "LOAD_PROPERTY_REQUEST";
export const LOAD_PROPERTY_SUCCESS = "LOAD_PROPERTY_SUCCESS";

export const loadPropertyRequest = () => (
    { type: LOAD_PROPERTY_REQUEST }
);

export const loadPropertySuccess = (payload) => (
    { type: LOAD_PROPERTY_SUCCESS, payload }
);
