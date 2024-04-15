<template>
  <section class="w-full max-w-[480px] flex flex-col gap-[30px]">
    <div class="flex gap-[40px] items-center">
      <img :src="ZeptolabLogo" alt="Zeptolab Icon" />
      <div class="flex flex-col gap-[10px]">
        <span class="powered-by">Powered by</span>
        <span class="powered-by-title">Zeptolab</span>
      </div>
    </div>
    <div class="card px-[40px] py-[25px] flex flex-col gap-4">
      <h3 class="card-title">Application closes in</h3>
      <p class="card-date">6 Day : 22 Hrs : 56 Min : 13 Seg</p>
    </div>

    <div class="card bg-white p-[40px] flex h-fit relative">
      <div class="flex flex-col w-full gap-[23px]">
        <div class="flex flex-col justify-center h-full min-h-[49px]">
          <h3 class="card-subtitle">Location</h3>
          <p class="card-text">Bangkok</p>
        </div>
        <div class="flex flex-col justify-center h-full min-h-[49px]">
          <h3 class="card-subtitle">Start date</h3>
          <p class="card-text">30 June 2020</p>
        </div>
      </div>
      <div class="flex flex-col w-full gap-[23px] ml-[20%]">
        <div class="flex flex-col justify-center h-full min-h-[49px]">
          <h3 class="card-subtitle">Duration</h3>
          <p class="card-text">1 Year Full-Time</p>
        </div>

        <div class="flex flex-col justify-center h-full min-h-[49px]">
          <h3 class="card-subtitle">End date</h3>
          <p class="card-text">3 Aug 2020</p>
        </div>
      </div>
      <div class="background-decoration"></div>
    </div>
  </section>
</template>

<script>
import ZeptolabLogo from "@/assets/hero/zeptolab-logo.png";
export default {
  name: "DeadlineHero",
  data: () => {
    return { ZeptolabLogo };
  },
};
</script>

<style lang="scss" scoped>
.card-title {
  font-family: "Apercu Pro";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.145455px;

  color: #685dc5;
}

.card-date {
  font-family: "Apercu Pro";
  font-style: normal;
  font-weight: 300;
  font-size: 27px;
  line-height: 24px;
  letter-spacing: -0.27px;

  color: #535353;
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
  font-family: "Apercu Pro";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  /* or 150% */
  letter-spacing: -0.16px;

  color: #535353;
}

.powered-by {
  font-family: "Apercu Pro";
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 24px;
  /* identical to box height, or 133% */
  letter-spacing: -0.18px;

  color: #000000;

  mix-blend-mode: normal;
  opacity: 0.5;
}
.powered-by-title {
  font-family: "Apercu Pro";
  font-style: normal;
  font-weight: 300;
  font-size: 27px;
  line-height: 24px;
  letter-spacing: -0.27px;

  color: #535353;
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
