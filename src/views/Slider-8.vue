<template>
  <div class="c-form">
    <div class="u-flex">
      <p class="col-12 c-form__title">
       Quelle est la durée moyenne de vos douches ?
      </p>
      <div class="c-form__group c-form__group--radio">
        <input class="radio" type="radio" name="q1" id="1" required />
        <label for="1">Plusieurs fois par semaine <span></span></label>
      </div>
      <div class="c-form__group c-form__group--radio">
        <input class="radio" type="radio" name="q1" id="2" required />
        <label for="2">Une fois par mois <span></span></label>
      </div>
      <div class="c-form__group c-form__group--radio">
        <input class="radio" type="radio" name="q1" id="3" required />
        <label for="3">Une fois par an <span></span></label>
      </div>
      <div class="c-form__group c-form__group--radio">
        <input class="radio" type="radio" name="q1" id="4" required />
        <label for="4">Jamais <span></span></label>
      </div>
    </div>
    <div class="u-flex">
      <p class="col-12 c-form__title">
        Prends-tu des bains ?
      </p>
      <div class="c-form__group c-form__group--radio">
        <input class="radio" type="radio" name="q1" id="1" required />
        <label for="1">Plusieurs fois par semaine <span></span></label>
      </div>
      <div class="c-form__group c-form__group--radio">
        <input class="radio" type="radio" name="q1" id="2" required />
        <label for="2">Une fois par mois <span></span></label>
      </div>
      <div class="c-form__group c-form__group--radio">
        <input class="radio" type="radio" name="q1" id="3" required />
        <label for="3">Une fois par an <span></span></label>
      </div>
      <div class="c-form__group c-form__group--radio">
        <input class="radio" type="radio" name="q1" id="4" required />
        <label for="4">Jamais <span></span></label>
      </div>
    </div>
    <div class="u-flex">
      <p class="col-12 c-form__title">Comment fais-tu ta vaisselle ?</p>
      <div class="c-form__group c-form__group--radio">
        <input class="radio" type="radio" name="q3" id="7" required />
        <label for="7">Magasin (Zara, H&M etc..) <span></span></label>
      </div>
      <div class="c-form__group c-form__group--radio">
        <input class="radio" type="radio" name="q3" id="8" required />
        <label for="8">En ligne (Asos) <span></span></label>
      </div>
    </div>

    <button type="submit" class="c-form__btn">Découvrir ma note</button>
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
       