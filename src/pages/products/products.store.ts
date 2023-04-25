import axios from 'axios'

enum ProductTypeEnum {
  electronic = 'electronic',
  physical = 'physical'
}

interface Product {
  id: number
  name: string
  desc: string
  price?: number
  basePrice: number
  discount?: number
  count?: number
  inStock?: boolean
  inMainPage?: boolean
  href: string
  type: ProductTypeEnum
}

interface ProductStoreI {
  products: Product[]
}

interface ProductResponseI {
  ok: boolean
  message: string
  products: Product[]
}

const productStore = {
  state: (): ProductStoreI => ({
    products: [],
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
    async createProduct (action: any, product: Product) {},
    async uploadImage (action: any, image: any) {
      const response = await axios.post('files/upload-file', {
        file: image,
      }, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })

      return response
    },
  },
  mutations: {
    async addProducts (state: ProductStoreI, data: ProductResponseI) {
      state.products = [...state.products, ...data.products, ]
    },
    async setProducts (state: ProductStoreI, data: ProductResponseI) {
      state.products = data.products
    },
  },
}

export {
  productStore,
  type Product,
  ProductTypeEnum,
  type ProductStoreI
}
