<template>
  <div class="calendar-body-container">
    <div class="calendar-body-container-header">
      <img
        src="~/shared/assets/img/arrow-left.png"
        alt=""
        @click="monthDecrement"
      >
      <img
        src="~/shared/assets/img/arrow-right.png"
        alt=""
        @click="monthIncrement"
      >
      <p>{{ months[nowMonthNumber] }} 2023</p>
    </div>
    <div class="calendar-body-container-body">
      <div class="calendar-body-container-body-days">
        <span
          v-for="dayOfWeek in daysOfWeek"
          :key="dayOfWeek"
        >{{dayOfWeek}}</span>
      </div>
      <div
        class="calendar-body-container-body-list"
        :style="{
          transform: `translateX(-${translateX}px)`
        }"
      >
        <div
          class="calendar-body-container-body-list-month"
          v-for="(monthOfCalendar, ind) in calendar"
          :id="months[monthOfCalendar[0].month]"
          :key="ind"
        >
          <div
            class="calendar-body-container-body-list-month-item"
            v-for="day in monthOfCalendar"
            :key="day.date"
            :class="{
              hidden: day.hidden
            }"
          >
            <span>{{ day.date }}</span>
            <div
              class="calendar-body-container-body-list-month-item-events"
            >
              <span
                v-if="day.events && day.events.length"
              >{{ day.events[0].title }}</span>
              <span
                v-if="day.events && day.events.length && day.events[1]"
              >{{ day.events[1].title }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface EventI {
  title: string
  desc: string
  month: number
  date: number
}

interface Day {
  date: number
  dayOfWeek: string
  dayOfWeekNumber: number
  month: number
  hidden: boolean
  events?: EventI[]
}

export default defineComponent({
  name: 'CalendarComponent',
  data: () => ({
    nowMonth: [] as Day[],
    daysOfWeek: [
      'понедельник',
      'вторник',
      'среда',
      'четверг',
      'пятница',
      'суббота',
      'воскресенье',
    ],
    months: [
      'январь',
      'февраль',
      'март',
      'апрель',
      'май',
      'июнь',
      'июль',
      'август',
      'сентярбрь',
      'октябрь',
      'ноябрь',
      'декабрь',
    ],
    calendar: [] as Day[][],
    nowMonthNumber: new Date().getMonth(),
    translateX: 925 * new Date().getMonth(),
    events: [
      {
        title: 'ОтображаюсьОтображаюсьОтображаюсьОтображаюсьОтображаюсьОтображаюсьОтображаюсь',
        month: 2,
        date: 10,
        desc: 'Нифинты',
      },
      {
        title: 'И я',
        month: 2,
        date: 10,
        desc: 'Нифинты',
      },
      {
        title: 'Хм-хм',
        month: 1,
        date: 12,
        desc: 'Нифинты',
      },
    ] as EventI[],
  }),
  components: {},
  props: {},
  computed: {},
  methods: {
    getNowMonth (month: number, year: number) {
      const daysInMonth = 32 - new Date(year, month, 32).getDate()
      let calendar: Day[] = []
      const events = this.events.filter(el => el.month === month)

      for (let i = 1; i <= daysInMonth; i++) {
        const dayOfWeek = new Date(year, month, i)
        const dayOfWeekNumber = dayOfWeek.getDay()
        const monthNumber = dayOfWeek.getMonth()

        const day: Day = {
          date: i,
          // dayOfWeek: this.daysOfWeek[dayOfWeek.getDay() - 1 > 0 ? dayOfWeek.getDay() - 1 : 6],
          dayOfWeek: this.daysOfWeek[dayOfWeek.getDay() - 1 ? dayOfWeek.getDay() - 1 : 6],
          dayOfWeekNumber,
          month: monthNumber,
          hidden: false,
          events: events.filter(el => el.date === i),
        }

        calendar.push(day)
      }

      if (calendar[0].dayOfWeekNumber !== 1) {
        const temp = []
        const length = calendar[0].dayOfWeekNumber > 0 ? calendar[0].dayOfWeekNumber : 7

        for (let j = 1; j < length; j++) {
          temp.push({
            date: j,
            dayOfWeek: 'none',
            dayOfWeekNumber: 0,
            month,
            hidden: true,
          })
        }
        calendar = [...temp, ...calendar, ]
      }

      return calendar
    },
    getCalendar () {
      const calendar = []

      for (let i = 0; i <= 12; i++) {
        const nowMonth = this.getNowMonth(i, 2023)
        calendar.push(nowMonth)
      }
      this.calendar = calendar
    },
    monthIncrement () {
      if (this.nowMonthNumber + 1 > 11) {
        this.nowMonthNumber = 0
        this.getTranslateXIntoMonth(this.nowMonthNumber)
        return
      }
      this.nowMonthNumber = this.nowMonthNumber + 1
      this.getTranslateXIntoMonth(this.nowMonthNumber)
    },
    monthDecrement () {
      if (this.nowMonthNumber - 1 < 0) {
        this.nowMonthNumber = 11
        this.getTranslateXIntoMonth(this.nowMonthNumber)
        return
      }
      this.nowMonthNumber = this.nowMonthNumber - 1
      this.getTranslateXIntoMonth(this.nowMonthNumber)
    },
    getTranslateXIntoMonth (month: number) {
      this.translateX = 925 * month
    },
  },
  mounted () {
    this.getCalendar()
  },
})
</script>

<style lang="scss">
.calendar-body-container {
  &-header {
    display: flex;
    align-items: center;

    width: 920px;
    height: 80px;

    padding: 20px;
    border-bottom: 1px solid var(--border-color);

    img {
      width: 30px;
      cursor: pointer;
      margin-right: 20px;
    }

    p {
      font-size: 22px;
      color: var(--font-bold-color);

      &::first-letter {
        text-transform: uppercase;
      }
    }
  }

  &-body {
    overflow: hidden;

    &-days {
      display: flex;
      align-items: center;
      justify-content: space-between;

      border-bottom: 1px solid var(--border-color);

      span {
        display: block;
        width: calc(100% / 7);
        text-align: center;
        border-right: 1px solid var(--border-color);
        padding: 5px 0;

        &::first-letter {
          text-transform: uppercase;
        }
      }
    }

    &-list {
      display: flex;
      transition: all .2s;

      &-month {
        display: flex;
        flex-wrap: wrap;
        flex-shrink: 0;

        width: 100%;
        height: 100%;
        transition: all .2s;

        &-item {
          position: relative;

          width: calc(100% / 7);
          height: calc((550px - 80px - 30px) / 5);

          border: 1px solid var(--border-color);
          padding: 5px;

          span {
            position: absolute;
            top: 5px;
            right: 5px;
          }

          &.hidden {
            // visibility: hidden;
            span {
              display: none;
            }
          }

          &-events {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;

            width: 100%;
            height: 100%;

            span {
              position: static;
              background: var(--warning-color);
              margin-bottom: 5px;
              border-radius: 2px;
              padding: 3px 5px;
              overflow: hidden;
              text-overflow: ellipsis;
              cursor: pointer;

              &:last-child {
                margin-bottom: 0;
              }
            }
          }
        }
      }
    }
  }
}
</style>
