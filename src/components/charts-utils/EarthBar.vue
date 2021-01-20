<template>
  <div class="col-2 column-planet">
    <div class="u-flex align-items-center">
      <p class="u-rotate text--md">{{ name }}</p>
      <div class="u-flex flex-column align-items-center">
        <img 
          v-for="(planet, index) in planetCount"
          :key="index"
          :ref="`earth-${index}`"
          class="img-planet"
          :src="'./img/earth.png'" 
          alt="ecologie"
        />
      </div>
    </div>
    <span class="text--xl u-color-lightgreen">{{ count | addComma }}</span>
  </div>
</template>

<script>
import { TimelineLite, Back } from "gsap";


  export default {
    props: {
      count: {
        type: Number,
        default: 0
      },
      name: {
        type: String,
        default: ''
      },
    },
    computed: {
      planetCount() {
        const floatNumber = (Math.round(this.count))
        return new Array(Math.round(floatNumber)).fill(0) 
      }
    },
    filters: {
      addComma(value) {
        return value.toString().replace('.', ',');
      }
    },
    mounted () {
      const timeline = new TimelineLite();
      const animationOptions = {
        y: 50,
        opacity: 0,
        delay: 0.1,
        ease: Back.easeInOut,
      }
      timeline.delay(1)
      Object.keys(this.$refs)
        .reverse()
        .map((key) => {
          timeline.from(this.$refs[key], 1, animationOptions, "-=1");
        })
    },
  }
</script>

<style lang="scss" scoped>

</style>