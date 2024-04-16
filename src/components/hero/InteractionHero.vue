<template>
  <div class="max-w-[440px] h-fit flex flex-col gap-[40px] relative">
    <img class="absolute interaction-img" :src="InteractionImg" />
    <h1 class="title-section">Interaction Design Apprenticeship</h1>
    <h2 class="font-normal font-apercu">
      A fully funded work-study program to launch your tech career
    </h2>
    <p>
      Harbour.Space has partnered with SCG to empower driven talent and
      eliminate the barriers to accessing exceptional education and career
      opportunities through a Masters Fellowship.
    </p>
    <h2>
      Position:
      <span class="text-[22px] font-apercu font-light">
        Marketing Performance
      </span>
    </h2>

    <ButtonUI></ButtonUI>
  </div>
</template>

<script>
import ButtonUI from "@/components/ui/ButtonUi.vue";
import InteractionImg from "@/assets/hero/interaction-design.png";

export default {
  name: "InteractionHero",
  data: () => {
    return { InteractionImg };
  },
  components: {
    ButtonUI,
  },
};
</script>

<style lang="scss" scoped>
h2 {
  /* A fully funded work- */

  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 32px;
  /* or 145% */
  letter-spacing: -0.33px;

  color: #535353;
  color: var(--text-1);
}
p {
  /* Harbour.Space has pa */

  font-family: "Apercu Pro";
  font-style: normal;
  font-weight: 300;
  font-size: 22px;
  line-height: 32px;
  /* or 145% */
  letter-spacing: -0.33px;
  color: var(--text-1);
}

.interaction-img {
  width: 206px;
  height: 206px;
  top: -70px;
  right: 0;
  gap: 0px;
  opacity: 0.2;
  rotate: 20deg;
}
</style>
