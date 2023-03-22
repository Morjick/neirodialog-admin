<template>
  <section
    class="root"
    :class="theme"
  >
    <router-view />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppComponent',
  components: {},
  data () {
    return {
      theme: 'light',
    }
  },
  methods: {
    ESCapeListener (key: any) {
      if (!key.key) return
      if (key.key === 'Escape' && this.$route && this.$route.path === '/chat') {
        this.$router.push('/chat')
        return false
      }
    },
  },
  mounted () {
    addEventListener('keydown', this.ESCapeListener)
  },
})
</script>

<style lang="scss">
.root {
  background: var(--background-color);
}
</style>
