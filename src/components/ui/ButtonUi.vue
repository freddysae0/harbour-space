<template>
  <button
    v-if="
      timeUntil(HSData.scholarship.application_end_date)[0] == '-' &&
      !staticContent
    "
    class="px-[38px] md:px-[40px] py-[16px] bg-border w-fit cursor-auto"
  >
    Apply Now
  </button>
  <button
    v-if="
      !timeUntil(HSData.scholarship.application_end_date)[0] == '-' ||
      staticContent
    "
    class="px-[38px] md:px-[40px] py-[16px] bg-primary w-fit"
  >
    Apply Now
  </button>
</template>

<script>
import { useStore } from "@/stores/index";

export default {
  name: "ButtonUi",
  setup() {
    const store = useStore();
    // Acceder al estado directamente
    const HSData = store.HSData;
    const staticContent = store.staticContent;
    // Acceder a las acciones directamente
    const setHSData = store.setHSData;

    return {
      HSData,
      staticContent,
      setHSData,
    };
  },
  data: () => {
    return {};
  },
  methods: {
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
  },
};
</script>

<style lang="scss" scoped>
button {
  font-family: "Apercu Pro";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  /* identical to box height, or 133% */
  text-align: center;
  letter-spacing: -0.18px;
  border-radius: 50px;
  color: #ffffff;
}
</style>
