<template>
  <div id="modal-backdrop" @click="handleOutsideClick">
    <div class="modal">
      <button class="btn-close" @click="handleClose">
        <Icon type="close" />
      </button>
      <section class="modal-body">
        <slot name="body"> This is the default body! </slot>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue'

const emit = defineEmits(['close'])

const handleClose = () => {
  emit('close')
}

const handleOutsideClick = (e: Event) => {
  const target = e.target as HTMLButtonElement
  if (target?.id === 'modal-backdrop') handleClose()
}
</script>

<style lang="scss">
#modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  z-index: 3;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  width: 62%;
  height: 90%;

  @include for-phone-only {
    width: 90%;
    height: 60%;
  }
}

.btn-close {
  position: absolute;
  z-index: 3;
  right: 20%;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  background: transparent;

  @include for-phone-only {
    right: 5%;
  }

  svg {
    width: 1.8em;
  }
}

.modal-body {
  position: relative;
  padding: 20px 5px;
  margin: auto;
}
</style>
