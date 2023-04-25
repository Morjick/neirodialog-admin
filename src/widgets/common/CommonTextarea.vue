<template>
  <div class="common-textarea">
    <textarea
      :placeholder="placeholder"
      :value="modelValue"
      @input="onInput"
      @change="onChange"
      @keypress.enter="onEnter"
    ></textarea>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const overTime: any = null

export default defineComponent({
  name: 'CommonTextarea',
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
.common-textarea {
  max-width: 300px;
  height: 150px;

  background: var(--background-color);
  border: 1px solid var(--border-color);
  border-radius: 4px;

  textarea {
    height: 100%;
    width: 100%;
    padding: 5px;
    resize: none;

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
