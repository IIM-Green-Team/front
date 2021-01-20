<template>
  <div class="slider-1">
    <div class="c-graph u-flex u-center" v-if="appShow">
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
import { getApi } from '../utils/api'
import { countries } from '../utils/fallbackData'

export default {
  components: { EarthBar },
  async created() {
    const res = await getApi('/planet', countries)
    this.countries = res.data
  },
  data() {
    return {
      countries: []
    }
  },
  props: {
    appShow: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    countriesArray() {
      return Object.entries(this.countries) 
    }
  },
};
</script>

       