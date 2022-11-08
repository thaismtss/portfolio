<template>
  <div class="work">
    <div class="work__container">
      <div class="work__container__skills">
        <h1>Skills &lt; &frasl; &gt;</h1>
        <div class="work__container__skills__icons">
          <Icon v-for="(icon, i) in items" :key="i" :icon="icon.fields.icon" />
        </div>
      </div>
      <div>
        <h1>Experiência</h1>
        <div class="work__container__experience">
          <WorkExperience />
          <WorkExperience />
          <WorkExperience />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data } = await useAsyncData('skills', async (nuxtApp) => {
  const { $client } = nuxtApp
  return await $client.getEntries({
    content_type: 'skills',
  })
})

const items = data.value.items
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

    &__experience {
      width: 35em;

      @include for-phone-only {
        width: 25em;
      }
    }
  }
}
</style>
