<template>
<div class="contact">
  <svg
    class="contact-background-clip"
    viewBox="0 0 100 40"
    preserveAspectRatio="none"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="#0087cb" d="M 0 40 L 0 0 C 30 40, 70 40, 100 0 L 100 40 L 0 40" />
  </svg>
  <div class="container">
    <div class="contact-title">
      {{ $t('contact.title') }}
    </div>
    <TpaInput
      v-model="name"
      :title="$t('contact.name')"
      class="contact-name"
    />
    <TpaInput
      v-model="email"
      :title="$t('contact.email')"
      class="contact-email"
    />
    <TpaInput
      v-model="inquiry"
      :title="$t('contact.inquiry')"
      class="contact-inquiry"
      :rows="6"
    />
    <div class="contact-send">
      {{ $t('contact.send') }}
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'contact',
  data() {
    return {
      name: '',
      email: '',
      inquiry: '',
    };
  },
};
</script>

<style lang="postcss">
@import '/src/assets/css/global.css';

.contact {
  background: $blue;
  color: $white;
  padding: 180px 0 72px;
  text-align: center;
  .contact-background-clip {
    @mixin overlay;
    background-color: $grey1;
    height: 120px;
  }
  .container {
    max-width: 600px;
  }
  .contact-title {
    @mixin title 28px;
  }
  .contact-name {
    margin-top: 56px;
  }
  .contact-send {
    width: 130px;
    @mixin flex-center;
    @mixin title 15px;
    margin: 48px auto 0;
    background-color: $dark2;
    height: 40px;
    border-radius: 4px;
    cursor: pointer;
  }
  @media (max-width: 1000px) {
    padding-top: 140px;
    .contact-background-clip {
      height: 60px;
    }
  }
  @media (max-width: 540px) {
    padding-top: 110px;
    .contact-background-clip {
      height: 40px;
    }
  }
}
</style>
