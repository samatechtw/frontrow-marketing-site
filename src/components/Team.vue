<template>
<div class="team container">
  <div id="team" class="anchor" />
  <FRTitle :text="$t('team.title')" />
  <div class="team-content">
    <div class="team-member">
      <img :src="TpaCeo">
      <div class="team-title">
        {{ $t('team.tpa') }}
      </div>
      <div class="team-text">
        {{ $t('team.tpa_text') }}
      </div>
    </div>
    <div class="team-member">
      <img :src="IsmediaCeo">
      <div class="team-title">
        {{ $t('team.ismedia') }}
      </div>
      <div class="team-text">
        {{ $t('team.ismedia_text') }}
      </div>
    </div>
    <div class="team-member">
      <img :src="Cfo">
      <div class="team-title">
        {{ $t('team.cfo') }}
      </div>
      <div class="team-text">
        {{ $t('team.cfo_text') }}
      </div>
    </div>
  </div>
</div>
</template>

<style lang="postcss">
@import '/src/assets/css/global.css';

.team {
  padding: 80px 0;
  text-align: center;
  .team-content {
    display: flex;
    justify-content: center;
    margin-top: 40px;
  }
  .team-member {
    width: 260px;
    &:not(:last-child) {
      margin-right: 32px;
    }
    img {
      width: 90px;
    }
  }
  .team-title {
    @mixin title 15px;
    margin-top: 4px;
  }
  .team-text {
    @mixin text 15px;
    margin-top: 8px;
    color: $dark3;
    line-height: 1.7em;
  }
  @media (max-width: 540px) {
    padding-top: 40px;
    .team-content {
      flex-wrap: wrap;
    }
    .team-member {
      width: 100%;
      max-width: 300px;
      margin: 32px 0 0;
      &:not(:last-child) {
        margin-right: 0;
      }
    }
  }
}

</style>
