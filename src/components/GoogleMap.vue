<template>
  <div class="google-map">
    <div class="google-map__container" ref="googleMap"></div>
  </div>
</template>

<script>
import {LINE_PATH_CONFIG, mapSettings} from "@/constants/mapSettings";
import {Loader} from "@googlemaps/js-api-loader";

export default {
  name: 'GoogleMap',
  data() {
    return {
      apiKey: 'AIzaSyCC47tTo1KFZ_llqms1sjfa_4pp_W-tDyk',
      google: null,
      map: null,
      marker: {
        position: {
          lat: 38.34595485345161,
          lng: -0.522200831099699,
        },
        icon: LINE_PATH_CONFIG,
      },
    };
  },
  async mounted() {
    this.google = await new Loader({
      apiKey: this.apiKey
    });

    this.initMap();
  },
  methods: {
    initMap() {
      this.google
          .load()
          .then((google) => {
            this.map = new google.maps.Map(this.$refs.googleMap, this.mapConfig);
          })
          .then(() => this.initMarker())
          .catch(e => {
            // do something
            console.log(`==> error: ${e}`)
          });
    },
    initMarker() {
      this.google.load().then((google) => new google.maps.Marker({
        position: {
          lat: this.marker.position.lat,
          lng: this.marker.position.lng
        },
        map: this.map,
      }))
    },
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
