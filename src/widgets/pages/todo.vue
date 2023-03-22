<template>
  <div class="todo-list">
    <div class="todo-list-header">
      <h1>Список задач</h1>
      <common-button text="Создать задачу" />
    </div>
    <div class="todo-list-body">
      <div
        class="todo-list-body-item"
        v-for="item in list"
        :key="item.id"
      >
        <span class="href">{{ item.kanban }}-{{ item.id }}</span>
        <span class="title">{{ item.title }}</span>
        <span
          class="priority"
          :class="{
            'hight': item.priority == 'hight',
            'medium': item.priority == 'medium',
            'low': item.priority == 'low',
          }"
        ></span>
        <img
          :src="item.implementer.avatar"
          alt=""
        >
        <span
          class="status"
          :class="{
            done: item.statusId == 4,
            pause: item.statusId == 2
          }"
        >{{ item.status }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Todo } from 'pages/todo/todo.store'
import { defineComponent } from 'vue'
import CommonButton from 'widgets/common/CommonButton.vue'

export default defineComponent({
  name: 'TodoList',
  data: () => ({
    list: [] as Todo[],
  }),
  components: { CommonButton, },
  props: {},
  computed: {},
  methods: {
    getTodoList () {
      this.list = this.$store.getters.getList as Todo[]
    },
  },
  mounted () {
    this.getTodoList()
  },
})
</script>

<style lang="scss">
.todo-list-header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 0 10px;
}

.todo-list-body {
  display: flex;
  flex-direction: column;

  border: 1px solid var(--primery-opacity-color);
  padding: 5px;
  border-radius: 4px;
  overflow: hidden;

  &-item {
    display: flex;
    align-items: center;

    height: 40px;

    border-bottom: 1px dashed var(--primery-opacity-color);
    cursor: pointer;

    &:last-child {
      border-bottom: 0;
    }

    span {
      margin-right: 20px;

      &:last-child {
        margin-right: 0;
        margin-left: 20px;
      }
    }

    .href {
      width: 150px;
      cursor: pointer;
      color: var(--primary-color);
    }

    .title {
      width: 750px;
    }

    .priority {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: var(--primery-opacity-color);

      &.hight {
        background: var(--danger-color);
      }

      &.medium {
        background: var(--warning-color);
      }

      &.low {
        background: var(--low-color);
      }

      &.done {
        background: var(--accept-color);
      }
    }

    .status {
      display: flex;
      align-items: center;
      width: 100px;
      border-radius: 4px;
      padding: 2px;
      background: var(--font-subtext-color);
      color: var(--font-alternative-color);

      &.done {
        background: var(--accept-color);
      }

      &.pause {
        background: var(--warning-color);
      }
    }

    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
  }
}
</style>
