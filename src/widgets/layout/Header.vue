<template>
  <div class="header">
    <div class="header-inner">
      <div class="header-inner-navigation">
        <router-link
          v-for="link in navigation"
          :key="link.path"
          :to="link.path"
        >
          <img
            :src="link.icon"
            alt=""
          >
        </router-link>
      </div>
      <div class="header-inner-navigation">
        <router-link
          v-for="link in navigationRight"
          :key="link.path"
          :to="link.path"
          :class="{
            'invert-item': link.path == '/notification'
          }"
        >
          <img
            :src="link.icon"
            alt=""
          >
          <span
            v-if="link.items"
          >{{ link.items }}</span>
        </router-link>
        <user-picker />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UserPickerVue from './UserPicker.vue'
const UserPicker: any = UserPickerVue

interface HeaderNavigationItem {
  icon: string
  path: string
  items?: number
}

const navigation: HeaderNavigationItem[] = [
  {
    path: '/todo',
    icon: require('shared/assets/img/todo.png').default,
  },
  {
    path: '/chat',
    icon: require('shared/assets/img/chat.png').default,
  },
  {
    path: '/email',
    icon: require('shared/assets/img/email.png').default,
  },
  {
    path: '/calendar',
    icon: require('shared/assets/img/calendar.png').default,
  },
  {
    path: '/favorite',
    icon: require('shared/assets/img/favorite.png').default,
  },
]

const navigationRight: HeaderNavigationItem[] = [
  {
    path: '/basket',
    icon: require('shared/assets/img/basket.png').default,
    items: 8,
  },
  {
    path: '/notification',
    icon: require('shared/assets/img/notification.png').default,
    items: 4,
  },
]

export default defineComponent({
  name: 'HeaderComponent',
  data: () => ({
    navigation,
    navigationRight,
  }),
  components: {
    'user-picker': UserPicker,
  },
  props: {},
  computed: {},
  methods: {},
  mounted () {},
})
</script>

<style lang="scss">
.header {
  width: 100%;

  // margin: 30px 30px 0 30px;
  padding: 20px 30px 0;

  &-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 60px;

    border-radius: 6px;
    background: var(--background-alternative-color);
    box-shadow: var(--drop-shadow-color);
    padding: 0 20px;

    &-navigation {
      display: flex;
      align-items: center;

      a {
        width: 20px;
        height: 20px;
        margin-right: 14px;
        position: relative;

        span {
          display: flex;
          align-items: center;
          justify-content: center;

          position: absolute;
          top: -7px;
          right: -7px;

          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: var(--primary-color);
          color: var(--font-alternative-color);
          font-size: 12px;
        }

        &:last-child {
          margin-right: 0;
        }

        &.invert-item {
          span {
            background: var(--danger-color);
          }
        }
      }
    }
  }
}
</style>
