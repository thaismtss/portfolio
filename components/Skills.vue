<template>
  <div class="work">
    <div class="work__container">
      <div class="work__container__skills">
        <h1 class="work__container__title">Skills &lt; &frasl; &gt;</h1>
        <div class="work__container__skills__icons">
          <Icon
            v-for="(icon, i) in itemsSkills"
            :key="i"
            :icon="icon.fields.icon"
            :label="icon.fields.label"
          />
        </div>
      </div>
      <div>
        <h1 class="work__container__title">Experiência</h1>
        <div class="work__container__experience">
          <WorkExperience
            v-for="(field, i) in itemsWorkExperience"
            :key="i"
            :year="field.fields.year"
            :title="field.fields.title"
            :description="field.fields.description"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IWorkExperienceFields, ISkillsFields } from '~~/types'

const skills = await useAsyncData('skills', async () => {
  const { $client } = useNuxtApp()
  return await $client.getEntries<ISkillsFields>({
    content_type: 'skills',
  })
})

const workExperience = await useAsyncData('workExperience', async () => {
  const { $client } = useNuxtApp()
  return await $client.getEntries<IWorkExperienceFields>({
    content_type: 'workExperience',
    order: '-fields.year',
  })
})

const itemsSkills = skills?.data?.value?.items
const itemsWorkExperience = workExperience?.data?.value?.items
</script>

<style lang="scss">
.work {
  width: 100%;
  padding: 0.4em 0;
  background-color: #f3d8ea;

  &__container {
    width: 85vw;
    margin: 0 auto;
    font-family: 'Ubuntu', sans-serif;
    color: $middle-purple;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    &__skills {
      width: 30em;

      &__icons {
        display: flex;
        width: 20em;
        justify-content: space-between;
        flex-wrap: wrap;
        margin: 0 auto;
      }
    }

    &__title {
      margin: 2em 0;
    }

    &__experience {
      width: 35em;

      @include for-phone-only {
        width: 25em;
      }
    }
  }
}
</style>
