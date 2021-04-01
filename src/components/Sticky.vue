<template>
<div
  class="p-sticky"
  :style="{ top: `${top}px` }"
>
  <slot />
</div>
</template>

<script>
export default {
  name: 'p-sticky',
  props: {
    top: { // sticky y-position in pixels
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="postcss" scoped>
.p-sticky {
  position: sticky;
  z-index: 1000;
  top: 0;
}
</style>
