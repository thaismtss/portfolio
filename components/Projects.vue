<template>
  <div class="projects">
    <div>
      <h1>Projetos</h1>
      <div class="projects__container">
        <carousel :items-to-show="2.4" :breakpoints="breakpoints">
          <slide v-for="(project, i) in projectItems" :key="i">
            <div class="projects__card">
              <img
                :src="project.fields.images[0].fields.file.url"
              />
              <div class="projects__about">
                <h3>{{ project.fields.title }}</h3>
                <p>
                  {{ project.fields.description }}
                </p>
                <div class="projects__techs">
                  <span v-for="(tech, i) in project.fields.techs" :key="i">{{
                    tech
                  }}</span>
                </div>
                <div class="projects__buttons-container">
                  <a
                    class="projects__button"
                    :href="project.fields.repository"
                    target="_blank"
                  >
                    <Icon type="github" />
                    Code
                  </a>
                  <a
                    v-if="project.fields.demo"
                    :href="project.fields.demo"
                    target="_blank"
                    class="projects__button"
                  >
                    <Icon type="link" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          </slide>

          <template #addons>
            <navigation />
            <pagination />
          </template>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IProjectsFields } from '~~/types'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const projects = await useAsyncData('projects', async () => {
  const { $client } = useNuxtApp()
  return await $client.getEntries<IProjectsFields>({
    content_type: 'projects',
  })
})

const projectItems = projects?.data?.value?.items || []

const breakpoints =  {
  300: {
        itemsToShow: 1,
        snapAlign: 'center',
  },
  700: {
        itemsToShow: 1,
        snapAlign: 'center',
  },
  1024: {
        itemsToShow: 2.4,
        snapAlign: 'start',
      },
}
</script>

<style lang="scss">
.carousel * {
  box-sizing: unset;
}
.carousel__prev {
  left: -50px;
}

.carousel__next {
  right: -50px;
}

.projects {
  padding: 1em 0;
  text-align: center;
  color: $middle-purple;
  font-family: 'Ubuntu', sans-serif;

  &__container {
    width: 80vw;
    margin: 0 auto;
  }

  &__card {
    box-shadow: 11px -11px 23px -16px rgba(0, 0, 0, 0.57);
    width: 31.2em;

    img {
      width: 500px;
    }

    @include for-phone-only {
      width: 18.5em;

      img {
        width: 300px;
      }
    }
  }

  &__about {
    background: #f3d8ea;
    padding: 5px 0;
    margin-top: -10px;
    color: $old-lavender;
    text-align: center;
    font-family: 'Lato', sans-serif;
  }

  &__techs {
    font-family: 'Lato';
    margin-top: 2em;

    span {
      margin: 0.4em;
      padding: 0.4em;
      font-size: 0.8em;
      border: 1px solid $old-lavender;
      border-radius: 0.5em;
    }
  }

  &__buttons-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 1.5em;
  }

  &__button {
    display: flex;
    justify-content: space-around;
    padding: 0.6em;
    margin: 0.2em;
    background-color: $old-lavender;
    color: white;
    font-family: 'Ubuntu', sans-serif;
    font-size: 1em;
    border-radius: 5px;
    border: none;
    text-decoration: none;
    cursor: pointer;

    svg {
      width: 1em;
      padding-right: 0.5em;
      fill: white;
    }
  }
}
</style>
