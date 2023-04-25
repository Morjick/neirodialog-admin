<template>
  <div class="create-product-form">
    <h1>Создать продукт</h1>

    <product-avatar
      @setAvatar="setAvatar"
      ref="productAvatar"
    />

    <common-input
      v-model="name"
      placeholder="Введите имя продукта"
      style="margin-top: 20px;"
    />

    <common-textarea
      v-model="description"
      placeholder="Введите описание продукта"
    />

    <common-select
      :list="productTypeList"
      textValue="text"
      idValue="id"
      placeholder="Выберите тип товара"
      v-model="type"
      @select="changeType"
    />

    <div class="create-product-form-checkbox">
      <common-checkbox
        v-model="inStock"
      />
      <span>Есть ли товар в наличии?</span>
    </div>

    <div class="create-product-form-checkbox">
      <common-checkbox
        v-model="show"
      />
      <span>Опубликовать ли товар сразу после создания?</span>
    </div>

    <common-input
      v-model="count"
      placeholder="Введите колличества товара"
      style="margin-top: 20px;"
    />

    <common-input
      v-model="price"
      placeholder="Введите цену товара"
      style="margin-top: 20px;"
    />

    <div class="create-product-form-buttons">
      <common-button
        text="Сохранить"
        @click="createProduct"
      />
      <common-button
        text="Отменить"
        style="margin-left: 10px;"
        mod="danger"
        @click="clrearProduct"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CommonCheckboxVue from 'widgets/common/CommonCheckbox.vue'
import CommonInputVue from 'widgets/common/CommonInput.vue'
import CommonTextareaVue from 'widgets/common/CommonTextarea.vue'
import CommonSelectVue from 'widgets/common/CommonSelect.vue'
import ProductAvatarVue from './ProductAvatar.vue'
import CommonButtonVue from 'widgets/common/CommonButton.vue'

const CommonInput: any = CommonInputVue
const CommonTextarea: any = CommonTextareaVue
const CommonCheckbox: any = CommonCheckboxVue
const CommonSelect: any = CommonSelectVue
const ProductAvatar: any = ProductAvatarVue
const CommonButton: any = CommonButtonVue

export default defineComponent({
  name: 'CreateProductForm',
  data: () => ({
    name: null,
    description: null,
    inStock: false,
    show: false,
    count: null,
    productTypeList: [
      {
        text: 'Электронный товар',
        type: 'e',
      },
      {
        text: 'Физический товар',
        type: 'p',
      },
    ],
    type: null,
    avatar: null as any,
    price: null,
  }),
  components: {
    CommonInput, CommonTextarea, CommonCheckbox, CommonSelect, ProductAvatar, CommonButton,
  },
  props: {},
  computed: {},
  methods: {
    changeType (element: any) {
      this.type = element.type
    },
    setAvatar (avatar: any) {
      this.avatar = avatar
    },
    clrearProduct () {
      const productAvatar: any = this.$refs.productAvatar
      productAvatar.clearAvatar()
      this.name = null
      this.description = null
      this.inStock = false
      this.show = false
      this.count = null
      this.type = null
      this.avatar = null
      this.price = null

      this.$emit('changeType')
    },
    async createProduct () {
      try {
        const product: any = await this.axios.post('products/create', {
          title: this.name,
          description: this.description,
          inStock: this.inStock,
          inMainPage: false,
          count: this.count,
          type: this.type,
          avatar: this.avatar,
          price: this.price,
          discount: 0,
          colors: [],
          videos: [],
          images: [],
        })

        if (product.ok) {
          this.$emit('changeType')
        }
      } catch (e) {

      }
    },
  },
  mounted () {},
})
</script>

<style lang="scss">
.create-product-form {
  padding: 20px;

  h1 {
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 2px;
  }

  .common-input {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &-checkbox {
    display: flex;
    align-items: center;
    margin: 20px 0;

    span {
      margin-left: 10px;
    }
  }
}
</style>
