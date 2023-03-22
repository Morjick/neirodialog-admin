<template>
  <div class="default-layout">
    <sidebar />
    <main class="default-layout-window">
      <default-header />
      <div class="default-layout-window-body">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Sidebar from 'widgets/layout/Sidebar.vue'
import Header from 'widgets/layout/Header.vue'

const sidebar: any = Sidebar
const defaultHeader: any = Header

export default defineComponent({
  name: 'DefaultLayout',
  data: () => ({}),
  components: { sidebar, 'default-header': defaultHeader, },
  props: {},
  computed: {},
  methods: {},
  mounted () {},
})
</script>

<style lang="scss">
.default-layout {
  display: flex;
  width: 100vw;
  height: 100vh;

  overflow: hidden;

  &-window {
    width: calc(100vw - 230px);

    overflow-y: auto;

    &-body {
      width: calc(100% - 60px);
      min-height: 100px;
      margin: 30px 30px 0;
    }
  }
}
</style>
