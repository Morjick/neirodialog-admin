<template>
  <div
    class="common-select"
    :class="{
      open: open
    }"
    @click="openSelect"
  >
    <div class="common-select-header">
      {{ value ? value[textValue] : placeholder }}
    </div>
    <div
      class="common-select-body"
    >
      <div
        class="common-select-item"
        v-for="item in list"
        :key="item.key"
        @click="select(item)"
      >{{ item[textValue] }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CommonSelect',
  data: () => ({
    open: false,
    value: null as any,
  }),
  components: {},
  props: {
    list: {
      type: Array<any>,
      default: () => [],
    },
    defaultValue: {
      type: Object,
      default: () => {},
    },
    placeholder: {
      type: String,
      default: 'Выберите значение из списка',
    },
    textValue: {
      type: String,
      default: 'title',
    },
    idValue: {
      type: String,
      default: 'id',
    },
  },
  computed: {},
  methods: {
    select (element: any) {
      this.value = element
      this.$emit('select', element)
    },
    openSelect () {
      this.open = !this.open
    },
  },
  mounted () {
    if (this.defaultValue) {
      this.value = this.defaultValue
    }
  },
})
</script>

<style lang="scss">
.common-select {
  position: relative;
  max-width: 300px;
  width: 100%;
  height: 40px;
  border-radius: 4px;
  overflow: hidden;
  transition: all .2s;
  margin: 10px 0;
  cursor: pointer;

  &.open {
    overflow: visible;

    .common-select-header {
      border: 1px solid var(--primary-color);
    }
  }

  &-header {
    height: 40px;
    padding: 10px;
    border: 1px solid var(--border-color);
  }

  &-body {
    width: 100%;
    position: absolute;
    border: 1px solid var(--border-color);
    border-radius: 0 0 4px 4px;
    overflow: hidden;
    z-index: 10;
  }

  &-item {
    background: var(--background-color);
    padding: 5px 10px;
    border-bottom: 1px dashed var(--border-color);
    transition: all .2s;

    &:last-child {
      border-bottom: none;
    }

    &:hover {
      color: var(--primary-color);
    }
  }
}
</style>
