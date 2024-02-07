import { createContext, useReducer } from 'react';
import { reducer, initialState } from '../utilities/reducer';
import { ContextProp, ListContextProps } from '../lib/types';

export const ListContext = createContext<ListContextProps>({
  state: initialState,
  dispatch: () => undefined
});

export function ListProvider({ children }: ContextProp) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ListContext.Provider value={{ state, dispatch }}>
      {children}
    </ListContext.Provider>
  );
}
