import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";

interface Counter {
  id: string;
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
      (id: string): Counter | undefined =>
        state.counterList.find((counter) => counter.id === id),
  },
  actions: {
    increment(id: string): boolean {
      const counter = this.findCounter(id);
      if (counter) {
        counter.count++;
        return true;
      }
      return false;
    },
    decrement(id: string): boolean {
      const counter = this.findCounter(id);
      if (counter) {
        counter.count--;
        return true;
      }
      return false;
    },
    pushNewCounter(newName: string) {
      const newCounter: Counter = {
        id: uuidv4(),
        name: newName,
        count: 0,
      };
      this.counterList.push(newCounter);
      return newCounter;
    },
    removeCounter(id: string) {
      const counter = this.findCounter(id);
      if (!counter) {
        return false;
      }
      const index = this.counterList.indexOf(counter);
      this.counterList.splice(index, 1);
      return true;
    },
    findCounter(id: string): Counter | false {
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
