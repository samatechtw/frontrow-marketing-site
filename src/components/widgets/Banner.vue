<template>
  <div class="banner-wrap">
    <div class="banner container">
      <div class="onepager-left">
        <div class="onepager-title">
          {{ title }}
        </div>
        <div class="onepager-text">
          {{ text }}
        </div>
      </div>
      <div class="onepager-right">
        <a target="_blank" :href="link" class="fr-button onepager-eng">
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
  background-color: $purple;
  width: 100%;
}
.banner {
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
    .onepager-right {
      margin-top: 24px;
    }
  }
}
</style>
