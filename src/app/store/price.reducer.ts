import * as price from './actions';

interface State {
  prices: object
}

interface User {
  firstName: string,
  lastName: string,
  age: number
}

const defaultState = {prices: {}, user: {}}

export function priceReducer(state: State = defaultState, action) {
  switch (action.type) {
    case price.NEW_PRICES:
      return {...state, prices: {...state.prices, [action.product_id]: action.price}};
      break;
    case price.GET_USER:
      return {...state, user:<User> {firstName:<string> action.firstName, lastName:<string> action.lastName, age:<number> action.age}}
      break;
  }
}
