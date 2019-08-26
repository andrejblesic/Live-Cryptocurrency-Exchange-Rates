interface priceAction {
  type: "[Websocket Service] New Prices",
  price: string,
  product_id: string
}

interface State {
  prices: object
}

const defaultState = {prices: {}}

export function priceReducer(state: State = defaultState, action: priceAction) {
  switch (action.type) {
    case "[Websocket Service] New Prices":
      return {...state, prices: {...state.prices, [action.product_id]: action.price}};
      break;
  }
}
