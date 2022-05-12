<template>
  <div class="team container">
    <div id="team" class="anchor" />
    <div class="fr-title">
      {{ t('team.title') }}
    </div>
    <div class="team-content">
      <div class="team-col">
        <TeamMember
          v-for="(member, index) in team1"
          :key="index"
          :name="member.name"
          :title="member.title"
        />
      </div>
      <div class="team-col">
        <TeamMember
          v-for="(member, index) in team2"
          :key="index"
          :name="member.name"
          :title="member.title"
        />
      </div>
      <div class="team-col">
        <TeamMember
          v-for="(member, index) in team3"
          :key="index"
          :name="member.name"
          :title="member.title"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';

const { t, tm } = useI18n();

const team = tm('team.employees') as Record<string, string>[];

const team1 = team.slice(0, 5);
const team2 = team.slice(5, 10);
const team3 = team.slice(10, 15);
</script>

<style lang="postcss">
@import '/src/assets/css/global.css';

.team {
  padding-top: 72px;
  padding-bottom: 80px;
  text-align: center;
  .team-title {
    @mixin title 15px;
    margin-top: 4px;
  }
  .team-content {
    display: flex;
    justify-content: space-between;
    margin-top: 32px;
    flex-wrap: wrap;
  }
  .team-col {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 580px) {
    padding-top: 40px;
  }
  @media (max-width: 420px) {
    .team-col {
      width: 100%;
      justify-content: flex-start;
    }
  }
}
</style>
