<template>
  <div class="experience">
    <div class="experience__year">2022</div>
    <div class="experience__content">
      <span class="experience__content__title">Estágiaria Frontend</span>
      <span class="experience__content__description"
        >Desenvolvimento FrontEnd no time de integração da Linx Impulse.
        Responsável por implementar soluções focadas em empresas de varejo, como
        melhorias de produtos internos, tratamento de dados e implementações em
        sites de e-commerce.
      </span>
    </div>
  </div>
</template>

<script></script>

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
