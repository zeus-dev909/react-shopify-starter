import { api as apiConstants } from '../constants/constants';

const initialState = {
  items: {},
  loading: false,
  error: null
};

export default function sunglasses(state = initialState, action) {
  switch (action.type) {
    case apiConstants['SUNGLASSES_PRODUCTS_LOAD']:
      return {
        ...initialState,
        loading: true,
      };
    case apiConstants['SUNGLASSES_PRODUCTS_LOAD_SUCCESS']:
      return {
        ...state,
        items: action.products
      };
    case apiConstants['SUNGLASSES_PRODUCTS_LOAD_FAIL']:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
}