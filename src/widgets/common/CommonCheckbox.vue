<template>
  <label
    class="common-checkbox"
    :class="{
      active: modelValue === 'true'
    }"
    :for="hash"
  >
    <input
      type="checkbox"
      :value="modelValue"
      @input="onInput"
      @change="onChange"
      :id="hash"
    >
    <div class="common-checkbox-pointer"></div>
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const overTime: any = null
const hash: any = null

export default defineComponent({
  name: 'CommonCheckbox',
  data: () => ({
    overTime,
    hash,
  }),
  components: {},
  props: {
    modelValue: String,
  },
  computed: {},
  methods: {
    onChange (event: any) {
      this.$emit('update:modelValue', event.target.value === 'true' ? 'false' : 'true')
    },
    onInput (event: any) {
      // this.$emit('update:modelValue', event.target.value)
    },
    randomInteger (min: number, max: number) {
      const rand: number = min - 0.5 + Math.random() * (max - min + 1)
      return Math.round(rand)
    },
  },
  mounted () {
    this.hash = this.randomInteger(100, 999)
  },
})
</script>

<style lang="scss">
.common-checkbox {
  display: flex;
  position: relative;

  width: 40px;
  height: 25px;

  border-radius: 20px;
  background: var(--border-color);
  box-shadow: var(--message-shadow-color);

  &.active {
    background: var(--primary-gradient);

    .common-checkbox-pointer {
      background: var(--background-color);
      box-shadow: 0px 0px 3px var(--background-color);
      left: auto;
      right: 5%;
    }
  }

  &-pointer {
    position: absolute;
    top: 50%;
    left: 5%;
    transform: translate(0, -50%);
    width: 20px;
    height: 20px;

    transition: all .2s;

    border-radius: 50%;
    background: var(--border-color);
  }

  input {
    position: absolute;
    display: none;
  }
}
</style>
