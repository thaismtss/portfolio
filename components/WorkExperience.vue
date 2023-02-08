<template>
  <div class="experience">
    <div class="experience__year">{{ year }}</div>
    <div class="experience__content">
      <span class="experience__content__title">{{ title }}</span>
      <span class="experience__content__description">{{ description }} </span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  year: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})
</script>

<style lang="scss">
.experience {
  display: flex;
  justify-content: space-around;
  margin-bottom: 3em;

  &__year {
    height: 4em;
    width: 4em;
    background-color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $old-lavender;
  }

  &__content {
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 29em;

    @include for-phone-only {
      width: 18em;
    }

    &__title {
      color: $old-lavender;
    }

    &__description {
      color: $old-lavender;
      font-family: 'Lato', sans-serif;
    }
  }
}
</style>
