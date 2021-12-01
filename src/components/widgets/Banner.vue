<template>
  <div class="banner-wrap">
    <div class="banner container">
      <div class="banner-left">
        <div class="banner-title">
          {{ title }}
        </div>
        <div class="banner-text">
          {{ text }}
        </div>
      </div>
      <div class="banner-right">
        <a target="_blank" :href="link" class="fr-button banner-eng">
          {{ linkText }}
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  linkText: {
    type: String,
    required: true,
  },
});
</script>

<style lang="postcss">
@import '/src/assets/css/global.css';

.banner-wrap {
  background-color: $yellow;
  width: 100%;
}
.banner {
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: $purple;
  align-items: center;
  padding: 43px 24px;
  text-align: left;
  .banner-title {
    @mixin title 18px;
  }
  .banner-text {
    @mixin text 15px;
    margin-top: 4px;
  }
  .banner-right {
    @mixin title 15px;
    display: flex;
    > a {
      margin-left: 16px;
      cursor: pointer;
      padding-left: 48px;
      padding-right: 48px;
    }
  }
  @media (max-width: 640px) {
    flex-wrap: wrap;
    justify-content: center;
    > div {
      width: 100%;
      justify-content: center;
      text-align: center;
    }
    .banner-right {
      margin-top: 24px;
    }
  }
}
</style>
