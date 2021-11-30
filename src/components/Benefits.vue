<template>
  <div class="benefits">
    <div id="benefits" class="anchor" />
    <div class="container">
      <div class="fr-title">
        {{ t('benefits.title') }}
      </div>
      <div class="benefits-text">
        {{ t('benefits.text') }}
      </div>
      <div class="benefits-asterisk">
        {{ t('benefits.asterisk') }}
      </div>
      <div class="benefits-items">
        <div v-for="item in items" :key="item.text" class="benefits-item">
          <div class="benefits-item-image">
            <img :src="item.image" />
          </div>
          <div class="benefits-item-text" v-html="item.text" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import Lending from '/src/assets/img/lending.png';
import Interest from '/src/assets/img/interest.png';
import Loans from '/src/assets/img/loans.png';
import Performance from '/src/assets/img/performance.png';

const { t } = useI18n();

const items = [
  {
    text: t('benefits.lending'),
    image: Lending,
  },
  {
    text: t('benefits.interest'),
    image: Interest,
  },
  {
    text: t('benefits.loans'),
    image: Loans,
  },
  {
    text: t('benefits.performance'),
    image: Performance,
  },
];
</script>

<style lang="postcss">
@import '/src/assets/css/global.css';

.benefits {
  text-align: center;
  padding: 80px 0;
  .benefits-text {
    @mixin text 15px;
    line-height: 23px;
    max-width: 600px;
    color: $text2;
    margin: 0 auto;
    padding: 24px 0 8px;
  }
  .benefits-asterisk {
    @mixin text 11px;
    color: $text3;
  }
  .benefits-items {
    display: flex;
    margin-top: 64px;
    border: 1px solid $border1;
    padding: 40px 0;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.15);
  }
  .benefits-item {
    @mixin medium 15px;
    color: $purple;
    width: 25%;
    &:not(:last-child) {
      border-right: 1px solid $border1;
    }
    .benefits-item-image {
      margin-bottom: 24px;
      height: 90px;
      img {
        width: 75px;
      }
    }
  }
  @media (max-width: 800px) {
    .benefits-items {
      padding: 16px 0;
      flex-wrap: wrap;
    }
    .benefits-item {
      width: 50%;
      margin: 24px 0;
    }
  }
}
</style>
