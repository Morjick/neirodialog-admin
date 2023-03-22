<template>
  <button
    class="common-button"
  >{{ text }}</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CommonButton',
  data: () => ({}),
  components: {},
  props: {
    text: {
      type: String,
      default: 'Подтвердить',
    },
  },
  computed: {},
  methods: {},
  mounted () {},
})
</script>

<style lang="scss">
.common-button {
  background: var(--primary-color);
  border-radius: 4px;
  color: var(--font-alternative-color);
  padding: 5px;
}
</style>
