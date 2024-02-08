import { useList } from "../hooks/useList"
import { Item, State } from "../lib/types"
export default function Posts() {
  const { state }: { state: State } = useList()
  return (
    <div>{
      state.items.map((item: Item) => {
        return (
          <div key={item.id}>
            <p>{item.item}</p>
            <p>{item.quantity}</p>
            <p>{item.purchased ? 'Purchased' : 'Not Purchased'}</p>
          </div>
        )
    })}</div>
  )
}
