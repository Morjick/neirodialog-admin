interface AuthStoreI {
  token: string | null
  isAuth: boolean
}

interface SingInI {
  name: string
  password: string
}

const authStore = {
  state: (): AuthStoreI => ({
    token: null,
    isAuth: false,
  }),
  getters: {
    getToken (state: AuthStoreI): string | null {
      return state.token
    },
  },
  actions: {},
  mutations: {
    setToken: (state: AuthStoreI, token: string) => {
      state.token = token
    },
  },
}

export {
  type AuthStoreI,
  authStore,
  type SingInI
}
