<template>
  <div class="c-form">
    <div class="u-flex">
      <p class="col-12 c-form__title">
        À quelle fréquence achetez-vous vos vêtements ?
      </p>
      <div class="c-form__group c-form__group--radio">
        <input class="radio" type="radio" name="q5" id="13" required />
        <label for="13">Plusieurs fois par semaine <span></span></label>
      </div>
      <div class="c-form__group c-form__group--radio">
        <input class="radio" type="radio" name="q5" id="14" required />
        <label for="14">Une fois par mois <span></span></label>
      </div>
      <div class="c-form__group c-form__group--radio">
        <input class="radio" type="radio" name="q5" id="15" required />
        <label for="15">Une fois par an <span></span></label>
      </div>
      <div class="c-form__group c-form__group--radio">
        <input class="radio" type="radio" name="q5" id="16" required />
        <label for="16">Jamais <span></span></label>
      </div>
    </div>
    <div class="u-flex">
      <p class="col-12 c-form__title">
        À quelle fréquence jetez-vous vos vêtements ?
      </p>
      <div class="c-form__group c-form__group--radio">
        <input class="radio" type="radio" name="q6" id="17" required />
        <label for="17">Plusieurs fois par semaine <span></span></label>
      </div>
      <div class="c-form__group c-form__group--radio">
        <input class="radio" type="radio" name="q6" id="18" required />
        <label for="18">Une fois par mois <span></span></label>
      </div>
      <div class="c-form__group c-form__group--radio">
        <input class="radio" type="radio" name="q6" id="19" required />
        <label for="19">Une fois par an <span></span></label>
      </div>
      <div class="c-form__group c-form__group--radio">
        <input class="radio" type="radio" name="q6" id="20" required />
        <label for="20">Jamais <span></span></label>
      </div>
    </div>
    <div class="u-flex">
      <p class="col-12 c-form__title">Où achetez-vous vos vétements ?</p>
      <div class="c-form__group c-form__group--radio">
        <input class="radio" type="radio" name="q7" id="21" required />
        <label for="21">Magasin (Zara, H&M etc..) <span></span></label>
      </div>
      <div class="c-form__group c-form__group--radio">
        <input class="radio" type="radio" name="q7" id="22" required />
        <label for="22">En ligne (Asos) <span></span></label>
      </div>
      <div class="c-form__group c-form__group--radio">
        <input class="radio" type="radio" name="q7" id="23" required />
        <label for="23">Site de revente (Vinted) <span></span></label>
      </div>
      <div class="c-form__group c-form__group--radio">
        <input class="radio" type="radio" name="q7" id="24" required />
        <label for="24">Friperie <span></span></label>
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
       