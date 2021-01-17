<template>
  <div class="slider-2">
    <div class="u-flex c-graph2">
      <div class="col-12">
        <p class="h3 u-center">Notre alimentation</p>
      </div>
      <div class="line">
        <div style="height: 100%" class="bar"></div>
        <span class="text--md">15 000 L</span>
        <img :src="'./img/boeuf.png'" alt="" />
        <p>Boeuf</p>
      </div>
      <div class="line">
        <div style="height: 70%" class="bar"></div>
        <span class="text--md">4 900 L </span>
        <img :src="'./img/cochon.png'" alt="" />
        <p>Cochon</p>
      </div>
      <div class="line">
        <div style="height: 60%" class="bar"></div>
        <span class="text--md">4 000 L</span>
        <img :src="'./img/poule.png'" alt="" />
        <p>Poulet</p>
      </div>
      <div class="line">
        <div style="height: 50%" class="bar"></div>
        <span class="text--md">1 300 L </span>
        <img :src="'./img/ble.png'" alt="" />
        <p>Céréale</p>
      </div>
      <div class="line">
        <div style="height: 30%" class="bar"></div>
        <span class="text--md">700 L</span>
        <img :src="'./img/pomme.png'" alt="" />
        <p>Pomme</p>
      </div>
      <div class="line">
        <div style="height: 20%" class="bar"></div>
        <span class="text--md">184 L</span>
        <img :src="'./img/tomate.png'" alt="" />
        <p>Tomate</p>
      </div>
      <div class="line">
        <div style="height: 10%" class="bar"></div>
        <span class="text--md">131 L</span>
        <img :src="'./img/carrot.png'" alt="" />
        <p>Carotte</p>
      </div>
      <div class="col-12">
        <p class="p-italic u-center">→ Consommation en eau pour 1 Kg de ...</p>
      </div>
    </div>
  </div>
</template>


<script>

export default {
  name: "Slider2",
};
</script>