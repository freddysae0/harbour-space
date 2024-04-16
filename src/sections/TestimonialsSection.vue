<template>
  <section id="testimonials" class="relative">
    <div
      class="absolute pointer-events-none w-full -top-[109px] flex justify-center"
    >
      <div class="background-decoration"></div>
    </div>
    <div class="flex gap-10 justify-center overflow-auto">
      <div
        v-for="testimonial in testimonials"
        :key="testimonial.id"
        class="card min-w-[800px]"
      >
        <div
          class="h-[149px] pl-[41px] pr-[86px] flex justify-between items-center bg-white"
        >
          <div class="w-fit flex items-center">
            <div class="flex items-center">
              <img
                class="rounded-full"
                :src="IreneAvatar"
                alt="Testimonial avatar"
              />
            </div>

            <div class="h-full ml-[21px] flex flex-col justify-center">
              <div class="testimonial-name"><span>Irene Pereyra</span></div>
              <div class="testimonial-job -mt-[3px]">
                <span> Interaction Design Fellow ‘19</span>
              </div>
            </div>
          </div>
          <img
            class="w-[18px] h-[18px]"
            :src="LinkedinImg"
            alt="Linkedin icon"
          />
        </div>
        <div
          class="h-[310px] bg-box flex flex-col justify-center items-center gap-[32px]"
        >
          <div class="w-full max-w-[561px] testimonial-content">
            <span>
              This Fellowship was a turning point in my career. I wouldn’t be
              where I am today without the financial support and experienced
              offered through the program.
            </span>
          </div>
          <div class="w-full max-w-[561px] flex gap-3 testimonial-category">
            <span>Education </span>
            <span>·</span>
            <span> B.A. Visual Design </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import IreneAvatar from "@/assets/testimonials/irene-avatar.png";
import LinkedinImg from "@/assets/testimonials/linkedin.png";
export default {
  data: () => {
    return {
      IreneAvatar,
      LinkedinImg,
      testimonials: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    };
  },
};
</script>

<style lang="scss" scoped>
.background-decoration {
  top: 0px;
  background-image: url("@/assets/hero/slab-background.png");
  background-size: 39.5px;
  gap: 0px;
  border: 1px solid #e6e6e6;
  width: 1120px;
  height: 400px;
  z-index: -1;
}

.testimonial-name {
  font-family: "Apercu Pro";
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.145454540848732px;
  text-align: left;
  color: #535353;
}
.testimonial-job {
  font-family: Apercu Pro;
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
  letter-spacing: -0.1599999964237213px;
  text-align: left;
  color: #535353;
}

.testimonial-content {
  font-family: Apercu Pro;
  font-size: 26px;
  font-weight: 300;
  line-height: 35px;
  letter-spacing: -0.18571428954601288px;
  text-align: left;
  color: #535353;
}

.testimonial-category {
  font-family: Apercu Pro;
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
  letter-spacing: -0.1599999964237213px;
  text-align: left;
  color: #535353;
}
</style>
