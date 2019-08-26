import { createAction, props } from "@ngrx/store";

export const prices = createAction(
  "[Websocket Service] New Prices",
  props<{ product_id: string, price: string }>()
);
