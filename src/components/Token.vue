<template>
<div class="token">
  <div  id="token" class="anchor" />
  <div class="container">
    <div class="token-title1">
      {{ $t('token.title1') }}
    </div>
    <TpaTitle :text="$t('token.title2')" class="token-title2" />
    <div class="token-allocation">
      <div class="token-left">
        <img :src="Allocation">
      </div>
      <div class="token-right">
        <img :src="AllocationText">
      </div>
    </div>
    <div class="token-schedule">
      <div class="lockup-items">
        <TpaTitle :text="$t('token.lockup')" />
        <div
          v-for="(item, index) in $tm('token.lock_items')"
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
        <img :src="Lockup">
      </div>
    </div>
    <TpaTitle :text="$t('token.roadmap')" class="roadmap-title" />
    <img :src="Roadmap" class="token-timeline">
  </div>
</div>
</template>

<script>
export default {
  name: 'token',
};
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
    .lockup-items {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      position: relative;
      margin-top: 64px;
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
      margin-top: 24px;
      @mixin text 15px;
      display: flex;
      text-align: left;
      color: $text-light2;
      padding-right: 25%;
      .bullet {
        width: 14px;
        min-width: 14px;
        height: 14px;
        margin-right: 8px;
        margin-top: 3px;
      }
      &.item0 .bullet {
        background-color: #f4dfc5;
      }
      &.item1 .bullet {
        background-color: #8e9bf9;
      }
      &.item2 .bullet {
        background-color: #cccccc;
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
  @media (max-width: 540px) {
    .token-left, .token-right {
      width: 90%;
      margin: 0 auto;
    }
    .token-right {
      margin-top: 40px;
    }
  }
}
</style>
