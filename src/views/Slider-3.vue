<template>
  <div class="u-flex c-graph3 slider-3">
    <div class="col-12">
      <p class="h3 u-center u-yellow">Notre impact sur le textile</p>
      <!-- <p class="c-slide__title title p-italic">
        → Pourquoi le textile consomme beaucoup de déchets ...
      </p> -->
    </div>
    <div class="col-4">
      <p style="margin-bottom: 20px">
        <span id="counter-4" class="text--xl u-yellow">30 Kg </span> d'habits achetés chaque
        année en France
      </p>
      <br />
      <p>
        <span class="text--xl u-yellow">70 douches </span> pour produire une
        chemise.
      </p>
    </div>
    <div class="col-4 u-flex flex-column align-items-center">
      <img class="img-man" :src="'./img/tshirt.png'" alt="man" />
      <img class="img-man" :src="'./img/jean.png'" alt="man" />
      <img class="img-man" :src="'./img/basket.png'" alt="man" />
    </div>
    <div class="col-4">
      <p style="margin-bottom: 50px">
        nécessite plus de <span class="text--xl u-yellow">150 </span> opérations
        nécessitant des dizaines de composants chimiques et de matériaux
        polluants
      </p>
      <p>
        <span class="text--xl u-yellow">15 000 T</span> de produits textiles
        sont détruits en France soit l’équivalent du poids d’une ou deux Tour
        Eiffel
      </p>
    </div>
  </div>
</template>


<script>
export default {
  name: "Sldier3",
};
</script>