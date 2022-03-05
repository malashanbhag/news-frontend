import { PER_PAGE } from "../../utils/constants";

export const initialState = {
    loading: true,
    news: [],
    errorMessage: null,
    pageCount: 1
};

export const reducer = (state, action) => {
    switch(action.type){
        case "SEARCH_REQUEST":
            return {
                ...state,
                loading: true,
                errorMessage: null
            };

        case "SEARCH_SUCCESS":
            return {
                ...state,
                loading: false,
                news: action.payload,
                pageCount: Math.ceil(action.payload.totalResults / PER_PAGE)
            };

        case "SEARCH_FAILURE":
            return {
                ...state,
                loading: false,
                errorMessage: action.error
            };

        default:
            return state;
    }
};