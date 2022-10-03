import { useCallback } from "react"
import { useShoppingCartContext } from "../../context/shoppingCartContext/shoppingCartContext"
import { Types } from "../../context/shoppingCartContext/shoppingCartReducer"
import SingleProductCard from "../../components/SingleProductCard"
import Filter from "../../components/Filter"
import { createProducts } from "../../data/fakerGeneratedShoppingCartData"

const ShoppingCartPage = () => {
  let { state, dispatch } = useShoppingCartContext()
  // const memoizedProducts = useCallback(() => {
  //   return createProducts(20)
  // }, [])
  // let products = memoizedProducts()

  return (
    <div className={`grid grid-cols-2`}>
      <button onClick={() => dispatch({ type: Types.Add })}>Add a shopping cart item</button>
      <ul className={`bg-zinc-200`}>
        {/* {state?.products?.map((item) => {
          return <SingleProductCard {...item} />
        })} */}
        <li>Shopping Cart: {state.shoppingCart}</li>
      </ul>

      <Filter />
    </div>
  )
}

export default ShoppingCartPage
