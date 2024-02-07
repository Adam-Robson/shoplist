import { Items } from "../lib/types";

export const LOADING_INIT_ACTION = 'loading-init-action';
export const LOADING_SUCCESS_ACTION = 'loading-success-action';
export const LOADING_ERROR_ACTION = 'loading-error-action';

export const ITEM_TEXT_CHANGE_ACTION = 'item-text-change-action';
export const ITEM_QUANTITY_CHANGE_ACTION = 'item-quantity-change-action';
export const ITEM_PURCHASED_ACTION = 'item-purchased-action';

export const SUBMIT_FORM_ACTION = 'submit-form-action';

export function initLoading() {
  return {
    type: LOADING_INIT_ACTION
  };
}

export function successLoading(items: Items) {
  return {
    ...items,
    type: LOADING_SUCCESS_ACTION
  };
}

export function errorLoading() {
  return {
    type: LOADING_ERROR_ACTION
  };
}

export function changeItemText(item: string) {
  return {
    item,
    type: ITEM_TEXT_CHANGE_ACTION
  };
}

export function changeQuantity(quantity: number) {
  return {
    quantity,
    type: ITEM_QUANTITY_CHANGE_ACTION
  };
}

export function changePurchased(purchased: boolean, id: number) {
  return {
    id,
    purchased,
    type: ITEM_PURCHASED_ACTION
  };
}

export function submitForm({ item, quantity }:
  { item: string, quantity: number }) {
  return {
    item,
    quantity,
    type: SUBMIT_FORM_ACTION
  };
}

