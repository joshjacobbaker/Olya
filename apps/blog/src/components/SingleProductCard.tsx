import React from "react"
import Image from "next/image"

// interface UiReducerStateProps {
//   id: number
//   productName: string
//   price: number
//   image: string
//   inStock: number
//   fastDelivery: boolean
//   ratings: number
// }

interface UiReducerStateProps {
  id: number
  name: string
  price: number
}

// const SingleProductCard = ({ id, productName, price, image, inStock, fastDelivery, ratings }: UiReducerStateProps) => {
const SingleProductCard = ({ id, name, price }: UiReducerStateProps) => {
  return (
    <li>
      <ul>
        <li>id: {id}</li>
        {/* <li>productName: {productName}</li> */}
        <li>name: {name}</li>
        <li>price: {price}</li>
        <li>{/* <Image src={image} width={300} height={300} /> */}</li>
        {/* <li>inStock: {inStock}</li> */}
        {/* <li>fastDelivery: {fastDelivery}</li> */}
        {/* <li>ratings: {ratings}</li> */}
      </ul>
    </li>
  )
}

export default SingleProductCard
