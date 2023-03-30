<template>
  <div>
    <div class="about">
      <div class="about__image">
        <h1>Sobre mim</h1>
        <img src="~/assets/aboutMe.png" alt="" />
      </div>
      <div class="about__description">
        {{ fields.aboutMe }}

        <p>Minhas redes</p>
        <div class="about__contacts">
          <a
            href="https://www.linkedin.com/in/thais-martins-1b4692190/"
            target="_blank"
          >
            <Icon type="linkedin" />
          </a>
          <a href="https://github.com/thaismtss" target="_blank">
            <Icon type="square-github" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IAboutFields } from '~~/types'

const aboutMe = await useAsyncData('aboutMe', async () => {
  const { $client } = useNuxtApp()
  return await $client.getEntries<IAboutFields>({
    content_type: 'portfolio',
  })
})

const items = aboutMe?.data?.value?.items || []
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
  margin: 1.5em auto;

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
    height: 8em;
    width: 8em;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url('~/assets/vector-one.png');
  }

  &__contacts {
    display: flex;
    width: 6em;
    justify-content: space-between;

    @include for-phone-only {
      margin: 0 auto;
    }
  }
}
</style>
