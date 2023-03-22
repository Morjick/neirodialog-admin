enum ProductTypeEnum {
  electronic = 'electronic',
  physical = 'physical'
}

interface Product {
  id: number
  title: string
  desc: string
  price?: number
  basePrice: number
  discount?: number
  count?: number
  inStock?: boolean
  href: string
  type: ProductTypeEnum
}

interface ProductStoreI {
  products: Product[]
}

const productStore = {
  state: () => ({
    products: [
      {
        id: 1,
        title: 'Набор для мальчиков',
        desc: 'Крутой набор',
        basePrice: 12000,
        discount: 10,
        count: 152,
        inStock: true,
        type: ProductTypeEnum.physical,
      },
    ] as Product[],
  }),
  getters: {
    getProducts (state: ProductStoreI): Product[] {
      return state.products
    },
    getProductFromHref (state: ProductStoreI, href: string): Product | null {
      const product = state.products.find(el => el.href === href)

      if (!product) return null

      return product
    },
    getProductFromId (state: ProductStoreI, id: number): Product | null {
      const product = state.products.find(el => el.id === id)

      if (!product) return null

      return product
    },
  },
  actions: {
    async createProduct (action: any, product: Product) {

    },
  },
}

export {
  productStore,
  type Product,
  ProductTypeEnum,
  type ProductStoreI
}
