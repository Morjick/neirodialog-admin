<template>
  <div class="chat-messager">
    <div class="chat-messager-header">
      <img
        :src="getImage(chat.avatar)"
        alt=""
      >
      <div class="chat-messager-header-info">
        <p>{{ chat.name }}</p>
        <span v-if="chat.members">{{ chat.members.length }} участников</span>
      </div>
    </div>
    <ul
      class="chat-messager-body"
      ref="messagesContainer"
    >
      <li
        v-for="message in chat.messages"
        :key="message.id"
        :class="{
          yourMessage: message.sender && message?.sender.id == profileId
        }"
      >
        <img
          :src="getAvatar(message.sender.avatar)"
          alt=""
        >
        <div>
          <p>{{ message.sender.name }}</p>
          {{ message.text }}
        </div>
      </li>
    </ul>
    <div class="chat-messager-footer">
      <textarea
        type="text"
        placeholder="Введите своё сообщение"
        v-model="messageValue"
      ></textarea>
      <common-button
        text="отправить"
        style="height: 80%; padding: 0 10px;"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CommonButtonVue from 'widgets/common/CommonButton.vue'

const CommonButton: any = CommonButtonVue

export default defineComponent({
  name: 'ChatMessager',
  data: () => ({
    noImage: require('shared/assets/img/noImage.png').default,
    noAvatar: require('shared/assets/img/avatar.png').default,
    messageValue: '',
  }),
  components: { CommonButton, },
  props: {
    chatId: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    chat () {
      const chat = this.$store.getters.getChat
        .find((el: any) => el.id === Number(this.$route.query.chatId))

      if (chat) return chat

      const contact = this.$store.getters.getContacts
        .find((el: any) => el.id === Number(this.$route.query.contactId))

      if (contact) return contact

      return 1
    },
    profileId () {
      return this.$store.getters.getUser.id
    },
  },
  methods: {
    getImage (avatar?: string) {
      if (avatar && avatar.length) return avatar
      return this.noImage
    },
    getAvatar (avatar?: string) {
      if (avatar && avatar.length) return avatar
      return this.noAvatar
    },
    scrollChatContainer () {
      const container: any = this.$refs.messagesContainer
      container.scrollTop = container.scrollHeight
    },
  },
  mounted () {
    this.scrollChatContainer()
  },
})
</script>

<style lang="scss">
.chat-messager {
  display: flex;
  flex-direction: column;
  background: var(--background-color);

  &-header {
    display: flex;
    align-items: center;

    width: 100%;
    height: 70px;

    padding: 10px;
    border-bottom: 1px solid var(--border-color);

    img {
      max-width: 50px;
      border-radius: 50%;
    }

    &-info {
      height: 100%;
      margin-left: 10px;

      p {
        font-weight: bold;
      }
    }
  }

  &-body {
    height: calc(490px - 150px);
    padding: 10px;
    overflow: hidden;
    overflow-y: auto;
    margin-bottom: 10px;

    li {
      display: flex;
      max-width: 300px;
      margin-bottom: 40px;

      img {
        width: 50px;
        height: 50px;

        border-radius: 50%;
        background: var(--border-color);

        margin-right: 15px;
        flex-shrink: 0;
      }

      div {
        box-shadow: var(--drop-shadow-color);
        background: var(--background-color);
        padding: 10px;
        border-radius: 5px;
        overflow: hidden;

        p {
          margin-bottom: 5px;
          font-weight: bold;
        }
      }

      &:last-child {
        margin-bottom: 0;
      }

      &.yourMessage {
        margin-left: auto;
        flex-direction: row-reverse;

        img {
          margin-right: 0;
          margin-left: 15px;
        }

        div {
          background: var(--primary-gradient);
          color: var(--font-alternative-color);

          p {
            color: var(--font-alternative-color);
          }
        }
      }
    }
  }

  &-footer {
    display: flex;
    align-items: center;

    width: calc(100% - 40px);
    height: 50px;

    margin: 0 auto;
    background: var(--background-alternative-color);
    box-shadow: var(--drop-shadow-color);
    border-radius: 10px;

    input, textarea {
      width: 700px;
      height: 100%;
      padding: 14px 20px;
      resize: none;
    }

    button {
      margin: 0 auto;
    }
  }
}
</style>
