import * as actionTypes from '../actions/actionTypes';
import axios from '../../axios-orders';

export const addIngredient = (ingredient) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: ingredient,
  };
};
export const removeIngredient = (ingredient) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: ingredient,
  };
};

export const setIngredients = (ingredients) => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredients,
  };
};

export const fetchIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED,
  };
};

export const initIngredients = () => {
  return (dispatch) => {
    axios
      .get('https://my-burger-react-96935-default-rtdb.firebaseio.com/ingredients.json')
      .then((response) => {
        dispatch(setIngredients(response.data));
      })
      .catch((error) => {
        dispatch(fetchIngredientsFailed());
      });
  };
};
