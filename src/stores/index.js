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
    hasOccurred(date) {
      return this.timeUntil(date)[0] == "-";
    },
    timeUntil(targetDateString) {
      const targetDate = new Date(targetDateString);
      const now = new Date();

      const diffInMs = targetDate - now;
      const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diffInMs % (1000 * 60)) / 1000);

      return `${days} Day : ${hours} Hrs : ${minutes} Min : ${seconds} Seg`;
    },
    formatDate(dateString) {
      const date = new Date(dateString);

      const day = date.getDate();
      const month = date.toLocaleString("default", { month: "long" });
      const year = date.getFullYear();

      return `${day} ${month} ${year}`;
    },
    formatDateWithAddedYears(dateString, yearsToAdd) {
      const date = new Date(dateString);

      date.setFullYear(date.getFullYear() + yearsToAdd);

      const day = date.getDate();
      const month = date.toLocaleString("default", { month: "long" });
      const year = date.getFullYear();

      return `${day} ${month} ${year}`;
    },
  },
});
