<template>
  <div class="slider-1">
    <div class="c-graph u-flex u-center">
      <div class="col-12">
        <p class="h3 u-color-lightgreen">Notre planète</p>
      </div>
      <earth-bar 
        v-for="([country, value], index) in countriesArray"
        :key="index"
        :count="value"
        :name="country"
      />
    </div>
    <p class="p-italic u-center">
      → Combien de planète Terre faudrait-il si la population mondiale vivait
      comme les habitants de ...
    </p>
  </div>
</template>


<script>
import EarthBar from '../components/charts-utils/EarthBar.vue';
export default {
  components: { EarthBar },
  data() {
    return {
      countries: {
        'Australie': 5.2,
        'États-Unis': 5,
        'France': 3,
        'Chine': 2.1,
        'Inde': 0.6,
      },
    }
  },
  computed: {
    countriesArray() {
      return Object.entries(this.countries) 
    }
  },
};
</script>

       