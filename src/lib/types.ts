import {
  LOADING_INIT_ACTION,
  LOADING_SUCCESS_ACTION,
  LOADING_ERROR_ACTION,
  ITEM_TEXT_CHANGE_ACTION,
  ITEM_QUANTITY_CHANGE_ACTION,
  ITEM_PURCHASED_ACTION,
  SUBMIT_FORM_ACTION
} from '../utilities/actions';

export type Item = {
  id: number;
  created_at: string;
  item: string | null;
  purchased: boolean | null;
  quantity: number | null;
}

export type State = {
  items: Item[];
  loading: boolean;
  error: Error | null;
  item: string;
  quantity: number;
  purchased: boolean;
}

export type Action =
  | { type: typeof LOADING_INIT_ACTION }
  | { type: typeof LOADING_SUCCESS_ACTION; data: Item[] }
  | { type: typeof LOADING_ERROR_ACTION; error: Error }
  | { type: typeof ITEM_TEXT_CHANGE_ACTION; item: string }
  | { type: typeof ITEM_QUANTITY_CHANGE_ACTION; quantity: number }
  | { type: typeof ITEM_PURCHASED_ACTION; purchased: boolean }
  | { type: typeof SUBMIT_FORM_ACTION; item?: string; quantity: number };


export interface ListContextProps {
  state: State;
  dispatch: React.Dispatch<Action>;
}


export type ContextProp = {
  children: React.ReactNode;
}
