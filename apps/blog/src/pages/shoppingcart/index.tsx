import { useCallback } from "react"
import { useShoppingCartContext } from "../../context/shoppingCartContext/shoppingCartContext"
import SingleProductCard from "../../components/SingleProductCard"
import Filter from "../../components/Filter"
import { createProducts } from "../../data/fakerGeneratedShoppingCartData"

const ShoppingCartPage = () => {
  let { state, dispatch } = useShoppingCartContext()
  const memoizedProducts = useCallback(() => {
    return createProducts(20)
  }, [])
  let products = memoizedProducts()

  return (
    <div className={`grid grid-cols-2`}>
      <button onClick={() => console.log("clicked...")}></button>
      <ul className={`bg-zinc-200`}>
        {/* {state?.products?.map((item) => {
          return <SingleProductCard />
        })} */}
      </ul>

      <Filter />
    </div>
  )
}

export default ShoppingCartPage
