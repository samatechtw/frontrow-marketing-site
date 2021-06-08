<template>
<div class="who">
  <div id="who" class="anchor" />
  <TpaTitle :text="$t('who.title')" />
  <div class="who-text">
    {{ $t('who.text') }}
  </div>
  <div class="who-image">
    <img :src="Who">
  </div>
  <div class="who-onepager-wrap">
    <div class="who-onepager container">
      <div class="onepager-left">
        <div class="onepager-title">
          {{ $t('who.onepager') }}
        </div>
        <div class="onepager-text">
          {{ $t('who.available') }}
        </div>
      </div>
      <div class="onepager-right">
        <a target="_blank" :href="WhitepaperEng" class="onepager-eng">
          {{ $t('who.eng') }}
        </a>
        <a target="_blank" :href="WhitepaperKor" class="onepager-kor">
          {{ $t('who.kor') }}
        </a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import WhitepaperEng from '/TPA_whitepaper_bithumb_ENG_210604.pdf';
import WhitepaperKor from '/TPA_whitepaper_bithumb_KOR_210604.pdf';

export default {
  setup() {
    return {
      WhitepaperEng,
      WhitepaperKor,
    };
  },
}
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
    width: 620px;
    max-width: 90%;
    @mixin text 15px;
    color: $dark4;
  }
  .who-image {
    width: 100%;
    img {
      width: 460px;
      max-width: 80%;
      margin-top: 64px;
    }
  }
  .who-onepager-wrap {
    background-color: #8e9bf9;
    width: 100%;
    margin-top: 80px;
  }
  .who-onepager {
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: white;
    align-items: center;
    padding: 43px 0;
    text-align: left;
    .onepager-title {
      @mixin title 18px;
    }
    .onepager-text {
      @mixin text 15px;
      margin-top: 4px;
    }
    .onepager-right {
      @mixin title 15px;
      display: flex;
      .onepager-kor {
        margin-left: 16px;
      }
      > a {
        @mixin flex-center;
        background-color: $dark4;
        border-radius: 4px;
        height: 40px;
        width: 126px;
        cursor: pointer;
        color: white;
      }
    }
  }
}

</style>
