import { faker } from "@faker-js/faker"

const createProducts = (numberOfProducts: number) => {
  return [...Array(numberOfProducts)].map(() => {
    return {
      id: faker.datatype.uuid(),
      productName: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.image.fashion(),
      inStock: faker.random.numeric(),
      fastDelivery: faker.datatype.boolean() ? "true" : "false",
      ratings: faker.random.numeric(),
    }
  })
}

export { createProducts }
