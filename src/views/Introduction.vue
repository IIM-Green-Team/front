<template>
  <div class="c-loading" v-bind:class="isHidden ? 'c-loading__close' : ''">
    <p ref="line" class="c-loading__line u-white">
      Il est temps d’ouvrir les yeux sur notre situation écologique
    </p>
    <p ref="line2" class="c-loading__line u-white">
     Le monde produit 2,01 milliards de tonnes de déchets municipaux dans le monde
    </p>
    <p ref="line3" class="c-loading__line u-white">
      Si aucune mesure n'est prise, le volume des déchets produits pourrait augmenter<br> de 70 % à près de 3,5 milliards de tonnes dans le monde d'ici à 2050
    </p>

    <button v-on:click="onHide" ref="btn" class="c-loading__btn">Découvrir</button>
    <a
      v-if="showPassIntro"
      @click="onHide"
      class="c-loading__pass-intro"
    >
      Passer l'introduction
    </a>
  </div>
</template>

<script>
import { TimelineLite, Back } from "gsap";
export default {
  data() {
    return {
      isHidden: false,
      showPassIntro: false
    };
  },
  mounted() {
    const { line, line2, line3, btn } = this.$refs;
    const timeline = new TimelineLite();
    const delay = v => process.env.NODE_ENV === 'development' ? 0.002 : v

    window.setTimeout(() => {
      this.showPassIntro = true
    }, 3000)
  
    timeline.from(line, delay(1), {
      y: 100,
      opacity: 0,
      delay: delay(0.2),
      skewY: 2,
      ease: Back.out,
    });

    timeline.to(line, delay(1), {
      y: -100,
      opacity: 0,
      delay: delay(1.5),
      skewY: 2,
      ease: Back.out,
    });

    timeline.from(line2, delay(1), {
      y: 100,
      opacity: 0,
      delay: delay(0.5),
      skewY: 2,
      ease: Back.out,
    });

    timeline.to(line2, delay(1), {
      y: -100,
      opacity: 0,
      delay: delay(1.5),
      skewY: 2,
      ease: Back.out,
    });

    timeline.from(line3, delay(1), {
      y: 100,
      opacity: 0,
      delay: delay(1),
      skewY: 2,
      ease: Back.out,
    });

    timeline.to(line3, delay(1), {
      y: -100,
      opacity: 0,
      delay: delay(2.5),
      skewY: 2,
      ease: Back.out,
    });

    timeline.from(btn, delay(1), {
      y: 100,
      opacity: 0,
      delay: delay(0.5),
      skewY: 2,
      ease: Back.out,
      onComplete: () => {
        this.showPassIntro = false
      }
    });
  },

methods: {
  onHide() {
    this.$emit('showapp')
    this.isHidden = !this.isHidden
  }
},
};
</script>