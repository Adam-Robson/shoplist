import { State, Action } from '../lib/types'

import {
  LOADING_INIT_ACTION,
  LOADING_SUCCESS_ACTION,
  LOADING_ERROR_ACTION,
  ITEM_TEXT_CHANGE_ACTION,
  ITEM_QUANTITY_CHANGE_ACTION,
  ITEM_PURCHASED_ACTION,
  SUBMIT_FORM_ACTION
} from './actions'

export const initialState = {
  items: [],
  loading: false,
  error: null,
  item: '',
  quantity: 0,
  purchased: false
}

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case LOADING_INIT_ACTION:
      return {
        ...state,
        loading: true,
        error: null
      };
    case LOADING_SUCCESS_ACTION:
      return {
        ...state,
        items: action.data,
        loading: false
      };
    case LOADING_ERROR_ACTION:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case ITEM_TEXT_CHANGE_ACTION:
      return {
        ...state,
        item: action.item
      };
    case ITEM_QUANTITY_CHANGE_ACTION:
      return {
        ...state,
        quantity: action.quantity
      };
    case ITEM_PURCHASED_ACTION:
      return {
        ...state,
        purchased: action.purchased
      };
    case SUBMIT_FORM_ACTION:
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: state.items.length + 1,
            created_at: new Date().toISOString(),
            item: action.item || '',
            purchased: false,
            quantity: action.quantity
          }
        ],
        item: '',
        quantity: 0
      };
    default:
      return state;
  }
}
