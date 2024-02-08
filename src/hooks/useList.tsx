import { useEffect } from 'react';

import { getItems } from '../services/list';
import { useListContext } from './useListContext';
import { initLoading, successLoading, errorLoading } from '../utilities/actions';
import { Item } from '../lib/types';

export function useList() {
  const { state, dispatch } = useListContext();

  useEffect(() => {
    const fetchItems = async () => {
      dispatch(initLoading());
      try {
        const res: Item[] | null = await getItems();
        if (res) {
          dispatch(successLoading(res));
        }
        return res;
      } catch (e) {
        dispatch(errorLoading());
      }
    };

    void fetchItems();
  }, [dispatch]);

  return {
    state
  }
}
