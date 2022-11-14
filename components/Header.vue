<template>
  <div class="header">
    <h1 class="header__content">
      Olá! Eu sou <span class="header__name">Thais Martins</span> e sou
      Desenvolvedora Frontend
    </h1>
    <div class="header__background"></div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 25em;
  background-image: url('~/assets/background.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 95%;
  margin-top: -2em;
  display: grid;
  align-content: center;
  grid-template-columns: repeat(4, 1fr);

  @include for-big-desktop-up {
    height: 34em;
  }

  @include for-phone-only {
    background-image: url('~/assets/background-mobile.png');
  }

  &__background {
    position: absolute;
    right: 40px;
    top: 80px;
    height: 15em;
    width: 20em;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url('~/assets/vector-header.png');

    @include for-phone-only {
      right: 10px;
      top: 180px;
      height: 10em;
      width: 10em;
    }
  }

  &__content {
    font: 700 3em Ubuntu;
    width: 14em;
    color: $middle-purple;
    grid-column: 2;

    @include for-phone-only {
      width: 12.5em;
      font-size: 1.5em;
    }
  }

  &__name {
    color: $old-lavender;
  }
}
</style>
