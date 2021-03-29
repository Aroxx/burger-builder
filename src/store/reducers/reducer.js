const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3,
};

const initialState = {
  ingredients: null,
  totalPrice: 4,
};

const reducer = (state = initialState, action) => {
  if (action.type === 'GET_INGREDIENTS') {
    return {
      ...state,
      ingredients: action.ingredientNames,
    };
  }
  if (action.type === 'ADD_INGREDIENT') {
    const updatedCount = state.ingredients[action.ingredientName] + 1;
    const updatedIngredients = {
      ...state.ingredients,
    };
    updatedIngredients[action.ingredientName] = updatedCount;
    const newPrice = state.totalPrice + INGREDIENT_PRICES[action.ingredientName];
    return {
      ingredients: updatedIngredients,
      totalPrice: newPrice.toFixed(2),
    };
  }
  if (action.type === 'REMOVE_INGREDIENT') {
    const oldCount = state.ingredients[action.ingredientName];
    if (oldCount <= 0) {
      return state;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...state.ingredients,
    };
    updatedIngredients[action.ingredientName] = updatedCount;
    const newPrice = state.totalPrice - INGREDIENT_PRICES[action.ingredientName];
    return {
      ingredients: updatedIngredients,
      totalPrice: newPrice.toFixed(2),
    };
  }
  return state;
};

export default reducer;
