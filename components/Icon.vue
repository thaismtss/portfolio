<template>
  <div class="icon">
    <span v-dompurify-html="icon"></span>
  </div>
</template>

<script setup lang="ts">
defineProps({
  icon: {
    type: String,
    required: true,
  },
})
</script>

<style lang="scss">
.icon {
  height: 5em;
  width: 5em;
  margin: 0.5em;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  fill: $old-lavender;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: 3em;
    width: 3em;
  }
}
</style>
