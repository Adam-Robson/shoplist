import { useList } from "../hooks/useList"
import { useListContext } from "../hooks/useListContext"
import { Item, State } from "../lib/types"
import { initLoading, successLoading, errorLoading, itemPurchasedChange } from "../utilities/actions"

export default function Posts() {
  const { state }: { state: State } = useList()
  const { dispatch } = useListContext()

  const { items, purchased } = state;

  const handlePurchased = () => {
    dispatch(initLoading())
    try {
      dispatch(itemPurchasedChange(
        purchased,
        items[0].id || 0
      ))
      dispatch(successLoading(state.items))
    } catch (err) {
      dispatch(errorLoading())
      console.error('Error updating item:', err)
    }
  }

  return (
    <section className="posts-section">{
      state.items.map((item: Item) => {
        return (
          <div key={item.id} className="post">
            <p>{item.item}</p>
            <p>{item.quantity}</p>
            <button onClick={handlePurchased}>{purchased ? 'Purchased' : 'Not Purchased'}</button>
          </div>
        )
    })}</section>
  )
}
