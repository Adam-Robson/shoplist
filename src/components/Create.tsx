import { useListContext } from "../hooks/useListContext"
import {
  initLoading,
  itemTextChange,
  itemQuantityChange,
  submitForm,
  successLoading,
  errorLoading
} from "../utilities/actions";
import { createItem } from "../services/list";
import { Item } from "../lib/types";


export default function Create() {
  const { state, dispatch } = useListContext()

  const onItemTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    dispatch(itemTextChange(e.target.value))
  }

  const onItemQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    dispatch(itemQuantityChange(Number(e.target.value)))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(initLoading());
    dispatch(submitForm({
      item: state.item,
      quantity: state.quantity
    }));

    const newItem: Item = {
      item: state.item,
      quantity: state.quantity,
      purchased: false,
    };

    try {
      const res = await createItem(newItem);

      if (res) {
        dispatch(successLoading(res));
        console.log('Item created successfully:', res);
      }
    } catch (err) {
      dispatch(errorLoading());
      console.error('Error creating item:', err);
    }
  };
  return (
   <div className="form-container">
      <form className="form" onSubmit={void handleSubmit}>

        <label htmlFor="text">
          Text
          <input
            type="text"
            name="item"
            value={state.item}
            onChange={onItemTextChange}
          />
        </label>

        <label htmlFor="number">
          Number
          <input
            type="number"
            name="quantity"
            value={state.quantity}
            onChange={onItemQuantityChange}
          />
        </label>

        <button type="submit">Create</button>
      </form>
    </div>
  )
}
