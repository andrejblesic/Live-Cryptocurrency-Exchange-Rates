import { createAction, props } from '@ngrx/store';
import { IPrice, IUser } from '../models/price';

export const NEW_PRICES = '[Websocket Service] New Prices';
export const GET_USER = '[Websocket Service] Get User';

export const newPrices = createAction(
  NEW_PRICES,
  props<IPrice>()
);

export const getUser = createAction(
  GET_USER,
  props<IUser>()
);
