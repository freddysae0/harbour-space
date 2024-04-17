<template>
  <section id="faq" class="flex flex-col items-center">
    <div class="w-[1024px] flex flex-col gap-[64.5px]">
      <div class="flex items-center justify-between">
        <div class="">
          <h1 class="title-section w-[441px]">Frequently asked questions</h1>
        </div>
        <div class="flex items-center gap-[24px]">
          <p class="filter-by">Filter by:</p>
          <SelectUi
            :selectables="selectables"
            text="Program conditions"
          ></SelectUi>
        </div>
      </div>
      <div class="border-t border-border">
        <div
          v-for="(question, i) in questions"
          :key="i"
          ref="questionContainer"
          class="question-container w-full relative flex py-[65px] border-b border-solid border-border pt-[40px] overflow-hidden"
        >
          <!-- h-fit for expand -->
          <div class="w-[361px]">
            <h3 class="program-condition-font">Program conditions</h3>
          </div>
          <div class="w-[559px] program-content-font">
            <span class="font-medium">{{ question.title }}</span>
            <div class="mt-12" v-html="question.answer"></div>
          </div>

          <ExpandFAQ
            :i="i"
            class="absolute right-[34px] top-[34px]"
            @active="handleExpand"
          />
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
    };
  },
  methods: {
    getFitContentHeights() {
      if (!this.$refs.questionContainer) return;
      this.$refs.questionContainer.map((question, i) => {
        //Saving the previous height value
        let previousState = question.getBoundingClientRect().height;

        //Looking and saving what height will have with fit content
        question.style.height = "fit-content";
        let nextState = question.getBoundingClientRect().height;
        this.fitSizes[i] = `${nextState}px`;

        //returning to the previous size
        question.style.height = `${previousState}px`;
      });
    },
    handleExpand(payload) {
      console.log("active", payload);
      if (!this.$refs.questionContainer) {
        return;
      }
      console.log(this.$refs.questionContainer[payload.i].style.height);
      if (
        this.$refs.questionContainer[payload.i].style.height == "116px" ||
        this.$refs.questionContainer[payload.i].style.height == ""
      ) {
        this.$refs.questionContainer[payload.i].style.height =
          this.fitSizes[payload.i];
      } else {
        this.$refs.questionContainer[payload.i].style.height = "116px";
      }
    },
  },
  components: {
    SelectUi,
    ExpandFAQ,
  },
  mounted() {
    this.getFitContentHeights();
  },
};
</script>

<style lang="scss" scoped>
.question-container {
  transition: all 1s;
  height: 116px;
}
.filter-by {
  font-family: Apercu Pro;
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
  letter-spacing: -0.1599999964237213px;
  text-align: right;
  color: #6a6a6a;
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
  font-family: Apercu Pro;
  font-size: 22px;
  font-weight: 300;
  line-height: 32px;
  letter-spacing: -0.33000001311302185px;
  text-align: left;
  color: #535353;
}
</style>
