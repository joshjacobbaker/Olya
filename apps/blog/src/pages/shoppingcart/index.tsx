import { useShoppingCartContext } from "../../context/shoppingCartContext"
import SingleProductCard from "../../components/SingleProductCard"
import Filter from "../../components/Filter"

const ShoppingCartPage = () => {
  let { state, dispatch } = useShoppingCartContext()
  return (
    <div className={`grid grid-cols-2`}>
      <ul className={`bg-zinc-200`}>
        {state.products.map((item) => {
          return <SingleProductCard {...item} />
        })}
      </ul>
      <Filter />
    </div>
  )
}

export default ShoppingCartPage
