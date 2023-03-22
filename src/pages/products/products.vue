<template>
  <div class="products">
    <div class="products-sidebar">
      <div style="padding: 20px;">
        <common-button
          text="Создать продукт"
          style="width: 100%; height: 40px;"
        />
      </div>
    </div>
    <div class="products-body">
      <div class="products-body-header">
        <common-search
          style="width: 100%; height: 100%; border-radius: 4px;"
          @changeValue="searchProducts"
        />
      </div>
      <div class="products-body-list">
        <product-list-item
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CommonButtonVue from 'widgets/common/CommonButton.vue'
import CommonSearchVue from 'widgets/common/CommonSearch.vue'
import ProductListItemVue from 'widgets/pages/products/ProductListItem.vue'
import { Product } from './products.store'

const CommonSearch: any = CommonSearchVue
const ProductListItem: any = ProductListItemVue

const CommonButton: any = CommonButtonVue

export default defineComponent({
  name: 'ProductsPage',
  data: () => ({}),
  components: { CommonButton, CommonSearch, ProductListItem, },
  props: {},
  computed: {
    products (): Product[] {
      return this.$store.getters.getProducts
    },
  },
  methods: {
    searchProducts () {},
  },
  mounted () {},
})
</script>

<style lang="scss">
.products {
  display: flex;

  width: 100%;
  height: 550px;

  background: var(--background-color);
  box-shadow: var(--drop-shadow-color);
  border-radius: 6px;

  &-sidebar {
    width: 255px;
    height: 100%;

    flex-shrink: 0;
    border-right: 1px solid var(--border-color);
  }

  &-body {
    width: 100%;
    &-header {
      width: 100%;
      height: 60px;

      border-bottom: 1px solid var(--border-color);
      padding: 10px;
    }
  }
}
</style>
