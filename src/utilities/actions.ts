import { Action, Item } from "../lib/types";


export const LOADING_INIT_ACTION = 'loading-init-action';
export const LOADING_SUCCESS_ACTION = 'loading-success-action';
export const LOADING_ERROR_ACTION = 'loading-error-action';

export const ITEM_TEXT_CHANGE_ACTION = 'item-text-change-action';
export const ITEM_QUANTITY_CHANGE_ACTION = 'item-quantity-change-action';
export const ITEM_PURCHASED_ACTION = 'item-purchased-action';

export const SUBMIT_FORM_ACTION = 'submit-form-action';

export const initLoading = (): Action => {
  return {
    type: LOADING_INIT_ACTION
  };
}

export const successLoading = (items: Item[]): Action => {
  return {
    data: items,
    type: LOADING_SUCCESS_ACTION
  };
}

export const errorLoading = (): Action => {
  return {
    type: LOADING_ERROR_ACTION,
    error: new Error()
  };
}

export const itemTextChange = (item: string): Action => {
  return {
    item,
    type: ITEM_TEXT_CHANGE_ACTION
  };
}

export const itemQuantityChange = (quantity: number): Action => {
  return {
    quantity,
    type: ITEM_QUANTITY_CHANGE_ACTION
  };
}

export const itemPurchasedChange = (purchased: boolean, id: number): Action => {
  return {
    id: id,
    purchased,
    type: ITEM_PURCHASED_ACTION
  };
}

export const submitForm = ({ item, quantity }:
  { item: string, quantity: number }): Action => {
  return {
    item,
    quantity,
    type: SUBMIT_FORM_ACTION
  };
}

