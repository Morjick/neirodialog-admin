<template>
  <div
    class="product-list-item"
    v-if="product"
  >
    <div class="product-list-item-title">{{ product.title }}</div>
  </div>
</template>

<script lang="ts">
import { Product } from 'pages/products/products.store'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProductListItem',
  data: () => ({}),
  components: {},
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {},
  methods: {},
  mounted () {},
})
</script>

<style lang="scss">
// .product-list-item {}
</style>
