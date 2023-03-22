<template>
  <div class="todo">
    <todo-list />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import TodoListVue from 'widgets/pages/todo.vue'

const TodoList: any = TodoListVue

export default defineComponent({
  name: 'TodoPage',
  data: () => ({}),
  components: { 'todo-list': TodoList, },
  props: {},
  computed: {},
  methods: {},
  mounted () {},
})
</script>

<style lang="scss">
.todo {
  background: var(--background-alternative-color);
  box-shadow: var(--drop-shadow-color);
  border-radius: 6px;
  padding: 20px;
}
</style>
