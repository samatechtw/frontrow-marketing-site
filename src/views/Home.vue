<template>
<div class="home-wrap">
  <TpaHeader :activeSection="activeSection" />
  <Cta />
  <Whitepaper />
  <Benefits ref="benefits" :selected="activeSection === 'benefits'" />
  <How ref="how" :selected="activeSection === 'how'" />
  <Risks ref="risks" :selected="activeSection === 'risks'" />
  <Token ref="token" :selected="activeSection === 'token'" />
  <Faq ref="faq" :selected="activeSection === 'faq'" />
  <!--
  <Contact />
  -->
  <TpaFooter />
</div>
</template>

<script>
import { debounce } from '/src/utils';

export default {
  name: 'home',
  data() {
    return {
      activeSection: null,
      portfolioColumns: 3,
    };
  },
  methods: {
    onScroll() {
      const top = window.pageYOffset;
      const section = this.sections.find((section, idx) => {
        if(
          top > (this.$refs[section].$el.offsetTop - 350)
          || idx === this.sections.length - 1
        ) {
          return true;
        }
      });
      if(section !== this.activeSection) {
        this.activeSection = section;
      }
    },
    onResize() {
      if(window.innerWidth < 700) {
        this.portfolioColumns = 2;
      } else {
        this.portfolioColumns = 3;
      }
    },
  },
  mounted() {
    this.sections = Object.keys(this.$refs).reverse();
    this.onScrollDebounce = debounce(this.onScroll, 100);
    window.addEventListener('scroll', this.onScrollDebounce, { passive: true });

    this.onResizeDebounce = debounce(this.onResize, 500);
    window.addEventListener('resize', this.onResizeDebounce);
    this.onResize();
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.onScrollDebounce);
    window.removeEventListener('resize', this.onResizeDebounce);
  },
};
</script>

<style lang="postcss">
@import '/src/assets/css/global.css';

.home-wrap {
  color: $black;
  > div  {
    position: relative;
    z-index: 2;
  }
  .cta {
    z-index: 1;
  }
}
</style>
