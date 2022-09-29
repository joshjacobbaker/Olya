import { faker } from "@faker-js/faker"

const createProducts = (numberOfProducts: number) => {
  return [...Array(numberOfProducts)].map(() => {
    return {
      id: faker.datatype.uuid(),
      productName: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.image.fashion(),
      quantity: faker.random.numeric(),
      fastDelivery: faker.datatype.boolean() ? "true" : "false",
      rating: faker.random.numeric(),
    }
  })
}

export { createProducts }
