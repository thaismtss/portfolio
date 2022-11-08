<template>
  <div>
    <div class="about">
      <div class="about__image">
        <h1>Sobre mim</h1>
        <img src="~/assets/aboutMe.png" alt="" />
      </div>
      <div class="about__description">
        {{ fields.aboutMe }}
      </div>
      <div class="about__background"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data } = await useAsyncData('aboutMe', async (nuxtApp) => {
  const { $client } = nuxtApp
  return await $client.getEntries({
    content_type: 'portfolio',
  })
})

const items = data.value.items
const entry = items[0]
const fields = entry.fields
</script>

<style lang="scss">
.about {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 80vw;
  margin: 3em auto;

  &__image {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Ubuntu', sans-serif;
    color: $middle-purple;

    img {
      width: 220px;
      height: 220px;
    }
  }

  &__description {
    width: 35em;
    font-family: 'Lato', sans-serif;
    color: $old-lavender;

    @include for-phone-only {
      margin: 3em;
      text-align: center;
      width: 30em;
    }
  }

  &__background {
    position: absolute;
    right: 40px;
    top: 600px;
    overflow: hidden;
    height: 8em;
    width: 8em;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url('~/assets/vector-one.png');
  }
}
</style>
