<template>
  <div class="users">{{ users }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UsersPage',
  data: () => ({}),
  components: {},
  props: {},
  computed: {
    users () {
      return this.$store.getters.getManyUsers
    },
  },
  methods: {
    async getManyUsers () {
      const users = await this.axios.get('auth/get-many')

      console.log(users)
    },
  },
  mounted () {
    this.getManyUsers()
  },
})
</script>

<style lang="scss">
// .users {}
</style>
