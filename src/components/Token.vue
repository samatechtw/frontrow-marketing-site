<template>
  <div class="token">
    <div id="token" class="anchor" />
    <div class="container">
      <div class="fr-title">
        {{ t('token.title') }}
      </div>
      <div class="token-allocation">
        <div class="token-left">
          <img :src="Allocation" />
        </div>
        <div class="token-right">
          <img :src="AllocationText" />
        </div>
      </div>
      <div class="token-schedule">
        <div class="lockup-items">
          <div class="fr-title">
            {{ t('token.lockup') }}
          </div>
          <div class="lockup-text">
            {{ t('token.lockup_text') }}
          </div>
          <div class="token-schedule-items">
            <div
              v-for="(item, index) in tm('token.lock_items') as Record<string, string>"
              :key="index"
              class="token-schedule-item"
            >
              <div class="bullet" />
              <div class="token-schedule-text">
                {{ item }}
              </div>
            </div>
          </div>
          <div class="lockup-text">
            {{ t('token.lockup_footer') }}
          </div>
        </div>
        <div class="lockup-image">
          <img :src="Lockup" />
        </div>
      </div>
      <div class="fr-title roadmap-title">
        {{ t('token.roadmap') }}
      </div>
      <img :src="Roadmap" class="token-timeline" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';

const { t, tm } = useI18n();
</script>

<style lang="postcss">
@import '/src/assets/css/global.css';

.token {
  padding: 72px 0 64px;
  text-align: center;
  #token {
    top: -60px;
  }
  .token-allocation {
    display: flex;
    flex-wrap: wrap;
    margin-top: 88px;
  }
  .token-left {
    width: 60%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    img {
      width: 100%;
      max-width: 560px;
    }
  }
  .token-right {
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-left: 16px;
    img {
      width: 100%;
      max-width: 260px;
    }
  }
  .token-schedule {
    margin-top: 110px;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    justify-content: space-between;
    .fr-title {
      align-self: flex-end;
      margin-bottom: 40px;
      padding-right: 24px;
    }
    .lockup-text {
      @mixin text 15px;
    }
    .lockup-items {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      position: relative;
      max-width: 400px;
      padding-right: 24px;
      text-align: left;
    }
    .lockup-image {
      display: flex;
      align-items: flex-start;
      max-width: 490px;
      img {
        max-width: 512px;
        width: 100%;
      }
    }
    .token-schedule-items {
      margin: 8px 0 24px;
    }
    .token-schedule-item {
      margin-top: 20px;
      @mixin text 15px;
      display: flex;
      text-align: left;
      color: $text1;
      .bullet {
        width: 14px;
        min-width: 14px;
        height: 14px;
        margin-right: 8px;
        margin-top: 3px;
        background-color: $purple;
      }
    }
  }
  .roadmap-title {
    margin-top: 88px;
  }
  .token-timeline {
    width: 100%;
    margin-top: 48px;
  }
  @media (max-width: 970px) {
    .token-schedule {
      justify-content: center;
      .fr-title {
        padding: 0;
        align-self: center;
      }
      .lockup-items {
        width: 100%;
        align-items: center;
        .token-schedule-item {
          align-self: flex-start;
          padding: 0;
        }
      }
      .lockup-image {
        width: 70%;
        margin: 40px 0 0;
      }
    }
  }
}
</style>
