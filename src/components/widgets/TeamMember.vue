<template>
  <div class="team-member">
    <div class="team-title">
      {{ name }}
    </div>
    <div class="team-text">
      {{ title }}
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  name: string;
  title: string;
}>();
</script>

<style lang="postcss">
@import '/src/assets/css/global.css';

.team-member {
  @mixin text 15px;
  text-align: left;
  max-width: 190px;
  margin-top: 24px;
  @media (max-width: 540px) {
    .team-member {
      width: 100%;
      max-width: 300px;
      margin: 32px 0 0;
    }
  }
}
</style>
