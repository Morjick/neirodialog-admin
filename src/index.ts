import { router, store } from 'app'
import { createApp, h } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import CKEditor from '@ckeditor/ckeditor5-vue'
import './shared/assets/styles/main.scss'

const AUTH_TOKEN = localStorage.getItem('neirodialog-admin-token')

const app = createApp({
  render: () => h(App),
})

axios.defaults.baseURL = 'http://localhost:8080/'
axios.interceptors.response.use(
  (response: any) => {
    return response.data
  },
  async (error: any) => {
    return await Promise.reject(error)
  }
)

if (AUTH_TOKEN) {
  axios.defaults.headers.common.Authorization = `Bearer ${AUTH_TOKEN}`
}

app.use(router)
app.use(store)
app.use(VueAxios, axios)
app.use(CKEditor)

app.mount('#app')
