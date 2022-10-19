<template>
  <div class="google-map">
    <div class="google-map__container" ref="googleMap"></div>
    <div class="google-map-marker">
      <img class="google-map-marker__img" src="@/assets/contact/marker_bgr.png" alt="marker bgr">
      <p class="google-map-marker__text">centro de detailing Tdg</p>
    </div>
  </div>
</template>

<script>
import {LINE_PATH_CONFIG, mapSettings} from "@/constants/mapSettings";
import {Loader} from "@googlemaps/js-api-loader";
import {MarkerClusterer} from "@googlemaps/markerclusterer";

export default {
  name: 'GoogleMap',
  data() {
    return {
      apiKey: 'AIzaSyCC47tTo1KFZ_llqms1sjfa_4pp_W-tDyk',
      markers: [{
        position: {
          lat: 38.34595485345161,
          lng: -0.522200831099699,
        },
        icon: LINE_PATH_CONFIG,
      }],
    };
  },
  async mounted() {
    this.initializeMap();
  },
  methods: {
    initializeMap() {
      // https://ru.vuejs.org/v2/cookbook/practical-use-of-scoped-slots.html
      // https://developers.google.com/maps/documentation/javascript/adding-a-google-map#maps_add_map-javascript
      // https://developers.google.com/maps/documentation/javascript/marker-clustering#npm_1
      const google = new Loader({
        apiKey: this.apiKey
      });

      google
          .load()
          .then((google) => {
            new google.maps.Map(this.$refs.googleMap, this.mapConfig);
            // new MarkerClusterer({map: google.maps.Map, markers: this.markers});

            // or

            // new google.maps.Marker({
            //   position: this.mapConfig.position,
            //   map: google.maps.Map,
            // })
          })
          .catch(e => {
            console.log(`==> error: ${e}`)
            // do something
          });
    }
  },
  computed: {
    mapConfig() {
      return {
        ...mapSettings,
        center: this.mapCenter
      };
    },
    mapCenter() {
      return {
        lat: 38.34595485345161,
        lng: -0.522200831099699,
      };
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/styles/variables";
@import "src/styles/mixins/convert";

.google-map {
  height: 100%;
  width: 100%;
}

.google-map__container {
  height: 100%;
  width: 100%;
}

.google-map-marker {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-110%, -110%);
  width: set-relative-width(428px);
  max-width: 428px;
}

.google-map-marker__img {
}

.google-map-marker__text {
  margin: set-relative-height(18px) 0 0;
  font-weight: 700;
  line-height: calc(39 / 22);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: $white;
  @media (min-width: add-unit($base-container-width, px)) {
    font-size: px2rem(22px);
  }
  @media (max-width: add-unit($base-container-width - .2, px)) {
    font-size: 1.15vw;
  }
  &:before {
    content: '';
    width: 152.67px;
    height: 2px;
    left: 480px;
    top: 462px;
    background: $orange;
  }
}
</style>
