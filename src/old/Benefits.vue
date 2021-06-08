<template>
<div class="benefits">
  <div id="benefits" class="anchor" />
  <div class="container">
    <div class="benefits-title">
      <div class="benefits-title">
        {{ $t('benefits.title') }}
      </div>
    </div>
    <div class="benefits-subtitle">
      {{ $t('benefits.subtitle') }}
    </div>
    <div class="benefits-asterisk">
      {{ $t('benefits.asterisk') }}
    </div>
    <div class="benefits-images">
      <div class="benefits-image">
        <div class="benefits-image-wrap">
          <img :src="Defi">
        </div>
        <div class="benefits-image-text" v-html="$t('benefits.images.defi')" />
      </div>
      <div class="benefits-image">
        <div class="benefits-image-wrap">
          <img :src="Interest">
        </div>
        <div class="benefits-image-text" v-html="$t('benefits.images.interest')" />
      </div>
      <div class="benefits-image">
        <div class="benefits-image-wrap">
          <img :src="Loans">
        </div>
        <div class="benefits-image-text" v-html="$t('benefits.images.loans')" />
      </div>
      <div class="benefits-image">
        <div class="benefits-image-wrap">
          <img :src="Business">
        </div>
        <div class="benefits-image-text" v-html="$t('benefits.images.profit')" />
      </div>
    </div>
  </div>
  <div class="who-wrap">
    <div 
      class="who-background"
      :style="{ 'background-image': `url(${Buildings})` }"
    />
    <div class="who-background-overlay" />
    <svg
      class="who-background-clip"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="#fff" d="M 0 100 L 0 0 L 100 0 L 100 100 C 70 00, 30 00, 0 100" />
    </svg>
    <div class="container who">
      <div class="who-left">
        <div class="who-title">
          {{ $t('benefits.who') }}
        </div>
        <div class="who-text">
          {{ $t('benefits.who_text') }}
        </div>
        <div class="who-text">
          {{ $t('benefits.one_pager') }}
        </div>
        <div class="who_buttons">
          <a target="_blank" :href="OnepagerEnLink">
            <div class="who-button">
              {{ $t('benefits.one_pager_en') }}
            </div>
          </a>
          <a target="_blank" :href="OnepagerKrLink">
            <div class="who-button">
              {{ $t('benefits.one_pager_kr') }}
            </div>
          </a>
        </div>
      </div>
      <div class="who-right">
        <img :src="Who">
      </div>
    </div>
  </div>
</div>
</template>

<script>
import OnepagerKrLink from '/210426_TPA_FINANCE_KOR.pdf';
import OnepagerEnLink from '/210426_TPA_FINANCE_ENG.pdf';

export default {
  name: 'benefits',
  data() {
    return {
      OnepagerKrLink,
      OnepagerEnLink,
    };
  },
};
</script>

<style lang="postcss">
@import '/src/assets/css/global.css';

.benefits {
  .benefits-title {
    @mixin title 26px;
    text-align: center;
    margin-top: 72px;
  }
  .benefits-subtitle {
    @mixin subtitle;
  }
  .benefits-asterisk {
    text-align: center;
    @mixin text 10px;
    color: $text-light;
    margin-top: 10px;
  }
  .benefits-images {
    margin: 48px auto 0;
    display: flex;
    justify-content: space-between;
    max-width: 940px;
    .benefits-image-text {
      @mixin text 16px;
      color: $blue;
      text-align: center;
      margin-top: 16px;
      line-height: 24px;
    }
    .benefits-image-wrap {
      border: 1px solid $grey3;
      overflow: hidden;
      padding: 8px;
      border-radius: 79px;
      width: 158px;
      height: 158px;
      margin-top: 32px;
      transition: all 0.2s ease;
      img {
        width: 100%;
        height: 100%;
        border-radius: 71px;
      }
      &:hover {
        box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.1);
      }
    }
  }
  .who-wrap {
    position: relative;
  }
  .who-background {
    @mixin overlay;
    background-size: cover;
    background-position: center 20%;
  }
  .who-background-overlay {
    @mixin overlay;
    background-color: rgba($dark2, 0.8);
  }
  .who-background-clip {
    @mixin overlay;
    height: 200px;
  }
  .who {
    position: relative;
    display: flex;
    margin-top: 40px;
    padding: 260px 40px 160px;
    .who-left {
      color: $white;
      width: 40%;
      padding-top: 48px;
      .who-title {
        @mixin title 28px;
      }
      .who-text {
        @mixin text 16px;
        color: $grey3;
        margin-top: 24px;
        max-width: 440px;
        line-height: 28px;
      }
      .who-button {
        background: $orange;
        height: 40px;
        @mixin title 16px;
        border-radius: 4px;
        margin-top: 32px;
        @mixin flex-center;
        width: 180px;
        color: white;
      }
    }
    .who-right {
      width: 60%;
      display: flex;
      padding-left: 64px;
      img {
        width: 100%;
        align-self: center;
      }
    }
  }
  @media (max-width: 1020px) {
    .who-background-clip {
      height: 150px;
    }
    .who {
      .who-left { 
        text-align: center;
        width: 100%;
        .who-text {
          margin: 24px auto 0;
        }
        .who-button {
          margin: 32px auto 0;
        }
      }
      .who-right {
        display: none;
      }
    }
  }
  @media (max-width: 740px) {
    .benefits-images {
      justify-content: space-between;
      flex-wrap: wrap;
      max-width: 400px;
    }
    .who-background-clip {
      height: 70px;
      top: -1px;
    }
  }
}
</style>
