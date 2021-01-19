<template>
  <div class="c-form">
    <div class="u-flex">
        <p class="text--xl">1 / 4 </p>
      <p class="col-12 c-form__title">Achètes-tu uniquement du bio ?</p>
      <div class="c-form__group c-form__group--radio">
        <input
          class="radio"
          type="radio"
          name="q1"
          id="1"
          value="1"
          v-model="picked1"
          required
        />
        <label for="1">Jamais <span></span></label>
      </div>
      <div class="c-form__group c-form__group--radio">
        <input
          class="radio"
          type="radio"
          name="q1"
          id="2"
          value="2"
          v-model="picked1"
          required
        />
        <label for="2">1 repas sur 2 <span></span></label>
      </div>
      <div class="c-form__group c-form__group--radio">
        <input
          class="radio"
          type="radio"
          name="q1"
          id="3"
          value="3"
          v-model="picked1"
          required
        />
        <label for="3">Tous les repas <span></span></label>
      </div>
    </div>
    <div class="u-flex">
      <p class="col-12 c-form__title">
        A quelle fréquence mangez-vous des plats contenant de la viande ou du
        poisson
      </p>
      <div class="c-form__group c-form__group--radio">
        <input
          class="radio"
          type="radio"
          name="q2"
          id="4"
          value="1"
          v-model="picked2"
          required
        />
        <label for="4">Jamais <span></span></label>
      </div>
      <div class="c-form__group c-form__group--radio">
        <input
          class="radio"
          type="radio"
          name="q2"
          id="5"
          value="2"
          v-model="picked2"
          required
        />
        <label for="5">1 repas sur 2 <span></span></label>
      </div>
      <div class="c-form__group c-form__group--radio">
        <input
          class="radio"
          type="radio"
          name="q2"
          id="6"
          value="3"
          v-model="picked2"
          required
        />
        <label for="6">Tous les repas <span></span></label>
      </div>
    </div>
    <div class="u-flex">
      <p class="col-12 c-form__title">
        A quelle fréquence consommez-vous des produits laitiers ?
      </p>
      <div class="c-form__group c-form__group--radio">
        <input
          class="radio"
          type="radio"
          name="q3"
          id="7"
          value="1"
          v-model="picked3"
          required
        />
        <label for="7">Jamais <span></span></label>
      </div>
      <div class="c-form__group c-form__group--radio">
        <input
          class="radio"
          type="radio"
          name="q3"
          id="8"
          value="2"
          v-model="picked3"
          required
        />
        <label for="8">1 repas sur 2 <span></span></label>
      </div>
      <div class="c-form__group c-form__group--radio">
        <input
          class="radio"
          type="radio"
          name="q3"
          id="9"
          value="3"
          v-model="picked3"
          required
        />
        <label for="9">Tous les repas <span></span></label>
      </div>
    </div>

    <div class="u-flex">
      <p class="col-12 c-form__title">
        À quelle fréquence jetez-vous de la nourriture ?
      </p>
      <div class="c-form__group c-form__group--radio">
        <input
          class="radio"
          type="radio"
          name="q4"
          id="10"
          value="1"
          v-model="picked4"
          required
        />
        <label for="10">Plusieurs fois par semaine <span></span></label>
      </div>
      <div class="c-form__group c-form__group--radio">
        <input
          class="radio"
          type="radio"
          name="q4"
          id="11"
          value="2"
          v-model="picked4"
          required
        />
        <label for="11">De temps en temps <span></span></label>
      </div>
      <div class="c-form__group c-form__group--radio">
        <input
          class="radio"
          type="radio"
          name="q4"
          id="12"
          value="3"
          v-model="picked4"
          required
        />
        <label for="12">Presque jamais <span></span></label>
      </div>
    </div>
    <button class="c-form__btn swiper-button-next">Suivant</button>
  </div>
</template>


<script>
export default {
  data() {
    return {
      picked1: 0,
      picked2: 0,
      picked3: 0,
      picked4: 0,
    };
  },
  watch: {
    picked1: function () {
      this.$emit(
        "child-total1",
        parseInt(this.picked1) +
          parseInt(this.picked2) +
          parseInt(this.picked3) +
          parseInt(this.picked4)
      );
    },
    picked2: function () {
      this.$emit(
        "child-total1",
        parseInt(this.picked1) +
          parseInt(this.picked2) +
          parseInt(this.picked3) +
          parseInt(this.picked4)
      );
    },
    picked3: function () {
      this.$emit(
        "child-total1",
        parseInt(this.picked1) +
          parseInt(this.picked2) +
          parseInt(this.picked3) +
          parseInt(this.picked4)
      );
    },
    picked4: function () {
      this.$emit(
        "child-total1",
        parseInt(this.picked1) +
          parseInt(this.picked2) +
          parseInt(this.picked3) +
          parseInt(this.picked4)
      );
    },
  },
};
</script>
       