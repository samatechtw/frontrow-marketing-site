<template>
  <Sticky class="header-sticky">
    <div class="header container">
      <div class="content">
        <div class="header-left">
          <img :src="Logo" @click="scroll(0)" />
        </div>
        <FRHeaderLinks
          class="header-right"
          :links="headerLinks"
          :activeLink="activeLink"
          :activeSection="activeSection"
        />
        <div class="sidebar-toggle" @click="sidebarOpened = true"><em /><em /><em /></div>
        <div
          class="header-sidebar-wrap"
          :class="{ opened: sidebarOpened }"
          @click="sidebarOpened = false"
        >
          <div class="header-sidebar" @click.stop>
            <Cross
              class="sidebar-close sidebar-toggle"
              :clickable="true"
              @click="sidebarOpened = false"
            />
            <FRHeaderLinks
              class="header-links-mobile"
              :links="headerLinks"
              :activeLink="activeLink"
              :activeSection="activeSection"
              @linkClick="sidebarOpened = false"
            />
          </div>
        </div>
      </div>
    </div>
  </Sticky>
</template>

<script lang="ts" setup>
import { computed, ref, toRefs } from 'vue';
import { HeaderLink, HeaderLinkFn } from '/src/utils';

const link = (id: string, fn: HeaderLinkFn): HeaderLink => ({
  id,
  headerId: `header-${id}`,
  title: `header.${id}`,
  fn: () => fn(id),
});

const props = defineProps({
  activeSection: {
    type: String,
    default: null,
  },
});
const { activeSection } = toRefs(props);

const scroll = (top) => {
  window.scroll({
    top,
    left: 0,
    behavior: 'smooth',
  });
};
const scrollAnchor = (id: string) => {
  document.getElementById(id).scrollIntoView({
    behavior: 'smooth',
  });
};
const calculateUnderline = (link: HeaderLink) => {
  const el = document.getElementById(link.headerId);
  const size = el.getBoundingClientRect();
  return {
    ...link,
    width: `${size.width}px`,
    left: `${el.offsetLeft}px`,
  };
};

const headerLinks = [
  link('benefits', scrollAnchor),
  link('who', scrollAnchor),
  link('risks', scrollAnchor),
  link('token', scrollAnchor),
  link('faq', scrollAnchor),
];
const sidebarOpened = ref(false);

const activeLink = computed(() => {
  let link = headerLinks.find((link) => link.id === activeSection.value);
  if (link) {
    link = calculateUnderline(link);
  }
  return link;
});
</script>

<style lang="postcss">
@import '/src/assets/css/global.css';

.header-sticky {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  background-color: $white;
}
.header {
  height: 64px;
  .content {
    @mixin flex-center;
    height: 100%;
    position: relative;
  }
  .header-sidebar-wrap {
    width: 100%;
    height: 100%;
    position: fixed;
    transition: 0.3s ease;
    display: none;
    z-index: 1010;
    right: -100%;
    top: 0;
    margin: 0;

    &.opened {
      transform: translateX(-100%);
    }
  }
  .header-sidebar {
    position: absolute;
    right: 0;
    width: 300px;
    height: 100%;
    background: $white;
    box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.1);
    overflow-y: auto;
  }
  .sidebar-toggle {
    cursor: pointer;
    display: none;
    margin-left: auto;
    margin-right: 16px;

    em {
      display: block;
      width: 19px;
      height: 2px;
      background: $purple;
      margin-top: 5px;
      transition: all 0.3s;

      &:first-child {
        margin-top: 0;
      }
    }
  }
  .sidebar-close {
    position: absolute;
    right: 30px;
    top: 30px;
    z-index: 99;
  }
  .header-left {
    @mixin flex-center;
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    img {
      height: 38px;
      cursor: pointer;
    }
  }
  @media (max-width: 900px) {
    .header-right {
      margin-left: auto;
      margin-right: 32px;
    }
  }
  @media (max-width: 640px) {
    .header-sidebar-wrap,
    .sidebar-toggle {
      display: block;
    }
    .header-right {
      display: none;
    }
  }
}
</style>
