<template>
  <div class="projects">
    <div>
      <h1>Projetos</h1>
      <div class="projects__container">
        <GSCarousel
          :items="items"
          item-gap="18"
          :items-to-show="2"
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
import { GSCarousel, GSLayoutDefault } from 'gitart-scroll-carousel'

const items = [
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
    height: 20em;
    width: 9em;
  }
}
</style>
