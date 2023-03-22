<template>
  <div class="email">
    <div class="email-container">
      <div class="email-container-sidebar">
        <div style="padding: 20px;">
          <common-button
            text="Отправить"
            style="width: 100%; height: 40px;"
          />
        </div>
      </div>
      <div class="email-container-content">
        <div class="email-container-content-header"></div>
        <div class="email-container-content-body"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CommonButtonVue from 'widgets/common/CommonButton.vue'

const CommonButton: any = CommonButtonVue

export default defineComponent({
  name: 'EmailPage',
  data: () => ({}),
  components: { CommonButton, },
  props: {},
  computed: {},
  methods: {},
  mounted () {},
})
</script>

<style lang="scss">
$containerHeight: 550px;
.email {
  &-container {
    width: 100%;
    height: $containerHeight;

    box-shadow: var(--drop-shadow-color);
    background: var(--background-color);
    border-radius: 6px;

    &-sidebar {
      width: 255px;
      height: $containerHeight;
      border-right: 1px solid var(--border-color);
    }
  }
}
</style>
