<template>
  <div
    class="product-list-item"
    @click="openProduct"
    v-if="product"
  >
    <div class="product-list-item-inner">
      <div class="product-list-item-info">
        <div class="product-list-item-title">{{ product.name }}</div>

        <div class="product-list-item-desc">
          <span>Тип:</span> {{ product.type === 'e' ? 'Электронный' : 'Физический' }}
        </div>

        <div class="product-list-item-desc">
          <span>Автор:</span> {{ product.author?.name || 'Не установлен' }}
        </div>
      </div>
      <div class="product-list-item-active">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProductListItem',
  data: () => ({
    inMainPage: false,
  }),
  components: {},
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {},
  methods: {
    openProduct () {
      const router = this.$router.resolve({
        path: `/product/${this.product.href}`,
      })
      window.open(router.href, '_blank')
    },
  },
  mounted () {
    this.inMainPage = Boolean(this.product.inMainPage)
  },
})
</script>

<style lang="scss">
.product-list-item {
  min-height: 100px;
  height: 100%;

  cursor: pointer;
  border-bottom: 1px dashed var(--primary-color);
  transition: all .2s;
  padding: 20px 10px;

  &:hover {
    box-shadow: var(--drop-shadow-color);
  }

  &-inner {
    display: flex;
  }

  &-info {
    display: flex;
    flex-direction: column;
  }

  &-title {
    font-weight: bold;
    font-size: 20px;
    letter-spacing: 2px;
  }

  &-subtitle {
    margin: 10px 0;
  }

  &-desc {
    span {
      font-weight: bold;
    }
  }
}
</style>
