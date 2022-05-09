<template>
  <div class="design">
    <div class="fr-title">
      {{ t('nft.design') }}
    </div>
    <div class="design-image">
      <img :src="Design" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<style lang="postcss">
@import '/src/assets/css/global.css';

.design {
  text-align: center;
  padding: 96px 0 64px;
  img {
    width: 100%;
    margin-top: 40px;
  }
}
</style>
