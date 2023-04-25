<template>
  <div
    class="common-input"
    :class="valid === false ? 'not-valid' : ''"
  >
    <input
      :type="inputType"
      :placeholder="placeholder"
      :value="modelValue"
      @input="onInput"
      @change="onChange"
      @keypress.enter="onEnter"
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const overTime: any = null

export default defineComponent({
  name: 'CommonInput',
  data: () => ({
    overTime,
  }),
  components: {},
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    modelValue: {
      type: String,
    },
    inputType: {
      type: String,
      default: 'text',
    },
    valid: {
      type: Boolean,
      default: true,
    },
  },
  computed: {},
  methods: {
    onChange (event: any) {
      this.$emit('update:modelValue', event.target.value)
    },
    onInput (event: any) {
      this.setOvertime()
      this.$emit('update:modelValue', event.target.value)
    },
    setOvertime () {
      if (this.overTime) {
        clearTimeout(this.overTime)
        this.overTime = null
      }

      this.overTime = setTimeout(() => {
        this.$emit('overTime')
      }, 1000)
    },
    onEnter () {
      this.$emit('enter')
    },
  },
  mounted () {},
})
</script>

<style lang="scss">
.common-input {
  max-width: 300px;
  height: 40px;

  background: var(--background-color);
  border: 1px solid var(--border-color);
  border-radius: 4px;

  input {
    height: 100%;
    width: 100%;
    padding: 5px;

    &::placeholder {
      color: var(--border-color);
    }
  }

  &.not-valid {
    border: 1px solid var(--danger-color);

    &::placeholder {
      color: var(--danger-color);
    }
  }
}
</style>
