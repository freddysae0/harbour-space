<template>
  <section class="w-full max-w-[480px] flex flex-col gap-[30px]">
    <div class="flex lg:hidden gap-[5px] sm:gap-[8px] -mb-[20px]">
      <span class="powered-by">Powered by</span>
      <span class="powered-by-title">Zeptolab</span>
    </div>
    <img
      class="w-[62px] h-[62px] flex lg:hidden"
      :src="ZeptolabLogo"
      alt="Zeptolab Icon"
    />
    <div class="hidden lg:flex gap-[40px] items-center">
      <img :src="ZeptolabLogo" alt="Zeptolab Icon" />
      <div class="flex flex-col gap-[10px]">
        <span class="powered-by">Powered by</span>
        <span class="powered-by-title">Zeptolab</span>
      </div>
    </div>

    <!-- Static content -->
    <div
      v-if="staticContent"
      class="card px-[25px] sm:px-[40px] py-[25px] flex flex-col gap-4"
    >
      <h3 class="card-title">Application closes in</h3>
      <p class="card-date">6 Day : 22 Hrs : 56 Min : 13 Seg</p>
    </div>

    <!-- According to API -->
    <div v-else>
      <div
        v-if="hasOccurred(HSData.scholarship.application_end_date)"
        class="card px-[25px] sm:px-[40px] py-[25px] flex flex-col gap-4"
      >
        <h3 class="text-text-200 font-apercu">Application closed</h3>
      </div>
      <div
        v-if="!hasOccurred(HSData.scholarship.application_end_date)"
        class="card px-[25px] sm:px-[40px] py-[25px] flex flex-col gap-4"
      >
        <h3 class="card-title">Application closes in</h3>
        <p class="card-date">
          {{ timeUntil(HSData.scholarship.application_end_date) }}
        </p>
      </div>
    </div>

    <div
      class="card bg-white px-[25px] sm:px-[40px] p-[40px] flex h-fit relative"
    >
      <div class="flex flex-col w-full gap-[23px]">
        <div class="flex flex-col justify-center h-full min-h-[49px]">
          <h3 class="card-subtitle">Location</h3>

          <!-- Static content -->
          <p v-if="staticContent" class="card-text">Bangkok</p>
          <!-- According to API -->
          <p v-else class="card-text">
            {{ HSData.scholarship.location.name }}
          </p>
        </div>
        <div class="flex flex-col justify-center h-full min-h-[49px]">
          <h3 class="card-subtitle">Start date</h3>

          <!-- Static content -->
          <p v-if="staticContent" class="card-text">30 June 2020</p>
          <!-- According to API -->
          <p v-else class="card-text">
            {{ formatDate(HSData.scholarship.scholarship_start_date) }}
          </p>
        </div>
      </div>
      <div class="flex flex-col w-full gap-[23px] ml-[20%]">
        <div class="flex flex-col justify-center h-full min-h-[49px]">
          <h3 class="card-subtitle">Duration</h3>

          <!-- Static content -->
          <p v-if="staticContent" class="card-text">1 Year Full-Time</p>
          <!-- According to API -->
          <p v-else class="card-text">
            {{ HSData.scholarship.duration }} Year Full-Time
          </p>
        </div>

        <div class="flex flex-col justify-center h-full min-h-[49px]">
          <h3 class="card-subtitle">End date</h3>

          <!-- Static content -->
          <!-- According to API -->
          <p v-if="staticContent" class="card-text">3 Aug 2020</p>
          <p v-else class="card-text">
            {{
              formatDateWithAddedYears(
                HSData.scholarship.scholarship_start_date,
                1
              )
            }}
          </p>
        </div>
      </div>
      <div class="background-decoration hidden lg:block"></div>
    </div>
  </section>
</template>

<script>
import ZeptolabLogo from "@/assets/hero/zeptolab-logo.png";
import { useStore } from "@/stores/index";

export default {
  name: "DeadlineHero",
  setup() {
    const store = useStore();

    const HSData = store.HSData;
    const staticContent = store.staticContent;
    const hasOccurred = store.hasOccurred;
    const timeUntil = store.timeUntil;
    const formatDate = store.formatDate;
    const formatDateWithAddedYears = store.formatDateWithAddedYears;

    const setHSData = store.setHSData;

    return {
      HSData,
      staticContent,
      setHSData,
      hasOccurred,
      timeUntil,
      formatDate,
      formatDateWithAddedYears,
    };
  },
  data: () => {
    return { ZeptolabLogo };
  },
};
</script>

<style lang="scss" scoped>
@import "@/variables";
.card-title {
  font-family: "Apercu Pro";
  font-style: normal;
  font-weight: 500;
  color: #685dc5;
  font-size: 16px;
  text-align: left;

  line-height: 22px;
  letter-spacing: -0.16px;

  @media (min-width: $sm) {
    line-height: 24px;
    letter-spacing: -0.145455px;
  }
}

.card-date {
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.2px;
  text-align: left;
  font-family: "Apercu Pro";
  font-style: normal;
  font-weight: 300;

  color: #535353;
  @media (min-width: $sm) {
    letter-spacing: -0.27px;
    line-height: 40px;
    font-size: 27px;
  }
}

.card-subtitle {
  font-family: "Apercu Pro";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* or 150% */
  letter-spacing: -0.16px;

  color: #685dc5;
}

.card-text {
  font-weight: 300;
  line-height: 22px;
  text-align: left;

  font-family: "Apercu Pro";
  font-style: normal;
  font-size: 16px;
  line-height: 24px;
  /* or 150% */
  letter-spacing: -0.16px;
  color: #535353;
}

.powered-by {
  font-family: "Apercu Pro";
  font-style: normal;

  color: #000000;
  mix-blend-mode: normal;
  opacity: 0.5;
  font-family: Apercu Pro;
  font-size: 14px;
  letter-spacing: -0.14px;
  text-align: left;

  @media (min-width: $sm) {
    font-weight: 300;
    font-size: 18px;
    line-height: 24px;
    /* identical to box height, or 133% */
    letter-spacing: -0.18px;
  }
}
.powered-by-title {
  font-family: "Apercu Pro";
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.14000000059604645px;
  text-align: left;

  font-style: normal;
  color: #535353;

  @media (min-width: $sm) {
    font-weight: 300;
    font-size: 27px;
    line-height: 24px;
    letter-spacing: -0.27px;
  }
}

.background-decoration {
  position: absolute;
  bottom: -150px;
  background-image: url("@/assets/hero/slab-background.png");
  background-size: 39.5px;
  gap: 0px;
  border: 1px solid #e6e6e6;
  width: 560px;
  height: 257px;
  z-index: -1;
}
</style>
