import { type userI } from 'pages/users/users.store'
import messagesArr from 'temp/messages'
import usersArr from 'temp/users'

interface MessageI {
  text: string
  sender: userI
}

interface ContactI extends userI {
  messagesCount?: MessageI[]
  lastMessage?: MessageI
  messages: MessageI[]
}

interface ChatI {
  id: number
  members: userI[]
  name: string
  lastMessage?: MessageI
  avatar?: string
}

interface StateI {
  chats: ChatI[]
  contacts: ContactI[]
  messages: MessageI[]
}

const messages: MessageI[] = messagesArr.map((el: any): MessageI => {
  const randomCount = Math.floor(Math.random() * usersArr.length)

  const sender = {
    ...usersArr[randomCount],
    role: 'USER',
    online: Math.floor(Math.random() * 1) ? 1 : 0,
  }
  return {
    ...el,
    sender,
  }
})
const contacts: ContactI[] = usersArr.map((el: any): ContactI => {
  return {
    ...el,
    role: 'USER',
    online: Math.floor(Math.random() * 2) ? 1 : 0,
    messages,
  }
})
const chats: ChatI[] = [
  {
    id: 1,
    name: 'Lol Chat',
    /* eslint-disable */
    avatar: 'https://sun1-89.userapi.com/s/v1/ig2/OMoaxul81_4ylHV3IRNTBFkTJ6ExMTFvCZurva8sX9zdbEaD25R4dCPeBClCAk-HToaCemWPXLx_-kCAy1DHxFAN.jpg?size=50x0&quality=96&crop=6,231,373,373&ava=1',
    lastMessage: {
      text: 'Простите, сегодня не смогу прийти, потому что я ла-ла-ла-ла-ла-ла-ла-ла',
      sender: {
        id: 234,
        name: 'Elena Khramova',
        role: 'Admin',
        online: false,
        /* eslint-disable */
        avatar: 'https://sun1-84.userapi.com/s/v1/ig2/MP5DXhCl8K9sAa30lscL1I0P10aJLqYsmTukyP9a5JQLiUyvd0GRqEaJx0C8JSwG7_Nj3hnG1XqywXM0n5F7QIKP.jpg?size=50x0&quality=96&crop=576,0,1535,1535&ava=1'
      },
    },
    members: [{
      id: 234,
      name: 'Elena Khramova',
      role: 'Admin',
      online: false,
      /* eslint-disable */
      avatar: 'https://sun1-84.userapi.com/s/v1/ig2/MP5DXhCl8K9sAa30lscL1I0P10aJLqYsmTukyP9a5JQLiUyvd0GRqEaJx0C8JSwG7_Nj3hnG1XqywXM0n5F7QIKP.jpg?size=50x0&quality=96&crop=576,0,1535,1535&ava=1'
    },
    {
      id: 321,
      name: 'Ivan Khramov',
      role: 'Admin',
      online: false,
      /* eslint-disable */
      avatar: 'https://sun1-84.userapi.com/s/v1/ig2/MP5DXhCl8K9sAa30lscL1I0P10aJLqYsmTukyP9a5JQLiUyvd0GRqEaJx0C8JSwG7_Nj3hnG1XqywXM0n5F7QIKP.jpg?size=50x0&quality=96&crop=576,0,1535,1535&ava=1'
    },]
  },
  {
    id: 2,
    name: 'Only Work',
    members: [{
      id: 234,
      name: 'Elena Khramova',
      role: 'Admin',
      online: false,
      /* eslint-disable */
      avatar: 'https://sun1-84.userapi.com/s/v1/ig2/MP5DXhCl8K9sAa30lscL1I0P10aJLqYsmTukyP9a5JQLiUyvd0GRqEaJx0C8JSwG7_Nj3hnG1XqywXM0n5F7QIKP.jpg?size=50x0&quality=96&crop=576,0,1535,1535&ava=1'
    },
    {
      id: 321,
      name: 'Ivan Khramov',
      role: 'Admin',
      online: false,
      /* eslint-disable */
      avatar: 'https://sun1-84.userapi.com/s/v1/ig2/MP5DXhCl8K9sAa30lscL1I0P10aJLqYsmTukyP9a5JQLiUyvd0GRqEaJx0C8JSwG7_Nj3hnG1XqywXM0n5F7QIKP.jpg?size=50x0&quality=96&crop=576,0,1535,1535&ava=1'
    },]
  },
]

const ChatStore = {
  state: (): StateI => ({
    chats,
    contacts,
    messages
  }),
  getters: {
    getChats (state: StateI): ChatI[] {
      return state.chats
    },
    getContacts (state: StateI): ContactI[] {
      return state.contacts
    },
    getMessagesInChat (state: StateI) {
      return state.messages
    },
    getChat (state: StateI) {
      return state.chats.map( (el: any) => {
        return {
          ...el,
          messages: state.messages
        }
      })
    }
  },
  actions: {
    // getChat ({ state: StateI }: any, id: number) {
    //   return chats.find(el => el.id === id)
    // }
  }
}

export {
  type MessageI,
  type ContactI,
  type ChatI,
  ChatStore
}
