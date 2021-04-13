<template>
<div class="token">
  <div  id="token" class="anchor" />
  <div class="container">
    <div class="token-title1">
      {{ $t('token.title1') }}
    </div>
    <div class="token-title2">
      {{ $t('token.title2') }}
    </div>    
    <div class="token-allocation">
      <div class="token-left">
        <img :src="Allocation">
      </div>
      <div class="token-right">
        <img :src="AllocationText">
      </div>
    </div>
    <div class="token-schedule">
      <div class="token-schedule-title">
        {{ $t('token.lock_title') }}
      </div>
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
    <img :src="Timeline" class="token-timeline">
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
  padding: 72px 0 80px;
  text-align: center;
  #token {
    top: -60px;
  }
  .token-title1 {
    @mixin title 20px;
    color: $blue;
  }
  .token-title2 {
    @mixin title 28px;
    margin-top: 4px;
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
    margin-top: 88px;
    text-align: left;
    .token-schedule-title {
      @mixin title 19px;
    }
    .token-schedule-item {
      margin-top: 12px;
      @mixin text 15px;
      display: flex;
      align-items: center;
      color: $text-light2;
      .bullet {
        width: 14px;
        min-width: 14px;
        height: 14px;
        margin-right: 8px;
      }
      &.item0 .bullet {
        background-color: #f4dfc5;
      }
      &.item1 .bullet {
        background-color: #6d4B7f;
      }
      &.item2 .bullet {
        background-color: #888a89;
      }
    }
  }
  .token-timeline {
    width: 100%;
    margin-top: 88px;
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
