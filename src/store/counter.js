import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state() {
    return {
      counter: 666,
    };
  },
  actions: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
    // async fetchCounterData() {
    // let res = await axios.get()
    // }
  },
});
