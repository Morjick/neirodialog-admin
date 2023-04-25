<template>
  <button
    class="common-button"
    :class="[mod]"
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
    mod: {
      type: String,
      default: 'primery',
    },
  },
  computed: {},
  methods: {},
  mounted () {},
})
</script>

<style lang="scss">
.common-button {
  border-radius: 4px;
  padding: 5px;

  &.primery {
    background: var(--primary-color);
    color: var(--font-alternative-color);
  }

  &.danger {
    background: var(--danger-color);
    color: var(--font-alternative-color);
  }
}
</style>
