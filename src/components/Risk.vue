<template>
  <div class="risk">
    <div id="risks" class="anchor" />
    <div class="container">
      <div class="fr-title">
        {{ t('risk.title') }}
      </div>
      <div class="risk-text">
        {{ t('risk.text') }}
      </div>
    </div>
    <div class="risk-items container">
      <div class="risk-item risk-item-left">
        <div class="risk-item-text">
          <div class="risk-item-title">
            {{ t('risk.security_title') }}
          </div>
          <div class="risk-item-underline" />
          <div>{{ t('risk.security_text') }}</div>
        </div>
        <div class="risk-item-image">
          <img :src="Security" class="risk-security" />
        </div>
      </div>
      <div class="risk-item risk-item-right">
        <div class="risk-item-image">
          <img :src="Collateral" class="risk-collateral" />
        </div>
        <div class="risk-item-text">
          <div class="risk-item-title">
            {{ t('risk.collateral_title') }}
          </div>
          <div class="risk-item-underline" />
          <div>{{ t('risk.collateral_text') }}</div>
        </div>
      </div>
      <div class="risk-item risk-item-left">
        <div class="risk-item-text">
          <div class="risk-item-title">
            {{ t('risk.performance_title') }}
          </div>
          <div class="risk-item-underline" />
          <div>{{ t('risk.performance_text') }}</div>
        </div>
        <div class="risk-item-image">
          <img :src="Planets" class="risk-performance" />
        </div>
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

.risk {
  background-color: $bg-light2;
  text-align: center;
  padding: 80px 0;
  .risk-text {
    @mixin text 15px;
    line-height: 23px;
    max-width: 600px;
    color: $text2;
    margin: 0 auto;
    padding: 24px 0 8px;
  }
  .risk-items {
    margin-top: 64px;
    text-align: left;
  }
  .risk-item {
    @mixin text 15px;
    margin-top: 32px;
    line-height: 23px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: $text2;
  }
  .risk-item-left .risk-item-text {
    margin-right: 24px;
  }
  .risk-item-right .risk-item-text {
    margin-left: 24px;
  }
  .risk-item-text {
    max-width: 396px;
  }
  .risk-item-title {
    @mixin medium 18px;
    color: $purple;
  }
  .risk-item-underline {
    height: 3px;
    background-color: $teal;
    width: 48px;
    margin: 4px 0 16px;
  }
  .risk-security {
    width: 298px;
    margin-left: 24px;
  }
  .risk-collateral {
    width: 404px;
    margin-right: 24px;
  }
  .risk-performance {
    width: 359px;
    margin-left: 24px;
  }
  @media (max-width: 800px) {
    .risk-item-text {
      max-width: 50%;
    }
    .risk-item-image img {
      max-width: 100%;
    }
  }
  @media (max-width: 800px) {
    .risk-item {
      flex-direction: column;
    }
    .risk-item-right {
      flex-direction: column-reverse;
    }
    .risk-item-text {
      max-width: 100%;
      margin: 0;
    }
    .risk-item-image {
      display: flex;
      align-items: center;
      img {
        max-width: 70%;
        margin: 24px auto;
      }
    }
  }
}
</style>
