/*
State handling
*/
import * as types from './types';

const initialState = {
  products: [],
  searchText: '',
  error: ''
}

export default function Products(state = initialState, action = {}){
    switch (action.type) {
      case types.LOAD_SOBJECTS:
        return{
          state
        }
      case types.LOAD_SUCCESS:
        return {
          products: action.products,
          searchText: '',
          error: ''
        }

      case types.SEARCH_TEXT_ENTERED:
        return {
          ...state,
          searchText: action.searchText
        }

      default: state
    }
    return state;
}
