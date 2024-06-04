import { defineStore } from "pinia";

interface Counter {
  id: number;
  name: string;
  count: number;
}

export const useCounterStore = defineStore("counters", {
  state: () => ({
    counterList: [] as Counter[],
  }),
  getters: {
    getAllCounters: (state) => state.counterList,
    getSingleCounter:
      (state) =>
      (id: number): Counter | undefined =>
        state.counterList.find((counter) => counter.id === id),
  },
  actions: {
    increment(id: number): boolean {
      const counter = this.findCounter(id);
      if (counter) {
        counter.count++;
        return true;
      }
      return false;
    },
    decrement(id: number): boolean {
      const counter = this.findCounter(id);
      if (counter) {
        counter.count--;
        return true;
      }
      return false;
    },
    pushNewCounter(newName: string) {
      const newCounter: Counter = {
        id: this.counterList.length,
        name: newName,
        count: 0,
      };
      this.counterList.push(newCounter);
      return newCounter;
    },
    removeCounter(id: number) {
      const counter = this.findCounter(id);
      if (!counter) {
        return false;
      }
      const index = this.counterList.indexOf(counter);
      this.counterList.splice(index, 1);
      return true;
    },
    findCounter(id: number): Counter | false {
      const counter = this.$state.counterList.find(
        (counter) => counter.id === id
      );
      if (counter) {
        return counter;
      }
      return false;
    },
  },
});
