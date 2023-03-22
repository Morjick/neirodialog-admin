<template>
  <input
    class="common-search"
    :placeholder="placeholder"
    v-model="search"
    @input="emitValue"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const delay: any = null

export default defineComponent({
  name: 'CommonSearch',
  data: () => ({
    delay,
    search: '',
  }),
  components: {},
  props: {
    placeholder: {
      type: String,
      default: 'Найти...',
    },
  },
  computed: {},
  methods: {
    emitValue () {
      if (this.delay) {
        clearTimeout(this.delay)
        this.delay = null
      }
      this.delay = setTimeout(() => {
        this.$emit('changeValue', this.search)
      }, 500)
    },
  },
  mounted () {},
})
</script>

<style lang="scss">
.common-search {
  border: 1px solid var(--font-subtext-color);
  border-radius: 20px;
  padding: 10px 15px;
}
</style>
