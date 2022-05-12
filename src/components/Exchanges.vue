<template>
  <div class="exchanges-wrap">
    <div class="exchanges container">
      <div id="exchanges" class="anchor" />
      <div class="fr-title">
        {{ t('exchanges.title') }}
      </div>
      <div class="exchanges-content">
        <div><img class="kucoin" :src="ExchangesKucoin" /></div>
        <div><img class="gateio" :src="ExchangesGateio" /></div>
        <div><img class="bitmart" :src="ExchangesBitmart" /></div>
        <div><img class="mexc" :src="ExchangesMexc" /></div>
        <div><img class="lbank" :src="ExchangesLbank" /></div>
        <div><img class="probit" :src="ExchangesProbit" /></div>
        <div><img class="pancake" :src="ExchangesPancake" /></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<style lang="postcss" scoped>
@import '/src/assets/css/global.css';

.exchanges-wrap {
  background-color: #f5f6f8;
}
.exchanges {
  padding-top: 72px;
  padding-bottom: 80px;
  text-align: center;
  .exchanges-title {
    @mixin title 15px;
    margin-top: 4px;
  }
  .exchanges-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-top: 24px;
    > div {
      width: 33%;
    }
    img {
      align-self: flex-start;
      margin-top: 32px;
    }
  }
  .kucoin {
    width: 161px;
  }
  .gateio {
    width: 122px;
  }
  .bitmart {
    width: 148px;
  }
  .mexc {
    width: 263px;
  }
  .lbank {
    width: 189px;
  }
  .probit {
    width: 185px;
  }
  .pancake {
    width: 262px;
  }
  @media (max-width: 760px) {
    .exchanges-content {
      > div {
        width: 50%;
      }
    }
  }
  @media (max-width: 520px) {
    .exchanges-content {
      > div {
        width: 100%;
      }
    }
  }
}
</style>
