<template>
  <div class="c-form">
    <div class="u-flex">
      <p class="col-12 c-form__title">Achètes-tu uniquement du bio ?</p>
      <div class="c-form__group c-form__group--radio">
        <input class="radio" type="radio" name="q1" id="1" required />
        <label for="1">Jamais <span></span></label>
      </div>
      <div class="c-form__group c-form__group--radio">
        <input class="radio" type="radio" name="q1" id="2" required />
        <label for="2">1 repas sur 2 <span></span></label>
      </div>
      <div class="c-form__group c-form__group--radio">
        <input class="radio" type="radio" name="q1" id="3" required />
        <label for="3">Tous les repas <span></span></label>
      </div>
    </div>
    <div class="u-flex">
      <p class="col-12 c-form__title">
        A quelle fréquence mangez-vous des plats contenant de la viande ou du
        poisson
      </p>
      <div class="c-form__group c-form__group--radio">
        <input class="radio" type="radio" name="q2" id="4" required />
        <label for="4">Jamais <span></span></label>
      </div>
      <div class="c-form__group c-form__group--radio">
        <input class="radio" type="radio" name="q2" id="5" required />
        <label for="5">1 repas sur 2 <span></span></label>
      </div>
      <div class="c-form__group c-form__group--radio">
        <input class="radio" type="radio" name="q2" id="6" required />
        <label for="6">Tous les repas <span></span></label>
      </div>
    </div>
    <div class="u-flex">
      <p class="col-12 c-form__title">
        A quelle fréquence consommez-vous des produits laitiers ?
      </p>
      <div class="c-form__group c-form__group--radio">
        <input class="radio" type="radio" name="q3" id="7" required />
        <label for="7">Jamais <span></span></label>
      </div>
      <div class="c-form__group c-form__group--radio">
        <input class="radio" type="radio" name="q3" id="8" required />
        <label for="8">1 repas sur 2 <span></span></label>
      </div>
      <div class="c-form__group c-form__group--radio">
        <input class="radio" type="radio" name="q3" id="9" required />
        <label for="9">Tous les repas <span></span></label>
      </div>
    </div>

    <div class="u-flex">
      <p class="col-12 c-form__title">
        À quelle fréquence jetez-vous de la nourriture ?
      </p>
      <div class="c-form__group c-form__group--radio">
        <input class="radio" type="radio" name="q4" id="10" required />
        <label for="10">Plusieurs fois par semaine <span></span></label>
      </div>
      <div class="c-form__group c-form__group--radio">
        <input class="radio" type="radio" name="q4" id="11" required />
        <label for=11>De temps en temps <span></span></label>
      </div>
      <div class="c-form__group c-form__group--radio">
        <input class="radio" type="radio" name="q4" id="12" required />
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
      select1Normal: "",
      select1: 2,
      options1: [
        { text: "IT", value: 0 },
        { text: "Blade Runner", value: 2 },
        { text: "Thor Ragnarok", value: 3 },
      ],
    };
  },
};
</script>
       