export const LOAD_PROPERTY_REQUEST = "LOAD_PROPERTY_REQUEST";
export const LOAD_PROPERTY_SUCCESS = "LOAD_PROPERTY_SUCCESS";
export const GET_BUY_PROPETIES = "GET_BUY_PROPETIES";
export const GET_RENT_PROPETIES = "GET_RENT_PROPETIES";

export const loadPropertyRequest = (payload) => (
    { type: LOAD_PROPERTY_REQUEST, payload }
);

export const loadPropertySuccess = (payload) => (
    { type: LOAD_PROPERTY_SUCCESS, payload }
);


export const getBuyProperties = (payload = "af=500&am[]=MR&bf=0&filter[categoryId]=1&l=50&ob=mr&page=1&page[limit]=10&include=agent,locationTree,propertyImages") => {
    return { type: GET_BUY_PROPETIES, payload }
};

export const getRentProperties = (payload = "af=500&am[]=MR&bf=0&filter[categoryId]=2&l=50&ob=mr&page=1&page[limit]=10&include=agent,locationTree,propertyImages") => (
    { type: GET_RENT_PROPETIES, payload }
);
