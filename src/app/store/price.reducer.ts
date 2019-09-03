import * as price from './actions';
import { IUser } from '../models/price';
import { IPrice } from '../models/price';

interface State {
  prices: object,
  user: object
}

const defaultState:State = {prices: {}, user: {}}

export function priceReducer(state: State = defaultState, action) {
  switch (action.type) {
    case price.NEW_PRICES:
      return {...state, prices:<IPrice> {...state.prices, [action.product_id]: action.price}};
      break;
    case price.GET_USER:
      return {...state, user:<IUser> {firstName:<string> action.firstName, lastName:<string> action.lastName, age:<number> action.age}};
      console.log(state);
      break;
  }
}
