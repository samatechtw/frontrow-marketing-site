<template>
  <div class="contact-wrap">
    <!--
    <svg
      class="contact-background-clip"
      viewBox="0 0 100 40"
      preserveAspectRatio="none"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="#ffffff" d="M 0 40 L 0 0 C 30 40, 70 40, 100 0 L 100 40 L 0 40" />
    </svg>
    -->
    <div class="fr-title">
      {{ t('contact.title') }}
    </div>
    <div class="container contact">
      <div class="contact-left-wrap">
        <div class="contact-left">
          <div class="contact-title">
            {{ t('contact.name_title') }}
          </div>
          <FRInput v-model="name" :title="t('contact.name')" class="contact-name" />
          <div class="contact-title">
            {{ t('contact.email_title') }}
          </div>
          <FRInput
            v-model="email"
            :title="t('contact.email')"
            class="contact-email"
            inputType="email"
          />
          <div class="contact-title">
            {{ t('contact.inquiry') }}
          </div>
          <FRInput
            v-model="inquiry"
            :title="t('contact.inquiry')"
            class="contact-inquiry"
            :rows="6"
          />
          <div class="fr-button contact-send" @click="send">
            <LoadingText :text="t('contact.send')" :loading="sending" />
          </div>
          <div v-if="error" class="contact-error">
            {{ error }}
          </div>
        </div>
      </div>
      <div class="contact-right">
        <img :src="ContactLady" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
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

const sendEmail = (name: string, email: string, message: string) =>
  api.request({
    url: 'https://api.frontrow.foundation/mail/frontrow',
    method: 'POST',
    data: {
      name,
      email,
      inquiry: message,
    },
  });

const RATE_LIMIT_KEY = 'rate-limit';

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
  if (prevTime && now - prevTime < 1000 * 60 * 2) {
    error.value = t('contact.email_limit');
  } else if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value) &&
    email.value.length < 100
  ) {
    error.value = t('contact.invalid_email');
  } else if (name.value.length < 2 || name.value.length > 100) {
    error.value = t('contact.invalid_name');
  } else if (inquiry.value.length < 10 || inquiry.value.length > 1000) {
    error.value = t('contact.invalid_inquiry');
  } else {
    try {
      sending.value = true;
      await sendEmail(name.value, email.value, inquiry.value);
      error.value = t('contact.email_success');
      localStorage.setItem(RATE_LIMIT_KEY, now.toString());
    } catch (e) {
      console.log('EMAIL ERR', e);
      error.value = t('contact.email_error');
    } finally {
      sending.value = false;
    }
  }
};
</script>

<style lang="postcss">
@import '/src/assets/css/global.css';

.contact-wrap {
  background: white;
  color: $text2;
  padding: 0 0 72px;
  text-align: center;
  width: 100%;
  .fr-title {
    margin: 32px 0 64px;
  }
  .contact {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    max-width: 840px;
    justify-content: center;
  }
  .contact-left-wrap {
    max-width: 330px;
    flex-grow: 1;
    padding-right: 40px;
    .contact-left {
      max-width: 390px;
    }
  }
  .contact-right {
    max-width: 244px;
    @mixin flex-center;
    img {
      width: 100%;
      margin-left: 40px;
    }
  }
  .contact-title {
    @mixin text 15px;
    margin-top: 16px;
    text-align: left;
  }
  .fr-input-wrap {
    margin-top: 8px;
  }
  .contact-background-clip {
    @mixin overlay;
    background-color: $purple;
    height: 120px;
  }
  .contact-error {
    @mixin regular 15px;
    color: $text2;
    margin-top: 16px;
  }
  .contact-send {
    width: 100%;
    margin: 24px auto 0;
  }
  @media (max-width: 1000px) {
    .contact-background-clip {
      height: 60px;
    }
  }
  @media (max-width: 540px) {
    padding-top: 32px;
    .contact-background-clip {
      height: 40px;
    }
    .contact-left-wrap,
    .contact-right {
      width: 100%;
    }
    .contact-left-wrap {
      position: relative;
      z-index: 4;
      padding-right: 0;
      .contact-left {
        max-width: 100%;
      }
    }
    .contact-right {
      width: 70%;
      position: absolute;
      top: 200px;
      z-index: 1;
    }
  }
}
</style>
