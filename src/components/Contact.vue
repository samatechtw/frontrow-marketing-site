<template>
<div class="contact">
  <div class="container">
    <div class="contact-title">
      {{ $t('contact.title') }}
    </div>
    <div class="contact-subtitle">
      {{ $t('contact.subtitle') }}
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
  padding: 96px 0 72px;
  text-align: center;
  .container {
    max-width: 600px;
  }
  .contact-title {
    @mixin title 27px;
  }
  .contact-subtitle {
    @mixin text 15px;
    margin-top: 24px;
  }
  .contact-name {
    margin-top: 64px;
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
}
</style>
