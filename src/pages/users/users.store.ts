interface userI {
  name: string
  role: string
  online: boolean
  id: number
  avatar?: string
}

interface UserState {
  mainUser: userI
  otherProfiles: userI[]
}

const mainUser: userI = {
  id: 1,
  name: 'Matvey Khramov',
  role: 'Root',
  online: true,
  /* eslint-disable */
  avatar: 'https://sun1-84.userapi.com/s/v1/ig2/MP5DXhCl8K9sAa30lscL1I0P10aJLqYsmTukyP9a5JQLiUyvd0GRqEaJx0C8JSwG7_Nj3hnG1XqywXM0n5F7QIKP.jpg?size=50x0&quality=96&crop=576,0,1535,1535&ava=1'
}

const users: userI[] = [
  {
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
  },
]

const UserStore = {
  state: (): UserState => ({
    mainUser,
    otherProfiles: users,
  }),
  getters: {
    getUser (state: UserState): userI {
      return state.mainUser
    },
    getOtherProfiles (state: UserState): userI[] {
      return state.otherProfiles
    },
  },
}

export {
  type userI,
  UserStore
}
