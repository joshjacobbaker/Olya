import { useShoppingCartContext } from "../../context/shoppingCartContext"
import SingleProductCard from "../../components/SingleProductCard"
const ShoppingCartPage = () => {
  let { state, dispatch } = useShoppingCartContext()
  return (
    <div>
      <ul>
        {state.products.map((item) => {
          return <SingleProductCard {...item} />
        })}
      </ul>
    </div>
  )
}

export default ShoppingCartPage
