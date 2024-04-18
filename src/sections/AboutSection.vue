<template>
  <section id="about" class="flex flex-col gap-[72px]">
    <div
      id="about-description"
      class="hidden lg:flex justify-center gap-[119px] px-[20px] sm:px-[30px] lg:px-[80px]"
    >
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
    <!-- 
      Mobile version
     -->
    <div
      id="about-description"
      class="relative lg:hidden w-full h-[401px] bg-primary flex justify-center"
    >
      <div class="background-decoration-mobile absolute"></div>
      <div class="absolute -top-[126px] rounded-full overflow-hidden">
        <img
          class="w-[252px] h-[252px]"
          :src="BuildingImg"
          alt="One of our buildings"
        />
      </div>
      <div
        class="about-card bg-white w-[334px] -mt-[12px] pt-[179px] pb-[56px] px-[22px] flex flex-col gap-[32px]"
      >
        <h1 class="about-title-section">About the apprenticeship</h1>
        <p class="about-text">
          Our scholarships are designed to give talented and driven young people
          from any background access to top-class education, experience and
          network. We offer a fully-funded master’s degree alongside an
          apprenticeship and a guaranteed job upon graduation.
        </p>
      </div>
    </div>

    <div
      id="about-cards"
      class="flex flex-col mt-[88px] lg:mt-0 lg:flex-row items-center justify-center gap-10 px-[20px] sm:px-[30px] lg:px-[80px]"
    >
      <div
        id="scholarship-value-card"
        class="remove-border card padding w-80 p-[40px] h-fit -mb-[15px] lg:mb-0"
      >
        <div>
          <div class="flex flex-col gap-10 h-[0px] lg:h-[279px] border-b">
            <h3 class="card-subtitle">Scholarship value</h3>
            <h1 class="final-price">€31,300</h1>
          </div>
        </div>
        <div class="h-[181px] flex flex-col justify-end">
          <div class="bg-white flex">
            <div class="flex flex-col w-full lg:w-[70%] gap-[23px]">
              <div
                class="flex lg:hidden flex-col justify-center h-full min-h-[49px]"
              >
                <h3 class="card-subtitle lg:hidden">Fellowship value</h3>
                <h3 class="card-subtitle hidden lg:block">Scholarship value</h3>
                <p class="card-text costs-text">€31,300</p>
              </div>
              <div class="flex flex-col justify-center h-full min-h-[49px]">
                <h3 class="card-subtitle lg:hidden">Tuition</h3>
                <h3 class="card-subtitle hidden lg:block">Tuition covered</h3>
                <p class="card-text costs-text">€20,900</p>
              </div>
              <div class="flex flex-col justify-center h-full min-h-[49px]">
                <h3 class="capitalize lg:normal-case card-subtitle">
                  Living stipend
                </h3>
                <p class="card-text costs-text">€8,400 (€700/month)</p>
              </div>
            </div>
            <div class="flex flex-col lg:w-[30%] w-full gap-[23px] ml-[8%]">
              <div
                class="flex flex-col h-full min-h-[144px] pt-[6px] justify-center lg:justify-normal"
              >
                <div>
                  <h3 class="card-subtitle">Remaining</h3>
                  <p class="costs-text card-text">€2,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-fit h-fit flex flex-col gap-10">
        <div class="flex flex-col lg:flex-row gap-10">
          <div
            class="card padding w-[320px] px-[24px] pb-[16px] pt-[32px] flex flex-col gap-4"
          >
            <h3 class="card-title capitalize lg:normal-case">
              Study commitment
            </h3>
            <p class="card-date">3 hours / day</p>
            <span class="card-line"></span>
            <p class="card-text">
              You will complete 15 modules to graduate. Daily classes are 3
              hours, plus coursework to complete in your own time.
            </p>
          </div>
          <div
            class="card padding w-[320px] px-[24px] pt-[32px] pb-[16px] flex flex-col gap-4"
          >
            <h3 class="card-title hidden lg:block capitalize lg:normal-case">
              Work commitment
            </h3>
            <h3 class="card-title lg:hidden">Apprenticeship Commitment</h3>
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
              class="card padding w-[320px] lg:w-[680px] px-[24px] pt-[32px] pb-[16px] flex flex-col gap-4"
            >
              <h3 class="card-title capitalize lg:normal-case">
                A full-time contract
              </h3>
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
import BuildingImg from "@/assets/about/building.png";
export default {
  name: "AboutSection",
  data: () => {
    return {
      YoungManImg,
      BuildingImg,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/variables";
.padding {
  @media (max-width: 1023px) {
    padding-left: 22px;
    padding-right: 22px;
    padding-top: 40px;
    padding-bottom: 32px;
  }
}

.remove-border {
  @media (max-width: 1023px) {
    border: none;
  }
}
.costs-text {
  @media (max-width: 1023px) {
    font-family: Apercu Pro;
    font-size: 24px;
    font-weight: 300;
    line-height: 24px;
    letter-spacing: -0.218px;
    text-align: left;
  }
}
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
.background-decoration-mobile {
  background-image: url("@/assets/hero/slab-background.png");
  background-size: 39.5px;
  gap: 0px;
  border: 1px solid #e6e6e6;
  width: 334px;
  height: 334px;
  top: -167px;
  z-index: -1;
  justify-content: center;
  align-items: center;
  border-radius: 70%;
}
.about-title-section {
  font-family: Apercu Pro;
  font-size: 35px;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: -0.4375px;
  text-align: left;
  color: #685dc5;
}
.about-card {
  background: #ffffff;
  border-left: 1px solid #e6e6e6;
  border-right: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  height: fit-content;
}
.about-text {
  font-size: 18px;
  font-weight: 300;
  line-height: 26px;
  letter-spacing: -0.27px;
  text-align: left;
  font-family: "Apercu Pro";

  @media (min-width: $lg) {
    letter-spacing: -0.33px;
    font-size: 22px;
    line-height: 32px;
  }
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
