<template>
  <div class="auth-layout">
    <div class="auth-layout-aside">
      <div class="auth-layout-aside-content">
        <img
          src="~/shared/assets/img/auth.jpg"
          alt=""
        >
      </div>
    </div>
    <div class="auth-layout-container">
      <h1 class="auth-layout-container-title">Добро пожаловать в Неиродиалог!</h1>
      <p class="auth-layout-container-subtitle">Пожалуйста, подтвердите свою персону.</p>
      <common-input
        type="text"
        placeholder="Введите логин"
        v-model="login"
      />
      <common-input
        type="password"
        placeholder="Введите пароль"
        v-model="password"
        @enter="singIn"
      />
      <common-button
        text="Подтвердить"
        style="width: 100%; text-transform: uppercase;"
        @click="singIn"
      />
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import { defineComponent } from 'vue'
import CommonButtonVue from 'widgets/common/CommonButton.vue'
import CommonInputVue from 'widgets/common/CommonInput.vue'

const CommonInput: any = CommonInputVue
const CommonButton = CommonButtonVue

interface AuthResponse {
  token: string,
  ok: boolean,
  message: string
}

export default defineComponent({
  name: 'AuthLayout',
  data: () => ({
    login: '',
    password: '',
  }),
  components: {
    CommonInput,
    CommonButton,
  },
  props: {},
  computed: {},
  methods: {
    async singIn () {
      try {
        const response: AuthResponse = await this.axios.post('admin/admin-sing-in', {
          name: this.login,
          password: this.password,
        })

        if (response.ok) {
          this.$store.commit('setToken', response.token)
          localStorage.setItem('neirodialog-admin-token', response.token)
          axios.defaults.headers.common.Authorization = `Bearer ${response.token}`

          this.$router.push('/')
        } else {
          return false
        }
      } catch (e) {
      }
    },
  },
  mounted () {},
})
</script>

<style lang="scss">
.auth-layout {
  display: flex;
  align-items: center;
  padding: 40px 20px;
  height: 730px;

  &-aside {
    width: 980px;
    height: 100%;
    overflow: hidden;

    img {
      width: 100%;
      margin: 15px 0;
      border-radius: 8px;
    }
  }

  &-container {
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 450px;
    height: 95%;

    margin-left: auto;
    padding: 20px;
    box-shadow: var(--drop-shadow-color);
    border-radius: 8px;

    &-title {
      font-size: 34px;
      font-weight: bold;
      margin: 20px 0;
    }

    &-subtitle {
      font-size: 20px;
      margin-bottom: 20px;
    }

    .common-input {
      max-width: 100%;
      margin-bottom: 20px;
    }
  }
}
</style>
