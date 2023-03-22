<template>
  <div
    @click="openPicker"
    class="user-picker"
  >
    <div class="user-picker-haed">
      <div class="user-picker-haed-info">
        <p>{{ user.name }}</p>
        <span>{{ user.role }}</span>
      </div>
      <div class="user-picker-haed-avatar">
        <img
          :src="user.avatar"
          alt=""
        >
      </div>
    </div>
    <div
      class="user-picker-body"
      :class="{
        active: activePicker
      }"
    >
      <div class="user-picker-haed-info user-picker-body-list">
        <div
          v-for="user in userList"
          :key="user.id"
          class="user-picker-body-list-item"
        >
        <div class="user-picker-haed-info">
          <p>{{ user.name }}</p>
          <span>{{ user.role }}</span>
        </div>
        <div class="user-picker-haed-avatar">
          <img
            src="~/shared/assets/img/avatar.png"
            alt=""
          >
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { userI } from 'pages/users/users.store'

export default defineComponent({
  name: 'UserPicker',
  data: () => ({
    activePicker: false,
  }),
  components: {},
  props: {},
  computed: {
    userList (): userI[] {
      return this.$store.getters.getOtherProfile
    },
    user (): userI {
      return this.$store.getters.getUser
    },
  },
  methods: {
    openPicker () {
      this.activePicker = true

      setTimeout(() => {
        this.activePicker = false
      }, 1000)
    },
  },
  mounted () {},
})
</script>

<style lang="scss">
.user-picker {
  position: relative;
  width: 170px;

  margin-left: 15px;

  &-haed {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    &-info {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: end;
      flex-shrink: 0;

      p {
        font-size: 14px;
        color: var(--font-alternative-subtext-color);
      }

      span {
        color: var(--font-subtext-color);
        font-size: 12px;
      }
    }

    &-avatar {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 40px;
      height: 40px;

      border-radius: 50%;
      box-shadow: var(--drop-shadow-color);
      flex-shrink: 0;
      overflow: hidden;

      img {
        height: 100%;
        border-radius: 50%;
      }
    }
  }

  &-body {
    position: absolute;
    top: 60px;

    width: 100%;

    background: var(--background-alternative-color);
    box-shadow: var(--drop-shadow-color);
    border-radius: 6px;
    overflow: hidden;
    transition: all .2s;

    opacity: 0;
    pointer-events: none;
    transform: translateY(-10px);

    &:hover, &.active {
      opacity: 1;
      pointer-events: all;
      transform: translateY(0);
    }

    &-list {
      &-item {
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 100%;
        padding: 5px 10px 5px;
        border-bottom: 1px dashed var(--primery-opacity-color);

        transition: all .2s;
        cursor: pointer;

        &:hover {
          background: var(--background-color);
        }

        &:last-child {
          border-bottom: none;
        }
      }
    }
  }
}
</style>
