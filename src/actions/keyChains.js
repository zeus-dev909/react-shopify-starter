import { api as apiConstants } from '../constants/constants';
import { fetchKeyChains } from '../shopifyApi/fetching';

const loadProducts = () => { 
  return {
    type: apiConstants['KEYCHAINS_PRODUCTS_LOAD']
  };
}

const loadProductsSuccess = (products) => {
  return {
		type: apiConstants['KEYCHAINS_PRODUCTS_LOAD_SUCCESS'],
		products,
	}
}

const loadProductsFail = (error) => {
  return {
    type: apiConstants['KEYCHAINS_PRODUCTS_LOAD_FAIL'],
    error
  };
}

export function getKeyChains() {
  return dispatch => {
    dispatch(loadProducts());

    fetchKeyChains()
      .then((products) => {
        dispatch(loadProductsSuccess(products));
      })
      .catch(error => {
        dispatch(loadProductsFail(error));
      });
  };
}