<template>
  <div class="who">
    <div id="who" class="anchor" />
    <div class="fr-title">
      {{ t('who.title') }}
    </div>
    <div class="who-text">
      {{ t('who.text') }}
    </div>
    <div class="who-image">
      <svg
        class="who-background-clip"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="#f5f8fa" d="M 0 100 L 0 30 C 30 -4 70 -4 100 30 L 100 100 Z" />
      </svg>
      <img :src="Who" />
    </div>
    <Banner
      :title="t('who.onepager')"
      :text="t('who.available')"
      :link="OnepagerEng"
      :linkText="t('who.eng')"
    />
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { OnepagerEng } from '/src/config';

const { t } = useI18n();
</script>

<style lang="postcss">
@import '/src/assets/css/global.css';

.who {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  padding: 88px 0 0;
  .who-text {
    @mixin text 15px;
    width: 620px;
    max-width: 90%;
    color: $text2;
  }
  .who-image {
    width: 100%;
    position: relative;
    background-color: f5f6fa;
    padding-bottom: 88px;
    img {
      width: 460px;
      max-width: 80%;
      margin-top: 64px;
      position: relative;
    }
    .who-background-clip {
      position: absolute;
      bottom: 0;
      height: 100%;
      left: 0;
      width: 100%;
    }
  }
  @media (max-width: 640px) {
    padding-top: 40px;
  }
}
</style>
