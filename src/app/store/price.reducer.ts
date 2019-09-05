import * as actions from './actions';
import { IPrice } from '../models/price.model';
import { IUser } from '../models/user.model';
import { Action, createReducer, on } from '@ngrx/store';

interface State {
  prices: object,
  user: object
}

const defaultState: State = { prices: {}, user: {} }

const userPriceReducer = createReducer(
  defaultState,
  on(actions.getUser, (state, action) => ({ ...state, user: { firstName: <string>action.firstName, lastName: <string>action.lastName, age: <number>action.age } })),
  on(actions.newPrices, (state, action) => ({ ...state, prices: { ...state.prices, ...{[action.product_id]: <number>action.price } } }))
)

export function reducer(state: State | undefined, action: Action) {
  return userPriceReducer(state, action);
}
