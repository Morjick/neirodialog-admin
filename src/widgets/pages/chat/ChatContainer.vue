<template>
  <div
    class="chat-container"
  >
    <div class="chat-container-aside">
      <div class="chat-container-aside-header">
        <div class="user-picker-haed-avatar">
          <img
            :src="mainUser.avatar"
            alt=""
          >
        </div>
        <search
          style="width: 280px; margin-left: 20px;"
          @changeValue="find"
        />
      </div>
      <ul class="chat-container-aside-chats">
        <p class="chat-container-aside-chats-title">Чаты</p>
        <li
          class="chat-container-aside-chats-item"
          v-for="chat in chats"
          :key="chat.id"
          :class="{
            active: $route.query && Number($route.query.chatId) == chat.id
          }"
          @click="pushToChat(chat.id)"
        >
          <img
            :src="getImage(chat.avatar)"
            :class="{
              isImage: getImage(chat.avatar)
            }"
            alt=""
          >
          <div class="chat-container-aside-chats-item-text">
            <p>{{ chat.name }}</p>
            <span>
              <div v-if="chat.lastMessage">{{ chat.lastMessage?.sender.name }}: </div>
              {{ chat.lastMessage?.text || 'Сообщений пока нет' }}
            </span>
          </div>
        </li>

        <p class="chat-container-aside-chats-title">Контакты</p>
        <li
          class="chat-container-aside-chats-item"
          v-for="contact in contacts as ContactI[]"
          :key="contact.id"
          :class="{
            active: $route.query && Number($route.query.contactId) == contact.id
          }"
          @click="pushToContact(contact.id)"
        >
          <img
            :src="getImage(contact.avatar)"
            :class="{
              isImage: getImage(contact.avatar)
            }"
            alt=""
          >
          <span
            class="chat-container-aside-chats-item-isOnline"
            :class="{
              active: contact.online
            }"
          ></span>
          <div class="chat-container-aside-chats-item-text">
            <p>{{ contact.name }}</p>
            <span>
              <div
                v-if="contact.lastMessage || contact.messages.length"
              >
              {{
                contact.messages[contact.messages.length - 1].sender.id === profileId ?
                  'Вы: ' : `${contact.name}: `
              }}
             </div>
              {{
                contact.lastMessage?.text
                || contact.messages[contact.messages.length - 1].text
                || 'Сообщений пока нет'
              }}
            </span>
          </div>
        </li>
      </ul>
    </div>
    <div class="chat-container-content">
      <div
        class="chat-container-content-placehloder"
        v-if="!activeChat && !activeContact"
      >
        <img
          src="~/shared/assets/img/chats-icon.png"
          alt=""
        >
        <p>Выберите чат <br> или <span>создайте новый</span></p>
      </div>
      <chat-messager v-else />
    </div>
  </div>
</template>

<script lang="ts">
import { ChatI, ContactI } from 'pages/chat/chat.store'
import { defineComponent } from 'vue'
import CommonSearch from 'widgets/common/CommonSearch.vue'
import ChatMessagerVue from './ChatMessager.vue'

const search: any = CommonSearch
const ChatMessager: any = ChatMessagerVue

export default defineComponent({
  name: 'ChatContainer',
  data: () => ({
    noImage: require('shared/assets/img/noImage.png').default,
  }),
  components: { search, ChatMessager, },
  props: {},
  computed: {
    mainUser () {
      return this.$store.getters.getUser
    },
    chats (): ChatI[] {
      return this.$store.getters.getChats
    },
    contacts (): ContactI[] {
      return this.$store.getters.getContacts
    },
    activeChat () {
      return Number(this.$route.query.chatId) || null
    },
    activeContact () {
      return Number(this.$route.query.contactId) || null
    },
    profileId () {
      return this.$store.getters.getUser.id
    },
  },
  methods: {
    find (value: string) {
      return value
    },
    getImage (avatar?: string) {
      if (avatar && avatar.length) return avatar
      return this.noImage
    },
    pushToChat (id: number) {
      this.$router.push({
        path: this.$route.path,
        query: {
          chatId: id,
        },
      })
    },
    pushToContact (id: number) {
      this.$router.push({
        path: this.$route.path,
        query: {
          contactId: id,
        },
      })
    },
  },
  mounted () {},
})
</script>

<style lang="scss">
.chat-container {
  display: flex;

  width: 100%;
  height: 490px;

  background: var(--background-color);
  box-shadow: var(--drop-shadow-color);
  border-radius: 6px;
  overflow: hidden;

  &-aside {
    width: 360px;
    height: 100%;

    background: var(--background-alternative-color);
    border-right: 1px solid var(--border-color);
    overflow: hidden;
    flex-shrink: 0;

    &-header {
      display: flex;
      align-items: center;

      height: 70px;

      padding: 15px 20px;
      border-bottom: 1px solid var(--border-color);
    }

    &-chats {
      display: flex;
      flex-direction: column;
      height: calc(100% - 70px);

      overflow-y: auto;

      &-title {
        color: var(--primary-color);
        margin: 10px 20px;
        font-size: 20px;
        font-weight: bold;
      }

      &-item {
        display: flex;
        position: relative;

        padding: 10px;

        cursor: pointer;
        transition: all .2s;

        &:hover, &.active {
          background: var(--border-color);
        }

        &-isOnline {
          display: block;
          position: absolute;
          left: 48px;
          top: 48px;

          width: 12px;
          height: 12px;

          background: var(--of-color);
          border: 1px solid var(--background-color);
          border-radius: 50%;
          z-index: 10;

          &.active {
            background: var(--accept-color);
          }
        }

        img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        &-text {
          flex-shrink: 0;
          margin-left: 10px;

          span, p {
            display: block;
            width: 250px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: var(--font-subtext-color);

            div {
              display: inline-block;
            }
          }

          p {
            font-weight: bold;
            color: var(--font-color);
          }
        }
      }
    }
  }

  &-content {
    position: relative;

    width: 100%;

    &-placehloder {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;

      width: 100%;

      img {
        width: 120px;
        opacity: .5;
      }

      p {
        margin-top: 10px;
        text-align: center;

        span {
          color: var(--primary-color);
          cursor: pointer;
        }
      }
    }
  }
}
</style>
