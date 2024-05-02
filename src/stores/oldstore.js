import { reactive } from 'vue'

export const oldstore = reactive({
  clickcount: 0,
  totalvalue: 1,
  increment() {
    this.clickcount++
  }
})