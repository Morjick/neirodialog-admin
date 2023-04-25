<template>
  <div
    v-if="product"
    class="product"
  >
    <h1>{{ product.name }}</h1>

    {{ product }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Product } from './products.store'

const product: any = null

interface ProductResponseI {
  ok: boolean
  message: string
  product: Product
}

export default defineComponent({
  name: 'ProductPage',
  data: () => ({
    product,
  }),
  components: {},
  props: {},
  computed: {},
  methods: {
    async getProduct () {
      const { href, } = this.$route.params

      const product: ProductResponseI = await this.axios.get(`products/get-product/${href}`)

      this.product = product.product
    },
  },
  mounted () {
    this.getProduct()
  },
})
</script>

<style lang="scss">
.product {
  width: 100%;
  height: 550px;

  background: var(--background-color);
  box-shadow: var(--drop-shadow-color);
  border-radius: 6px;
  padding: 20px;

  h1 {
    font-size: 34px;
    font-weight: bold;
    letter-spacing: 2px;
  }
}
</style>
