<template>
  <div class="home-wrap">
    <FRHeader :activeSection="activeSection" />
    <Cta />
    <Banner
      :title="t('whitepaper.title')"
      :text="t('whitepaper.subtitle')"
      :link="WhitepaperEng"
      :linkText="t('whitepaper.download')"
    />
    <Future />
    <Token ref="token" :selected="activeSection === 'token'" />
    <!--
    <Benefits ref="benefits" :selected="activeSection === 'benefits'" />
    <Who ref="who" :selected="activeSection === 'who'" />
    <Risk ref="risks" :selected="activeSection === 'risks'" />
    -->
    <Features />
    <Design />
    <!--
    <Team ref="team" :selected="activeSection === 'team'" />
    -->
    <!--
    <Faq ref="faq" :selected="activeSection === 'faq'" />
    -->
    <Contact />
    <FRFooter />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
// import { debounce } from '/src/utils';
import { WhitepaperEng } from '../config';

const { t } = useI18n();
const activeSection = ref();

/*
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
*/
</script>

<style lang="postcss">
@import '/src/assets/css/global.css';

.home-wrap {
  color: $black;
  width: 100%;
  > div {
    position: relative;
    z-index: 2;
  }
  .cta {
    z-index: 1;
  }
}
</style>
