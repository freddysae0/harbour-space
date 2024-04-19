<template>
  <section id="faq" class="flex flex-col items-center px-[43px]">
    <div class="w-full flex flex-col gap-[15px] md:gap-[64.5px] max-w-[1024px]">
      <div
        class="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-0"
      >
        <div class="">
          <h1
            class="title-section w-full sm:w-[360px] capitalize md:normal-case"
          >
            Frequently asked questions
          </h1>
        </div>
        <div
          class="flex flex-col md:flex-row md:items-center gap-2 md:gap-[24px]"
        >
          <p class="filter-by">Filter by:</p>
          <SelectUi
            class="hidden md:block"
            :selectables="selectables"
            text="Program conditions"
          ></SelectUi>
          <SelectUi
            class="md:hidden"
            :selectables="selectables"
            text="Program"
          ></SelectUi>
        </div>
      </div>
      <div class="lg:border-t border-border">
        <div
          v-for="(question, i) in questions"
          :key="i"
          class="question-container w-full flex items-center md:items-start py-2 border-b border-solid border-border md:pt-[40px]"
        >
          <!-- h-fit for expand -->
          <div class="w-[361px] hidden md:block">
            <h3 class="program-condition-font">Program conditions</h3>
          </div>
          <div class="w-full program-content-font h-fit">
            <div class="relative">
              <h3
                @click="activateExpandAnimation(i)"
                class="max-w-[200px] sm:max-w-[800px] md:max-w-full cursor-pointer hover:text-primary"
              >
                {{ question.title }}
              </h3>
              <div
                class="absolute h-full flex items-center right-0 md:right-[34px] top-0"
              >
                <ExpandFAQ
                  :startAnimation="startAnimation[i]"
                  :i="i"
                  @active="handleExpand"
                />
              </div>
            </div>
            <div ref="outer" class="h-0 transition-expand overflow-hidden">
              <div ref="inner" class="mt-12" v-html="question.answer"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SelectUi from "@/components/ui/SelectUi.vue";
import ExpandFAQ from "@/components/faq/ExpandFAQ.vue";
export default {
  data: () => {
    return {
      startAnimation: [],
      selectables: [
        { title: "All" },
        { title: "Admission" },
        { title: "Harbour Space" },
        { title: "SCG" },
        { title: "Living in Bangkok" },
      ],
      questions: [
        {
          title: "What are my obligations?",
          answer: `<p>
                The majority of our students receive numerous job offers at the
                end of the second academic year of their Bachelor's programme
                and at the end of the first academic year of their Master's
                programme. The best applicants receive an offer from our
                industrial partners at the beginning of their programmes.
              </p>

              <br />
              <p>
                Harbour.Space is highly recognized among innovative employers
                and is strategic partner of B.Grimm multi- industry corporation
                with 140 years of history in Thailand. Together we insure
                students get the best knowledge about the current job market
                opportunities.
              </p>
              <br />
              <p>
                We offer our students paid internships options during studies
                jointly with our industrial partners.
              </p>
              <br />
              <p>
                Employers that hired graduates of Harbour.Space in the past
                include Google, IBM, Accenture, Typeform, Frog, and other tech
                centric companies. Our industry specific employability report
                could be provided to you separately during the admission
                process.
              </p>`,
        },
        {
          title: "Do I get a job placement upon graduation?",
          answer: `
              <p>
                We offer our students paid internships options during studies
                jointly with our industrial partners.
              </p>
              <br />
              <p>
                Employers that hired graduates of Harbour.Space in the past
                include Google, IBM, Accenture, Typeform, Frog, and other tech
                centric companies. Our industry specific employability report
                could be provided to you separately during the admission
                process.
              </p>`,
        },
        {
          title: "What if I want to start my own company?",
          answer: `<p>
                The majority of our students receive numerous job offers at the
                end of the second academic year of their Bachelor's programme
                and at the end of the first academic year of their Master's
                programme. The best applicants receive an offer from our
                industrial partners at the beginning of their programmes.
              </p>

              <br />
              <p>
                Harbour.Space is highly recognized among innovative employers
                and is strategic partner of B.Grimm multi- industry corporation
                with 140 years of history in Thailand. Together we insure
                students get the best knowledge about the current job market
                opportunities.
              </p>
              <br />
              <p>
                We offer our students paid internships options during studies
                jointly with our industrial partners.
              </p>
              <br />
              <p>
                Employers that hired graduates of Harbour.Space in the past
                include Google, IBM, Accenture, Typeform, Frog, and other tech
                centric companies. Our industry specific employability report
                could be provided to you separately during the admission
                process.
              </p>`,
        },
        {
          title: "Do I need a visa?",
          answer: `<p>
                The majority of our students receive numerous job offers at the
                end of the second academic year of their Bachelor's programme
                and at the end of the first academic year of their Master's
                programme. The best applicants receive an offer from our
                industrial partners at the beginning of their programmes.
              </p>

              <br />
              <p>
                Harbour.Space is highly recognized among innovative employers
                and is strategic partner of B.Grimm multi- industry corporation
                with 140 years of history in Thailand. Together we insure
                students get the best knowledge about the current job market
                opportunities.
              </p>
              <br />
              <p>
                We offer our students paid internships options during studies
                jointly with our industrial partners.
              </p>
              <br />
              <p>
                Employers that hired graduates of Harbour.Space in the past
                include Google, IBM, Accenture, Typeform, Frog, and other tech
                centric companies. Our industry specific employability report
                could be provided to you separately during the admission
                process.
              </p>`,
        },
      ],
      fitSizes: [],
      isOpenQuestion: [],
      originalHeight: null,
    };
  },
  methods: {
    activateExpandAnimation(i) {
      this.startAnimation[i] = !this.startAnimation[i];
    },
    handleExpand(payload) {
      if (!this.$refs.inner || !this.$refs.outer) return;
      this.isOpenQuestion[payload.i] = payload.isActive;

      if (payload.isActive) {
        this.$refs.outer[payload.i].style.height = `${
          this.$refs.inner[payload.i].getBoundingClientRect().height +
          this.getOriginalHeight() +
          100
        }px`;
      }

      if (!payload.isActive) {
        this.$refs.outer[
          payload.i
        ].style.height = `${this.getOriginalHeight()}px`;
      }
    },
    getOriginalHeight() {
      if (window.innerWidth <= 768) return 0;
      else return 40;
    },
    updateQuestionHeights() {
      if (!this.$refs.outer) return;
      this.$refs.outer.forEach((question, i) => {
        const isOpen = this.isOpenQuestion[i];
        const innerHeight =
          this.$refs.inner && this.$refs.inner[i]
            ? this.$refs.inner[i].getBoundingClientRect().height
            : 0;
        question.style.height = isOpen
          ? `${innerHeight + this.getOriginalHeight() + 100}px`
          : this.getOriginalHeight();
      });
    },
  },
  components: {
    SelectUi,
    ExpandFAQ,
  },
  mounted() {
    window.addEventListener("resize", this.updateQuestionHeights);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateQuestionHeights);
  },
};
</script>

<style lang="scss" scoped>
@import "@/variables";
.question-container {
  transition: all 1s;
  min-height: 65px;

  @media (min-width: $md) {
    min-height: 116px;
  }
}
.transition-expand {
  transition: all 1s;
}
.filter-by {
  font-family: Apercu Pro;
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
  letter-spacing: -0.1599999964237213px;
  text-align: left;
  color: #6a6a6a;
  @media (min-width: $md) {
    text-align: right;
  }
}
.program-condition-font {
  font-family: Apercu Pro;
  font-size: 22px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: -0.33000001311302185px;
  text-align: left;
  color: #685dc5;
}

.program-content-font {
  font-family: "Apercu Pro";
  font-size: 16px;
  font-weight: 300;
  letter-spacing: -0.27px;
  text-align: left;

  color: #535353;
  @media (min-width: $lg) {
    line-height: 32px;
    font-size: 18px;
    font-size: 22px;

    letter-spacing: -0.33px;
  }

  h3 {
    transition: color 0.2s;
    font-family: "Apercu Pro";
    font-size: 18px;
    font-weight: 300;
    line-height: 32px;
    letter-spacing: -0.27px;
    text-align: left;

    color: #535353;
    &:hover {
      color: var(--primary);
    }
    @media (min-width: $lg) {
      line-height: 32px;
      font-weight: 500;
      font-size: 22px;

      letter-spacing: -0.33px;
    }
  }
}
</style>
