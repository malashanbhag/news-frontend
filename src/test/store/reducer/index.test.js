import { reducer } from "../../../store/reducer";

const state = {
    loading: true,
    news: [],
    errorMessage: null,
    pageCount: 1
}

describe('Should return appropriate state', () => {
    it('when type is not matching', () => {
        const result = reducer(state, { type: 'INVALID_TYPE' });
        expect(result).toStrictEqual(state);
    });
    
    it('when the type is SEARCH_REQUEST', () => {
        const result = reducer(state, { type: 'SEARCH_REQUEST' });
        expect(result).toStrictEqual(state);
    })
    
    it('when the type is SEARCH_SUCCESS', () => {
        const payload = {
            totalResults: 40, 
            articles: [{ title: 'some title', description: 'some description' }]
        };
        const expected = {
            loading: false,
            news: payload,
            errorMessage: null,
            pageCount: 4
        }
        const result = reducer(state, { type: 'SEARCH_SUCCESS', payload });
        expect(result).toStrictEqual(expected);
    })

    it('when the type is SEARCH_FAILURE', () => {
        const expected = {
            loading: false,
            errorMessage: "Something went wrong",
            news: [],
            pageCount: 1
        }
        const result = reducer(state, { type: 'SEARCH_FAILURE', error: 'Something went wrong' });
        expect(result).toStrictEqual(expected);

    })

})