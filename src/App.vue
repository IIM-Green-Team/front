<template>
  <div id="app">
    <Introduction 
      v-show="!isDev"
    />

    <div class="content-tips" v-bind:class="`${this.isOpen ? 'is-open' : ''}`">
      <img
        v-on:click="isOpen = !isOpen"
        class="btn-close"
        :src="'./img/cross.svg'"
        alt="cross"
      />
      <div v-if="this.index == 2">
        <p class="h4">Astuce alimentation :</p>
        <p>
          - Acheter ce que vous avez réellement besoin (eviter les achats
          impulsifs)<br />
          - Composter ses déchets alimentaires <br />
          - Cuisiner les restes<br />
          - Manger local <br />
          - Manger des fruits et des légumes de saison <br />
          - Manger moins de viande et de produits laitiers
        </p>
        <p class="h4">Le saviez-vous?</p>
        <p>
          Arrêter le café en capsules : + 395 € d'économie / an La capsule de
          café est un fléau pour la planète puisqu'elle représente 40 000 tonnes
          de déchets par an. Mais c'est aussi un drame pour votre porte monnaie
          puisqu'elle coûte environ 5 fois plus cher que le café moulu
          classique.
        </p>
      </div>
      <div v-if="this.index == 4">
        <p class="h4">Astuce textile :</p>
        <p>
          - Acheter moins mais mieux<br />
          - Acheter des vêtements de seconde main <br />
          - Réparer ses vêtements, leur donner une seconde vie<br />
          - Prêter, troquer, donner et même louer ses vêtements
        </p>
        <p class="h4">Le saviez-vous?</p>
        <p>
          Pour laver vos vêtements, faites votre lessive vous même : 23,25 euros
          / an La lessive maison demande peu de temps de préparation. Vous
          saurez ce que vous mettez dedans, et vous ferez des économies ! Que
          demander de plus ?
        </p>
      </div>
      <div v-if="this.index == 6">
        <p class="h4">Astuce eau :</p>
        <p>
          - Vérifier régulièrement l’état des robinets<br />
          - Prendre une douche courte plutôt que des bains <br />
          - Récupérer les eaux de pluie<br />
          - Utiliser du papier 100% recyclé et limiter les impressions
        </p>
        <p class="h4">Le saviez-vous?</p>
        <p>
          Investir dans une gourde: 218 euros d’économie / an Moins d'un centime
          d'euros le litre pour l'eau du robinet contre 40 centimes le litre
          pour l'eau minérale, le choix est vite fait ! Une fois passé le prix
          d'achat d'une gourde (une dizaine d'euros), le gain annuel est de 218
          euros par an. Les océans vous remercieront !
        </p>
      </div>
    </div>

    <div class="container">
      <audio loop id="audio" src="/music/music.mp3">
        You're browser is Outdated . Please Update The Browser
      </audio>

      <!--------------->
      <!---  MUSIC ---->
      <!--------------->
      <div
        v-on:click="this.togglePlay"
        class="c-btn-music"
        v-bind:class="`${this.isPaused ? 'is-paused' : ''}`"
      >
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
      </div>

      <!--------------->
      <!---  TIPS ---->
      <!--------------->
      <div v-if="this.index == 2 || this.index == 4 || this.index == 6" class="btn-tips" v-on:click="this.openTips">
             <img style="width: 35px" :src="'./img/plus.png'" alt="astuce" />
      </div>

      <div class="c-header">
        <h2 class="c-header__logo">Zero<br />déchet</h2>
        <!--------------->
        <!----  NAV ----->
        <!--------------->
        <nav>
          <ul>
            <li>
              <p
                v-on:click="swiper.slideTo(0, false)"
                class="nav-link slide-1"
                v-bind:class="`${this.index >= 0 ? 'is-active' : ''}`"
              >
                <!-- Etat des lieux -->
              </p>
            </li>
            <li>
              <p
                v-on:click="swiper.slideTo(1, false)"
                class="nav-link slide-2 is-small"
                v-bind:class="`${this.index >= 1 ? 'is-active' : ''}`"
              >
                <!-- Intro Alimentation -->
              </p>
            </li>
            <li>
              <p
                v-on:click="swiper.slideTo(2, false)"
                class="nav-link slide-3"
                v-bind:class="`${this.index >= 2 ? 'is-active' : ''}`"
              >
                <!--  Alimentation -->
              </p>
            </li>
            <li>
              <p
                v-on:click="swiper.slideTo(3, false)"
                class="nav-link slide-2 is-small"
                v-bind:class="`${this.index >= 3 ? 'is-active' : ''}`"
              >
                <!-- Intro Textile -->
              </p>
            </li>
            <li>
              <p
                v-on:click="swiper.slideTo(4, false)"
                class="nav-link slide-4"
                v-bind:class="`${this.index >= 4 ? 'is-active' : ''}`"
              >
                <!-- Industrie textile et mode -->
              </p>
            </li>
            <li>
              <p
                v-on:click="swiper.slideTo(5, false)"
                class="nav-link slide-2 is-small"
                v-bind:class="`${this.index >= 5 ? 'is-active' : ''}`"
              >
                <!-- Intro Energie et eau  -->
              </p>
            </li>
            <li>
              <p
                v-on:click="swiper.slideTo(6, false)"
                class="nav-link slide-5"
                v-bind:class="`${this.index >= 6 ? 'is-active' : ''}`"
              >
                <!-- Energie et eau -->
              </p>
            </li>
          </ul>
        </nav>
        <div v-if="this.index <= 6" class="btn-next swiper-button-next">
          <div class="content"></div>
          <div class="arrow"></div>
        </div>
      </div>

      <!--------------->
      <!----SLIDER----->
      <!--------------->
      <swiper
        class="swiper"
        ref="mySwiper"
        :options="swiperOptions"
        @slideChange="changeSwiperIndex"
      >
        <swiper-slide>
          <Slider1 />
        </swiper-slide>

        <swiper-slide>
          <Slider2Intro />
        </swiper-slide>

        <swiper-slide>
          <Slider2 />
        </swiper-slide>

        <swiper-slide>
          <Slider3Intro />
        </swiper-slide>

        <swiper-slide>
          <Slider3 />
        </swiper-slide>

        <swiper-slide>
          <Slider4Intro />
        </swiper-slide>

        <swiper-slide>
          <Slider4 />
        </swiper-slide>

        <swiper-slide>
          <Slider5Intro />
        </swiper-slide>

        <swiper-slide>
          <Slider5 @child-total1="totalValue1" />
        </swiper-slide>

        <swiper-slide>
          <Slider6 @child-total2="totalValue2" />
        </swiper-slide>

        <swiper-slide>
          <Slider7 @child-total3="totalValue3" />
        </swiper-slide>

        <swiper-slide>
          <Slider8 @child-total4="totalValue4" />
        </swiper-slide>

        <swiper-slide>
          <!-- <SliderDone v-bind:totalAll="total1" /> -->
          <div
            style="height: 100%"
            class="u-flex justify-content-center align-items-center"
          >
            <div class="col-8">
              <h2 class="h2">
                Votre note: {{ total1 + total2 + total3 + total4 }} / 42
              </h2>
              <p v-if="total1 + total2 + total3 + total4 < 20">
                Aïe... le zéro déchet ne semble pas être votre priorité.
                Redoublez d’efforts en lisant nos astuces et appliquez-les petit
                à petit dans votre quotidien.
              </p>
              <p v-if="total1 + total2 + total3 + total4 < 28">
                Pas mal ! Mais vous pouvez mieux faire pour atteindre un mode de
                vie plus sain pour l’environnement. Assurez-vous d’avoir bien
                appliquer nos astuces dans votre quotidien.
              </p>
              <p v-else>
                Bravo ! Vous êtes un bon exemple d’un mode de vie sain pour
                l’environnement. Continuez à préserver et n’oubliez pas d’en
                parler autour de vous en partageant notre site par exemple.
              </p>
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import { TimelineLite, Back } from "gsap";
const timeline = new TimelineLite();

import Chart from "chart.js";
import planetChartData from "./chart-data.js";
import myBarChart from "./chart-data-2.js";
import myBubbleChart from "./chart-data-3.js";
import axios from "axios";
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import Slider1 from "../src/views/Slider-1";
import Slider2 from "../src/views/Slider-2";
import Slider3 from "../src/views/Slider-3";
import Slider4 from "../src/views/Slider-4";
import Slider5 from "../src/views/Slider-5";
import Slider6 from "../src/views/Slider-6";
import Slider7 from "../src/views/Slider-7";
import Slider8 from "../src/views/Slider-8";
// import SliderDone from "../src/views/Slider-done";
import Introduction from "../src/views/Introduction";
import Slider2Intro from "../src/views/Slider2Intro";
import Slider3Intro from "../src/views/Slider3Intro";
import Slider4Intro from "../src/views/Slider4Intro";
import Slider5Intro from "../src/views/Slider5Intro";

export default {
  components: {
    Swiper,
    SwiperSlide,
    Slider1,
    Slider2,
    Slider3,
    Slider4,
    Slider5,
    Slider6,
    Slider7,
    Slider8,
    // SliderDone,
    Slider2Intro,
    Slider3Intro,
    Slider4Intro,
    Slider5Intro,
    Introduction,
  },
  directives: {
    swiper: directive,
  },
  name: "App",
  data() {
    return {
      info: [],
      isOpen: false,
      isPaused: true,
      index: 0,
      total1: 0,
      total2: 0,
      total3: 0,
      total4: 0,
      next: 0,
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
      },
      swiperOptions: {
        allowTouchMove: false,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      planetChartData: planetChartData,
      myBarChart: myBarChart,
      myBubbleChart: myBubbleChart,
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
    total() {
      return this.total1 + this.total2 + this.total3 + this.total4;
    },
    isDev() {
      return process.env.NODE_ENV === 'development'
    }
  },
  mounted() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => (this.info = response));

    //
    this.createChart("planet-chart", this.planetChartData);
    this.createChart("bar-chart", this.myBarChart);
    this.createChart("bubble-chart", this.myBubbleChart);
  },
  methods: {
    // Gets the checkbox information from the child component
    totalValue1: function (params) {
      this.total1 = params;
    },
    totalValue2: function (params) {
      this.total2 = params;
    },
    totalValue3: function (params) {
      this.total3 = params;
    },
    totalValue4: function (params) {
      this.total4 = params;
    },

    togglePlay() {
      this.isPaused = !this.isPaused;
      var myAudio = document.getElementById("audio");
      myAudio.volume = 0.3;
      return myAudio.paused ? myAudio.play() : myAudio.pause();
    },

    // Chart
    createChart(chartId, chartData) {
      const ctx = document.getElementById(chartId);
      const myChart = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options,
      });
      return myChart;
    },

    changeSwiperIndex() {
      this.index = this.$refs.mySwiper.$swiper.activeIndex;
      // console.log(this.index);
      timeline.from(".c-slide__title", 1, {
        y: 30,
        opacity: 0,
        delay: 0.1,
        ease: Back.easeInOut,
      });
    },

    nextSlide() {
      this.$refs.mySwiper.$swiper.slideNext();
    },

    openTips() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style lang="scss">
@import "./assets/scss/styles.scss";

@import url("https://fonts.googleapis.com/css2?family=Anton&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
</style>
