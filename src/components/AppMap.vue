<script>
import { onMounted, ref } from "vue";
export default {
  name: "Map",
  props: { coordinates: Object, name: String },

  setup(props) {
    const mapRef = ref(null);
    onMounted(() => {
      const tt = window.tt;
      let address = [props.coordinates.lon, props.coordinates.lat];
      let map = tt.map({
        key: "aXmqa9tqNAUMFDXixJeARSNrykS73T0d",
        container: mapRef.value,
        zoom: 5,
        center: address,
      });

      map.addControl(new tt.FullscreenControl());
      map.addControl(new tt.NavigationControl());
      addMarker(map, address);
    });

    function addMarker(map, address) {
      const tt = window.tt;
      let popupOffset = 25;

      let marker = new tt.Marker().setLngLat(address).addTo(map);
      let popup = new tt.Popup({ offset: popupOffset }).setHTML(
        `${props.name}`
      );
      marker.setPopup(popup).togglePopup();
    }

    return {
      mapRef,
    };
  },
};
</script>

<template>
  <div id="map" ref="mapRef"></div>
</template>

<style scoped lang="scss">
#map {
  margin: 50px 0;
  height: 450px;
  width: 700px;
  color: black;
}
</style>
