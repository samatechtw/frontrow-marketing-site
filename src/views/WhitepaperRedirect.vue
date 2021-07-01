<template />

<script>
import { onMounted } from 'vue';
import { WhitepaperEng } from '/src/config';

export default {
  setup() {
    onMounted(() => {
      window.location.href = WhitepaperEng;
    });
  },
};
</script>