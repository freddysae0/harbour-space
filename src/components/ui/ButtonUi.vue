<template>
  <!-- Static content -->
  <div v-if="staticContent">
    <button class="px-[38px] md:px-[40px] py-[16px] bg-primary w-fit">
      Apply Now
    </button>
  </div>

  <!-- According to API -->
  <div v-else>
    <button
      v-if="hasOccurred(HSData.scholarship.application_end_date)"
      class="px-[38px] md:px-[40px] py-[16px] bg-border w-fit cursor-auto"
    >
      Apply Now
    </button>
    <button
      v-if="!hasOccurred(HSData.scholarship.application_end_date)"
      class="px-[38px] md:px-[40px] py-[16px] bg-primary w-fit"
    >
      Apply Now
    </button>
  </div>
</template>

<script>
import { useStore } from "@/stores/index";

export default {
  name: "ButtonUi",
  setup() {
    const store = useStore();
    const HSData = store.HSData;
    const staticContent = store.staticContent;
    const timeUntil = store.timeUntil;
    const hasOccurred = store.hasOccurred;
    const setHSData = store.setHSData;

    return {
      HSData,
      staticContent,
      timeUntil,
      setHSData,
      hasOccurred,
    };
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
