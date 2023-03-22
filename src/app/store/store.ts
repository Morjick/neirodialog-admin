import { ChatStore } from 'pages/chat/chat.store'
import { productStore } from 'pages/products/products.store'
import { todoStore } from 'pages/todo/todo.store'
import { UserStore } from 'pages/users/users.store'
import { createStore } from 'vuex'

const store = createStore({
  modules: {
    users: UserStore,
    todo: todoStore,
    chat: ChatStore,
    products: productStore,
  },
})

export default store
