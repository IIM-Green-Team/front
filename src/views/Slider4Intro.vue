<template>
  <div
    style="height: 100%"
    class="u-flex justify-content-center align-items-center slider-4"
  >
    <div class="col-8">
      <h2 class="h2 u-blue u-center u-yellow">EAU</h2>
      <p class="u-center">La consommation d'eau en france ...</p>
      <div class="u-flex justify-content-between align-items-center">
        <img style="width: 30%" :src="'./img/water-1.png'" alt="" />
        <p style="width: 70%">
          Entre <span class="u-blue text--xl">48%</span> de la consommation
          d'eau est majotirairement utilisée pour l'irrigation.
        </p>
      </div>
      <div class="u-flex justify-content-between align-items-center">
        <p style="width: 70%">
          <span class="u-blue text--xl">22% </span> essenciellement utilisés
          pour le refroidissement des centrales thermiques et nucléaires
        </p>
        <img style="width: 30%" :src="'./img/water-2.png'" alt="" />
      </div>
    </div>
  </div>
</template>