<template>
  <div class="projects">
    <div>
      <h1>Projetos</h1>
      <div class="projects__container">
        <GSCarousel
          :items="projectItems"
          item-gap="1"
          :preview-size="0"
          :items-to-show="itemsToShow"
          :layout="GSLayoutDefault"
          :layout-props="{
            disableArrows: false,
          }"
        >
          <template #item="{ data, index }">
            <div class="slide-projects">
              <div class="slide-projects__container">
                <img
                  :src="data.fields.images[0].fields.file.url"
                  width="320"
                  alt=""
                />

                <h3>{{ data.fields.title }}</h3>
                <p class="projects__description">
                  {{ data.fields.description }}
                </p>
                <div class="projects__techs">
                  <span v-for="(tech, i) in data.fields.techs" :key="i">{{
                    tech
                  }}</span>
                </div>
                <div class="projects__buttons-container">
                  <a
                    class="projects__button"
                    :href="data.fields.repository"
                    target="_blank"
                  >
                    <Icon type="github" />
                    Code
                  </a>
                  <button
                    v-if="data.fields.images"
                    class="projects__button"
                    @click="openModal(index)"
                  >
                    <Icon type="images" />
                    Imagens
                  </button>
                  <a v-if="data.fields.demo" class="projects__button">
                    <Icon type="link" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          </template>
        </GSCarousel>
        <Modal v-show="showModal" @close="closeModal">
          <template #body>
            <GSCarousel
              :items="images"
              item-gap="1"
              :items-to-show="1"
              :layout="GSLayoutNumeric"
              :preview-size="0"
              :layout-props="{
                disableArrows: false,
              }"
            >
              <template #item="{ data }">
                <div class="slide-images">
                  <img :src="data.fields.file.url" alt="" />
                </div>
              </template>
            </GSCarousel>
          </template>
        </Modal>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { Asset } from 'contentful'
import { IProjectsFields } from '~~/types';
import {
  GSCarousel,
  GSLayoutDefault,
  GSLayoutNumeric,
} from 'gitart-scroll-carousel'

const width = ref(0)
const showModal = ref(false)
const images = ref<Asset[]>([])

const projects = await useAsyncData('projects', async () => {
  const { $client } = useNuxtApp()
  return await $client.getEntries<IProjectsFields>({
    content_type: 'projects',
  })
})

const projectItems = projects?.data?.value?.items || []

onMounted(() => {
  if (process.client) {
    window.addEventListener('resize', handleResize)
    handleResize()
  }
})

const itemsToShow = computed(() => {
  return width.value <= 600 ? 1 : 3
})

const handleResize = () => {
  width.value = window.innerWidth
}

const openModal = (index: number) => {
  showModal.value = true
  images.value = projectItems[index]?.fields?.images
}

const closeModal = () => {
  showModal.value = false
}
</script>

<style lang="scss">
:root {
  --gsc-custom-arrow-bg-hover: #d88dc1;
  --gsc-custom-arrow-bg: #d88dc1;
  --gsc-custom-indicator-bar-color: #d88dc1;
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

  &__description {
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
      border: 1px solid #75597d;
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

.slide-projects {
  border-radius: 5px;
  background: #f3d8ea;
  color: $old-lavender;
  padding: 1em 0;
  width: 95%;

  img {
    border-radius: 15px;

    @include for-phone-only {
      width: 200px;
    }
  }
}

.slide-images {
  display: flex;
  justify-content: center;
  border-radius: 15px;
  color: #000;

  img {
    border-radius: 15px;
    width: 80%;
  }
}
</style>
