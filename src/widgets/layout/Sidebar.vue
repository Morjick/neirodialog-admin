<template>
  <aside class="sidebar">
    <div class="sidebar-header">Neirodialog Amin</div>
    <div class="sidebar-body">
      <router-link
        v-for="link in menu"
        :key="link.path"
        :to="link.path"
        class="sidebar-body-link"
        :class="{
          active: $route && link.path == $route.path
        }"
      >
        {{ link.title }}
      </router-link>
    </div>

  </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface MenuItem {
  icon?: string
  title: string
  path: string
}

const menu: MenuItem[] = [
  {
    title: 'Аналитика',
    path: '/',
  },
  {
    title: 'Email',
    path: '/email',
  },
  {
    title: 'Чат',
    path: '/chat',
  },
  {
    title: 'Список дел',
    path: '/todo',
  },
  {
    title: 'Календарь событий',
    path: '/calendar',
  },
  {
    title: 'Пользователи',
    path: '/users',
  },
  {
    title: 'Менеджмент',
    path: '/managment',
  },
  {
    title: 'Продукты',
    path: '/product',
  },
  {
    title: 'Обучение',
    path: '/learn',
  },
  {
    title: 'Скидки и промокоды',
    path: '/sales',
  },
  {
    title: 'Ссылки и соц. сети',
    path: '/social',
  },
]

export default defineComponent({
  name: 'SidebarComponent',
  data: () => ({
    menu,
  }),
  components: {},
  props: {},
  computed: {},
  methods: {},
  mounted () { },
})
</script>

<style lang="scss">
.sidebar {
  max-width: 260px;
  width: 100%;
  height: 100vh;

  padding: 25px 15px;
  background: var(--background-alternative-color);
  box-shadow: var(--drop-shadow-color);
  flex-shrink: 0;

  &-header {
    color: var(--primary-color);
    font-weight: 700;
    font-size: 24px;
    text-align: center;
    text-shadow: 0 0 2px var(--primary-color);
    pointer-events: none;
  }

  &-body {
    margin: 30px 0;

    &-link {
      display: block;
      width: 100%;
      height: 40px;

      padding: 10px 20px;
      margin-bottom: 2px;

      cursor: pointer;
      transition: all .4s;
      border-radius: 5px;

      &:hover {
        background: var(--primary-gradient);
        color: var(--font-alternative-color);
      }

      &:last-child {
        margin-bottom: 0;
      }

      &.active {
        background: var(--primary-gradient);
        color: var(--font-alternative-color);
      }
    }
  }
}
</style>
