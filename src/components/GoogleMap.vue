<template>
  <div class="google-map" ref="googleMap"></div>
</template>

<script>
import {mapSettings} from "@/constants/mapSettings";
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
          lat: 38.34581,
          lng: -0.52214,
        },
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
          .then((google) => this.map = new google.maps.Map(this.$refs.googleMap, {...this.mapConfig}))
          .then(() => this.initMarker())
          .catch(e => {
            // do something
            console.log(`==> error: ${e}`)
          });
    },
    initMarker() {
      this.google.load().then((google) => {
        const marker = new google.maps.Marker({
          map: this.map,
          position: this.marker.position,
          icon: require('@/assets/contact/marker.svg'),
        })

        new google.maps.InfoWindow({
          // pixelOffset: new google.maps.Size(-176, 54),
          content: `<div class="google-map-marker"><p class="google-map-marker__text">centro de detailing Tdg</p></div>`,
        }).open({
          anchor: marker,
          map: this.map,
        });
      })
    },
  },
  computed: {
    mapConfig() {
      return {
        ...mapSettings,
        center: this.marker.position
      };
    },
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
</style>
