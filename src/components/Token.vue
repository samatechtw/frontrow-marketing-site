<template>
  <div class="token">
    <div id="token" class="anchor" />
    <div class="container">
      <div class="fr-title token-title2">
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
          <div
            v-for="(item, index) in tm('token.lock_items') as Record<string, string>"
            :key="index"
            :class="`token-schedule-item item${index}`"
          >
            <div class="bullet" />
            <div class="token-schedule-text">
              {{ item }}
            </div>
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
  padding: 72px 0 88px;
  text-align: center;
  #token {
    top: -60px;
  }
  .token-title1 {
    @mixin title 20px;
    color: $blue;
  }
  .token-allocation {
    display: flex;
    flex-wrap: wrap;
    margin-top: 72px;
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
    .fr-title-wrap .fr-title {
      text-align: center;
    }
    .lockup-items {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      position: relative;
      width: 55%;
      text-align: left;
    }
    .lockup-image {
      display: flex;
      align-items: flex-start;
      width: 55%;
      margin-left: -10%;
      img {
        max-width: 512px;
        width: 100%;
      }
    }
    .token-schedule-item {
      margin-top: 20px;
      @mixin text 15px;
      display: flex;
      text-align: left;
      color: $text1;
      padding-right: 25%;
      .bullet {
        width: 14px;
        min-width: 14px;
        height: 14px;
        margin-right: 8px;
        margin-top: 3px;
      }
      &.item0 {
        margin-top: 0;
        .bullet {
          background-color: rgb(245, 163, 148);
        }
      }
      &.item1 .bullet {
        background-color: rgb(107, 177, 224);
      }
      &.item2 .bullet {
        background-color: rgb(115, 201, 214);
      }
      &.item3 .bullet {
        background-color: rgb(245, 224, 197);
      }
      &.item4 .bullet {
        background-color: rgb(143, 152, 249);
      }
      &.item5 .bullet {
        background-color: rgb(204, 204, 204);
      }
      &.item6 .bullet {
        background-color: rgb(204, 204, 204);
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
  @media (max-width: 740px) {
    .token-schedule {
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 64px;
      .fr-title-wrap {
        .fr-title {
          top: 4px;
          margin-bottom: 24px;
        }
        .fr-title-bg {
          display: none;
        }
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
  @media (max-width: 540px) {
    padding-top: 48px;
    .token-left,
    .token-right {
      width: 90%;
      margin: 0 auto;
    }
    .token-right {
      margin-top: 40px;
    }
    .token-title2 {
      .fr-title {
        top: 4px;
      }
      .fr-title-bg {
        display: none;
      }
    }
  }
}
</style>
