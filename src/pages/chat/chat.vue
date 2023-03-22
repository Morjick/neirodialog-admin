<template>
  <div class="chat">
    <chat-container />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ChatContainerVue from 'widgets/pages/chat/ChatContainer.vue'

const ChatContainer: any = ChatContainerVue

export default defineComponent({
  name: 'ChatPage',
  data: () => ({}),
  components: { ChatContainer, },
  props: {},
  computed: {},
  methods: {},
  mounted () {},
})
</script>

<style lang="scss">
// .chat {}
</style>
