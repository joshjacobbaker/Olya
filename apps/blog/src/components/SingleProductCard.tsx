import React from "react"
import Image from "next/image"

const SingleProductCard = ({ id, productName, price, image, inStock, fastDelivery, ratings }) => {
  return (
    <li>
      <ul>
        <li>id: {id}</li>
        <li>productName: {productName}</li>
        <li>price: {price}</li>
        <li>
          <Image src={image} width={300} height={300} />
        </li>
        <li>inStock: {inStock}</li>
        <li>fastDelivery: {fastDelivery}</li>
        <li>ratings: {ratings}</li>
      </ul>
    </li>
  )
}

export default SingleProductCard
