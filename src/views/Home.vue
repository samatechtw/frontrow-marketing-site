<template>
<div class="home-wrap">
  <FRHeader :activeSection="activeSection" />
  <Cta />
  <Who ref="who" :selected="activeSection === 'who'" />
  <Future ref="nft" :selected="activeSection === 'nft'" />
  <Features />
  <Design />
  <Token ref="token" :selected="activeSection === 'token'" />
  <Team ref="team" :selected="activeSection === 'team'" />
  <Faq ref="faq" :selected="activeSection === 'faq'" />
  <Contact />
  <FRFooter />
</div>
</template>

<script>
import { debounce } from '/src/utils';

export default {
  name: 'home',
  data() {
    return {
      activeSection: null,
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
  },
  mounted() {
    this.sections = Object.keys(this.$refs).reverse();
    this.onScrollDebounce = debounce(this.onScroll, 100);
    window.addEventListener('scroll', this.onScrollDebounce, { passive: true });
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.onScrollDebounce);
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
