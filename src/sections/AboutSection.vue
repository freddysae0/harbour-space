<template>
  <section id="about" class="flex flex-col gap-[72px]">
    <div id="about-description" class="flex justify-center gap-[119px]">
      <div class="avatar w-fit flex justify-center">
        <div class="background-decoration">
          <img
            class="w-[380px] h-[380px]"
            :src="YoungManImg"
            alt="Avatar Image"
          />
        </div>
      </div>

      <div class="w-1/3 max-w-[480px] flex flex-col gap-10 justify-center">
        <h1 class="title-section">About the apprenticeship</h1>
        <p class="about-text">
          Our scholarships are designed to give talented and driven young people
          from any background access to top-class education, experience and
          network. We offer a fully-funded master’s degree alongside an
          apprenticeship and a guaranteed job upon graduation.
        </p>
      </div>
    </div>

    <div id="about-cards" class="flex justify-center gap-10">
      <div id="scholarship-value-card" class="card w-80 p-[40px] h-fit">
        <div>
          <div class="flex flex-col gap-10 h-[279px] border-b-[1px]">
            <h3 class="card-subtitle">Scholarship value</h3>
            <h1 class="final-price">€31,300</h1>
          </div>
        </div>
        <div class="h-[181px] flex flex-col justify-end">
          <div class="bg-white flex">
            <div class="flex flex-col w-full gap-[23px]">
              <div class="flex flex-col justify-center h-full min-h-[49px]">
                <h3 class="card-subtitle">Tuition covered</h3>
                <p class="card-text">€20,900</p>
              </div>
              <div class="flex flex-col justify-center h-full min-h-[49px]">
                <h3 class="card-subtitle">Living stipend</h3>
                <p class="card-text whitespace-nowrap">€8,400 (€700/month)</p>
              </div>
            </div>
            <div class="flex flex-col w-full gap-[23px] ml-[8%]">
              <div class="flex flex-col h-full min-h-[144px] pt-[6px]">
                <h3 class="card-subtitle">Remaining</h3>
                <p class="card-text">€2,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-fit h-fit flex flex-col gap-10">
        <div class="flex gap-10">
          <div class="card w-[320px] px-[24px] pt-[32px] flex flex-col gap-4">
            <h3 class="card-title">Study commitment</h3>
            <p class="card-date">3 hours / day</p>
            <span class="card-line"></span>
            <p class="card-text">
              You will complete 15 modules to graduate. Daily classes are 3
              hours, plus coursework to complete in your own time.
            </p>
          </div>
          <div
            class="card w-[320px] px-[24px] pt-[32px] pb-[16px] flex flex-col gap-4"
          >
            <h3 class="card-title">Work commitment</h3>
            <p class="card-date">4 hours / day</p>
            <span class="card-line"></span>
            <p class="card-text">
              Immerse yourself in the professional world during your
              apprenticeship. You’ll learn the ropes from the best and get to
              apply your newly acquired knowledge in the field from day one.
            </p>
          </div>
        </div>
        <div>
          <div class="w-full flex gap-6 items-center">
            <div class="line-separator"></div>
            <div class="separator-text">GRADUATION</div>
            <div class="line-separator"></div>
          </div>
        </div>
        <div>
          <div class="w-full">
            <div
              class="card w-[680px] px-[24px] pt-[32px] pb-[16px] flex flex-col gap-4"
            >
              <h3 class="card-title">A full-time contract</h3>
              <p class="card-date">1 Year / Full-Time</p>
              <span class="card-line"></span>
              <p class="card-text">
                You’ll be guaranteed a 1 year contract with SCG upon graduation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import YoungManImg from "@/assets/about/young-man.png";
export default {
  name: "AboutSection",
  data: () => {
    return {
      YoungManImg,
    };
  },
};
</script>

<style lang="scss" scoped>
.background-decoration {
  background-image: url("@/assets/hero/slab-background.png");
  background-size: 39.5px;
  gap: 0px;
  border: 1px solid #e6e6e6;
  width: 438px;
  height: 438px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 70%;
}

.about-text {
  font-family: "Apercu Pro";
  font-size: 22px;
  font-weight: 300;
  line-height: 32px;
  letter-spacing: -0.33px;
  text-align: left;
}

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
  white-space: nowrap;
  letter-spacing: -0.16px;

  color: #685dc5;
}

.card-text {
  font-family: "Apercu Pro";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;

  letter-spacing: -0.16px;

  color: #535353;
}
.card-line {
  width: 27.82px;
  height: 0;
  border-bottom: 1px solid var(--border-1);
}
.final-price {
  font-family: "Apercu Pro";
  font-size: 48px;
  font-weight: 300;
  line-height: 24px;
  letter-spacing: -0.4363636374473572px;
  text-align: left;
  color: #535353;
}

.line-separator {
  height: 0;
  border-bottom: 1px solid var(--border-1);
  width: 100%;
}

.separator-text {
  font-family: Apercu Pro;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.145454540848732px;
  text-align: center;
  color: #535353;
}
</style>
