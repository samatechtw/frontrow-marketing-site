<template>
  <div class="spinner-wrap">
    <div class="spinner" :style="spinnerStyle" />
  </div>
</template>

<script>
export default {
  name: 'spinner',
  props: {
    size: {
      type: Number,
      default: 32,
    },
    color: {
      type: String,
      default: '#fff',
    },
  },
  computed: {
    spinnerStyle() {
      return {
        height: `${this.size}px`,
        width: `${this.size}px`,
      };
    },
  },
};
</script>

<style lang="postcss">
@import '/src/assets/css/global.css';

.spinner-wrap {
  display: flex;
  justify-content: center;

  .spinner {
    border: 6px solid $spinner1;
    border-radius: 50%;
    border-top: 7px solid $spinner2;
    border-bottom: 7px solid $spinner2;
    width: 32px;
    height: 32px;
    -webkit-animation: spin 1s linear infinite;
    animation: spin 1s linear infinite;
  }
}

@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
>
