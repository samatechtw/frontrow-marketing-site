<template>
  <div class="footer">
    <div class="container">
      <div class="footer-title">
        {{ t('ismedia') }}
      </div>
      <div class="footer-subtitle">
        {{ t('footer') }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<style lang="postcss">
@import '/src/assets/css/global.css';

.footer {
  background: $bg-light1;
  color: $white;
  padding: 80px 0;
  text-align: center;
  .footer-title {
    @mixin title 50px;
  }
  .footer-subtitle {
    @mixin text 12px;
    margin-top: 8px;
  }
}
</style>
