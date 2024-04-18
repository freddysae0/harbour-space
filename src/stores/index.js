import { defineStore } from "pinia";

export const useStore = defineStore({
  id: "store",
  state: () => ({
    HSData: {},
    staticContent: true,
  }),
  getters: {
    getHSData() {
      return this.HSData;
    },
    getStaticContent() {
      return this.staticContent;
    },
  },
  actions: {
    setHSData(item) {
      this.HSData = item;
    },
    setStaticContent(item) {
      this.staticContent = item;
    },
  },
});
