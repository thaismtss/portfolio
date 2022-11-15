<template>
  <div class="projects">
    <div>
      <h1>Projetos</h1>
      <div class="projects__container">
        <GSCarousel
          :items="projects"
          item-gap="16"
          :items-to-show="itemsToShow"
          :layout="GSLayoutDefault"
          :layout-props="{
            disableArrows: false,
          }"
        >
          <template #item="{ data }">
            <div class="slide">
              <h3>{{ data.name }}</h3>
              <p class="projects__description">{{ data.description }}</p>
              <div class="projects__buttons-container">
                <a class="projects__button">Repositorio</a>
                <a class="projects__button">Demo</a>
              </div>
            </div>
          </template>
        </GSCarousel>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { GSCarousel, GSLayoutDefault } from 'gitart-scroll-carousel'

const width = ref(0)

const projects = [
  {
    name: 'CuideSe',
    description:
      'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue',
  },
  {
    name: 'CuideSe',
    description:
      'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue',
  },
  {
    name: 'CuideSe',
    description:
      'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue',
  },
  {
    name: 'CuideSe',
    description:
      'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue',
  },
]

onMounted(() => {
  if (process.client) {
    window.addEventListener('resize', handleResize)
    handleResize()
  }
})

const itemsToShow = computed(() => {
  return width.value <= 600 ? 1 : 4
})

const handleResize = () => {
  width.value = window.innerWidth
}
</script>

<style lang="scss">
:root {
  --gsc-custom-arrow-bg-hover: #75597d;
  --gsc-custom-arrow-bg: #75597d;
  --gsc-custom-indicator-bar-color: #75597d;
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
    text-align: left;
    font-family: 'Lato', sans-serif;
  }

  &__buttons-container {
    display: flex;
    justify-content: space-around;
  }

  &__button {
    padding: 0.4em;
    margin: 0.2em;
    width: 6em;
    background-color: $old-lavender;
    color: white;
    font-family: 'Ubuntu', sans-serif;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }
}

.slide {
  box-shadow: 0 6px 15px -3px rgb(0 0 0/0.3);
  height: 12em;
  border-radius: 5px;
  background: #f3d8ea;
  color: $old-lavender;
  padding: 1em;

  @include for-phone-only {
    height: 15em;
    width: 12em;
  }
}
</style>
