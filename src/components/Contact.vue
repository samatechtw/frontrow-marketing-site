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
      inputType="email"
    />
    <TpaInput
      v-model="inquiry"
      :title="$t('contact.inquiry')"
      class="contact-inquiry"
      :rows="6"
    />
    <div v-if="error" class="contact-error">
      {{ error }}
    </div>
    <div class="contact-send" @click="send">
      <LoadingText :text="$t('contact.send')" :loading="sending" />
    </div>
  </div>
</div>
</template>

<script>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { FetchApi } from '@sampullman/fetch-api';

const jsonInterceptor = async (res) => {
  res.data = res.body ? await res.json() : null;
  return res;
};

const api = new FetchApi({
  responseInterceptors: [jsonInterceptor],
});

const sendEmail = (name, email, inquiry) => (
  api.request({
    url: 'https://api.sendinblue.com/v3/smtp/email',
    method: 'POST',
    headers: {
      charset: 'iso-8859-1',
      'api-key': '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',
    },
    data: {
      sender: { name, email },
      to: [{
        name: 'TPA Info',
        email: 'info@tpa.finance',
      }],
      subject: 'TPA Marketing Site Form',
      htmlContent: '<html><head></head><body>' +
        `<h4>From: ${email}</h4><h4>Name: ${name}</h4><h4>Inquiry:</h4><p>${inquiry}</p></body></html>`,
    },
  })
);

const RATE_LIMIT_KEY = 'rate-limit';

export default {
  name: 'contact',
  setup() {
    const { t } = useI18n();
    const name = ref('');
    const email = ref('');
    const inquiry = ref('');
    const error = ref(null);
    const sending = ref(false);
    const send = async () => {
      error.value = null;
      const now = new Date().getTime();
      const prevTime = parseInt(localStorage.getItem(RATE_LIMIT_KEY) || '0');
      if(prevTime && (now - prevTime) < 1000 * 60 * 2) {
        error.value = t('contact.email_limit');
      } else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value) && email.value.length < 100) {
        error.value = t('contact.invalid_email');
      } else if(name.value.length < 2 || name.value.length > 100) {
        error.value = t('contact.invalid_name');
      } else if(inquiry.value.length < 10 || inquiry.value.length > 1000) {
        error.value = t('contact.invalid_inquiry');
      } else {
        try {
          sending.value = true;
          await sendEmail(name.value, email.value, inquiry.value);
          error.value = t('contact.email_success');
          localStorage.setItem(RATE_LIMIT_KEY, now.toString());
        } catch(e) {
          console.log('EMAIL ERR', e);
          error.value = t('contact.email_error');
        } finally {
          sending.value = false;
        }
      }
    };
    return {
      name,
      email,
      inquiry,
      error,
      send,
      sending,
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
  .contact-error {
    @mixin medium 12px;
    color: $dark1;
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
