import { type userI } from 'pages/users/users.store'

enum PriorityEnum {
  low = 'low',
  medium = 'medium',
  hight = 'hight'
}

enum TodoSort {
  default = 'default',
  status = 'status',
  priority = 'priority'
}

interface Todo {
  kanban: string
  id: number
  title: string
  implementer: userI
  status: string
  priority: PriorityEnum
  body?: string
  statusId: number
}

const mainUser: userI = {
  id: 1,
  name: 'Matvey Khramov',
  role: 'Root',
  online: true,
  /* eslint-disable */
  avatar: 'https://sun1-84.userapi.com/s/v1/ig2/MP5DXhCl8K9sAa30lscL1I0P10aJLqYsmTukyP9a5JQLiUyvd0GRqEaJx0C8JSwG7_Nj3hnG1XqywXM0n5F7QIKP.jpg?size=50x0&quality=96&crop=576,0,1535,1535&ava=1'

}

const list: Todo[] = [
  {
    id: 1,
    kanban: 'Create',
    title: 'Создать сайт',
    status: 'Поставлено',
    priority: PriorityEnum.hight,
    implementer: mainUser,
    statusId: 1
  },
  {
    id: 2,
    kanban: 'Create',
    title: 'Опубликовать сайт',
    status: 'На паузе',
    priority: PriorityEnum.medium,
    implementer: mainUser,
    statusId: 2
  },
  {
    id: 3,
    kanban: 'Create',
    title: 'Создать список задач',
    status: 'В работе',
    priority: PriorityEnum.low,
    implementer: mainUser,
    statusId: 3
  },
  {
    id: 4,
    kanban: 'Create',
    title: 'Создать список задач',
    status: 'Выполнено',
    priority: PriorityEnum.low,
    implementer: mainUser,
    statusId: 4
  },
]

const todoStore = {
  state: () => ({
    list,
  }),
  getters: {
    getList (): Todo[] {
      return list
    },
    getTodo (id: number): Todo {
      const todo: Todo = list.find(el => el.id === id) as Todo

      return todo
    },
  },
}

export {
  todoStore,
  PriorityEnum,
  TodoSort,
  type Todo
}
