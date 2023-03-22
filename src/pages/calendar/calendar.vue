<template>
  <div class="calendar">
    <div class="calendar-container">
      <div class="calendar-container-sidebar">
        <div class="calendar-container-sidebar-header">
          <common-button
            class="calendar-container-sidebar-header-button"
            text="Добавить событие"
          />
        </div>
        <div class="calendar-container-sidebar-filters">
          <p>Фильтры:</p>
        </div>
      </div>
      <div class="calendar-container-body">
        <calendar-component />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CommonButtonVue from 'widgets/common/CommonButton.vue'
import CalendarComponentVue from 'widgets/pages/calendar/Calendar.vue'

const CommonButton: any = CommonButtonVue
const CalendarComponent: any = CalendarComponentVue

export default defineComponent({
  name: 'CalendarPage',
  data: () => ({}),
  components: { CommonButton, CalendarComponent, },
  props: {},
  computed: {},
  methods: {},
  mounted () {},
})
</script>

<style lang="scss">
$sidebarMinHeight: 550px;
$sidebarPadding: 20px;

.calendar {
  width: 100%;
  min-height: $sidebarMinHeight;

  background: var(--background-color);
  box-shadow: var(--drop-shadow-color);
  border-radius: 6px;
  overflow: hidden;

  &-container {
    display: flex;

    &-sidebar {
      width: 300px;
      height: $sidebarMinHeight;

      border-right: 1px solid var(--border-color);
      flex-shrink: 0;

      &-header {
        padding: $sidebarPadding;
        border-bottom: 1px solid var(--border-color);
        height: 80px;

        &-button {
          width: 100%;
          height: 40px;
        }
      }

      &-filters {
        padding: $sidebarPadding;

        p {
          text-transform: uppercase;
          letter-spacing: 1px;
        }
      }
    }

    &-body {
      width: 100%;
    }
  }
}
</style>
