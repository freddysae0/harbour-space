<template>
  <div class="max-w-[440px] h-fit flex flex-col gap-[32px] relative">
    <img
      class="absolute interaction-img sm:w-[180px] sm:h-[180px]"
      :src="InteractionImg"
    />

    <!-- Static content -->
    <h1 v-if="staticContent" class="title-section">
      Interaction Design Apprenticeship
    </h1>
    <!-- According to API -->
    <h1 v-else class="title-section">{{ HSData.scholarship.name }}</h1>

    <DeadlineHero class="lg:hidden mb-[36px]"></DeadlineHero>
    <h2 class="font-normal font-apercu px-[25px] lg:px-0">
      A fully funded work-study program to launch your tech career
    </h2>

    <!-- Static content -->
    <p v-if="staticContent" class="px-[25px] lg:px-0">
      Harbour.Space has partnered with SCG to empower driven talent and
      eliminate the barriers to accessing exceptional education and career
      opportunities through a Masters Fellowship.
    </p>
    <!-- According to API -->
    <p
      v-else
      v-for="(description, id) in HSData.scholarship.description"
      :key="id"
      class="px-[25px] lg:px-0"
    >
      {{ description.data }}
    </p>
    <h2 class="px-[25px] lg:px-0">
      Position:
      <span v-if="staticContent">Marketing Performance </span>
      <span v-else> {{ HSData.scholarship.position }} </span>
    </h2>
    <div class="px-[25px] lg:px-0">
      <ButtonUI></ButtonUI>
    </div>
  </div>
</template>

<script>
import ButtonUI from "@/components/ui/ButtonUi.vue";
import InteractionImg from "@/assets/hero/interaction-design.png";
import DeadlineHero from "@/components/hero/DeadlineHero.vue";
import { useStore } from "@/stores/index";

export default {
  name: "InteractionHero",
  setup() {
    const store = useStore();

    const HSData = store.HSData;
    const staticContent = store.staticContent;

    const setHSData = store.setHSData;

    return {
      HSData,
      staticContent,
      setHSData,
    };
  },
  data: () => {
    return { InteractionImg };
  },
  components: {
    ButtonUI,
    DeadlineHero,
  },
};
</script>

<style lang="scss" scoped>
@import "@/variables";
h2 {
  font-size: 18px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: -0.27px;
  text-align: left;

  font-style: normal;
  color: var(--text-1);
  span {
    font-family: "Apercu Pro";
    font-size: 18px;
    font-weight: 300;
    line-height: 26px;
    text-align: left;
    @media (min-width: $sm) {
      font-size: 22px;
    }
  }
  @media (min-width: $sm) {
    letter-spacing: -0.33px;
    line-height: 32px;
    font-size: 22px;
  }
}
p {
  font-size: 18px;
  font-weight: 300;
  line-height: 26px;
  letter-spacing: -0.27px;
  text-align: left;

  font-family: "Apercu Pro";
  font-style: normal;
  /* or 145% */
  color: var(--text-1);
  @media (min-width: $sm) {
    font-size: 22px;
    letter-spacing: -0.33px;
    line-height: 32px;
  }
}

.interaction-img {
  width: 134px;
  height: 134px;
  top: -70px;
  left: 150px;

  gap: 0px;
  opacity: 0.2;
  rotate: 20deg;
  @media (min-width: 386px) {
    left: 200px;
  }

  @media (min-width: 500px) {
    width: 206px;
    height: 206px;
    top: -70px;
    right: 0;
  }
}
</style>
