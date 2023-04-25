<template>
  <div
    ref="productAvatar"
    class="product-avatar"
    @click="inputClickEmit"
  >
    <div
      class="product-avatar-default"
      v-if="!avatar"
    >Установите изображение</div>
    <input
      type="file"
      ref="productAvatarInput"
      @change="setImage"
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProductAvatar',
  data: () => ({
    avatar: false,
  }),
  components: {},
  props: {},
  computed: {},
  methods: {
    inputClickEmit () {
      const input: any = this.$refs.productAvatarInput
      input.click()
    },
    async setImage (event: any) {
      const imageContainer: any = this.$refs.productAvatar
      const image = event.target.files[0]

      if (!image) return false

      this.avatar = true

      const response = await this.$store.dispatch('uploadImage', image)
      imageContainer.style.backgroundImage =
        `url('${this.axios.defaults.baseURL}${String(response.image.path).substr(1)}')`
      this.$emit('setAvatar', imageContainer.style.backgroundImage)
    },
    clearAvatar () {
      const imageContainer: any = this.$refs.productAvatar

      imageContainer.style.backgroundImage = null
      this.avatar = false
    },
  },
  mounted () {},
})
</script>

<style lang="scss">
.product-avatar {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 300px;
  height: 300px;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 8px;
  border: 2px dashed var(--border-color);
  margin: 10px 0;
  overflow: hidden;
  cursor: pointer;

  input {
    display: none;
  }

  &-default {
    pointer-events: none;
    font-weight: bold;
  }
}
</style>
