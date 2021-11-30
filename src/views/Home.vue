<template>
  <div class="home-wrap">
    <FRHeader :activeSection="activeSection" />
    <Cta />
    <Benefits ref="benefits" :selected="activeSection === 'benefits'" />
    <Who ref="who" :selected="activeSection === 'who'" />
    <Risk ref="risks" :selected="activeSection === 'risks'" />
    <Future />
    <Features />
    <Design />
    <Token ref="token" :selected="activeSection === 'token'" />
    <!--
    <Team ref="team" :selected="activeSection === 'team'" />
    -->
    <Faq ref="faq" :selected="activeSection === 'faq'" />
    <Contact />
    <FRFooter />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { debounce } from '/src/utils';

const activeSection = ref();

const benefits = ref();
const who = ref();
const risks = ref();
const token = ref();
const faq = ref();
const itemRefs = { benefits, who, risks, token, faq };
const sections = Object.keys(itemRefs).reverse();

const onScroll = () => {
  const top = window.pageYOffset;
  const section = sections.find((section, idx) => {
    if (
      top > itemRefs[section].value.$el.offsetTop - 350 ||
      idx === sections.length - 1
    ) {
      return true;
    }
  });
  if (section !== activeSection.value) {
    activeSection.value = section;
  }
};

const onScrollDebounce = debounce(onScroll, 150);

onMounted(() => {
  window.addEventListener('scroll', onScrollDebounce, { passive: true });
});
onBeforeUnmount(() => {
  window.removeEventListener('resize', onScrollDebounce);
});
</script>

<style lang="postcss">
@import '/src/assets/css/global.css';

.home-wrap {
  color: $black;
  > div {
    position: relative;
    z-index: 2;
  }
  .cta {
    z-index: 1;
  }
}
</style>
