<template>
  <div class="products">
    <div class="products-sidebar">
      <div style="padding: 20px;">
        <common-button
          :text="type === 'list' ? 'Создать продукт' : 'Смотреть продукты'"
          @click="changeType"
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
      <div
        v-if="type === 'list'"
        class="products-body-list"
      >
        <product-list-item
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
        <loader-wiget
          v-if="load"
        />
      </div>
      <div
        v-if="type === 'create'"
        class="products-body-create"
      >
        <create-product-form @changeType="updateProduct" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CommonButtonVue from 'widgets/common/CommonButton.vue'
import CommonSearchVue from 'widgets/common/CommonSearch.vue'
import ProductListItemVue from 'widgets/pages/products/ProductListItem.vue'
import LoaderWigetVue from 'widgets/global/Loader.vue'
import { Product } from './products.store'
import CreateProductFormVue from 'widgets/pages/products/CreateProductForm.vue'

const CommonSearch: any = CommonSearchVue
const ProductListItem: any = ProductListItemVue
const CreateProductForm: any = CreateProductFormVue

const CommonButton: any = CommonButtonVue
const LoaderWiget: any = LoaderWigetVue

enum Type {
  LIST = 'list',
  CREATE = 'create'
}

export default defineComponent({
  name: 'ProductsPage',
  data: () => ({
    type: 'list' as Type,
    load: true,
  }),
  components: { CommonButton, CommonSearch, ProductListItem, LoaderWiget, CreateProductForm, },
  props: {},
  computed: {
    products (): Product[] {
      return this.$store.getters.getProducts
    },
  },
  methods: {
    searchProducts () {},
    changeType () {
      this.type = this.type === Type.LIST ? Type.CREATE : Type.LIST
    },
    async updateProduct () {
      this.load = true
      const products: any = await this.axios.get('products/get-many')

      this.$store.commit('setProducts', products)
      this.changeType()

      this.load = false
    },
    async addProduct () {
      try {
        const products: any = await this.axios.get('products/get-many')

        this.$store.commit('addProducts', products)
        this.load = false
      } catch (e) {
        this.load = false
      }
    },
  },
  mounted () {
    this.addProduct()
  },
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
    position: relative;
    overflow: hidden;
    overflow-y: auto;
    &-header {
      width: 100%;
      height: 60px;

      border-bottom: 1px solid var(--border-color);
      padding: 10px;
    }
  }
}
</style>
