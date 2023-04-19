<script>
import { onMounted, ref } from "vue";
export default {
  name: "Map",
  props: {
    coordinates: Object,
    name: String,
    flag: Boolean,
    apartments: Array,
    addressCoordinates: Array,
  },

  setup(props) {
    const mapRef = ref(null);

    //PAGINA DI DETAIL
    if (!props.flag) {
      onMounted(() => {
        const tt = window.tt;

        // Creo un array con le coordinate del singolo appartamento
        const address = [props.coordinates.lon, props.coordinates.lat];

        let map = tt.map({
          key: "aXmqa9tqNAUMFDXixJeARSNrykS73T0d",
          container: mapRef.value,
          zoom: 5.25,
          center: address,
        });

        map.addControl(new tt.FullscreenControl());
        map.addControl(new tt.NavigationControl());
        addMarker(map, address);
        scrollToTop();
      });
    }
    // INDEX PAGE
    else {
      onMounted(() => {
        const tt = window.tt;

        // Creo l'array filtrato con solo prezzo e coordinate
        const filteredApartments = props.apartments.map((apartment) => ({
          price: apartment.price,
          lon: apartment.longitude,
          lat: apartment.latitude,
        }));

        // Creo l'array con solo le coordinate
        const address = [
          props.addressCoordinates[1],
          props.addressCoordinates[0],
        ];

        let map = tt.map({
          key: "aXmqa9tqNAUMFDXixJeARSNrykS73T0d",
          container: mapRef.value,
          zoom: 13,
          center: address,
        });

        map.addControl(new tt.FullscreenControl());
        map.addControl(new tt.NavigationControl());
        addMarkers(map, filteredApartments);
      });
    }

    // Funzione per il marker all'indirizzo del singolo appartamento
    function addMarker(map, address) {
      const tt = window.tt;
      const popupOffset = 25;

      const markerElement = document.createElement("div");
      markerElement.className = "custom-marker";
      markerElement.innerHTML = '<i class="fa-solid fa-2xl fa-house"></i>';

      const marker = new tt.Marker({ element: markerElement })
        .setLngLat(address)
        .addTo(map);
      const popup = new tt.Popup({ offset: popupOffset }).setHTML(
        `${props.name}`
      );
      marker.setPopup(popup).togglePopup();
    }

    //Scroll top per Behaviour di tomtom
    function scrollToTop() {
      window.scrollTo(0, 0);
    }

    // Funzione per aggiungere molteplici appartamenti alla mappa
    function addMarkers(map, filteredApartments) {
      filteredApartments.forEach((apartment) => {
        const markerElement = document.createElement("div");
        markerElement.className = "custom-marker";
        markerElement.innerHTML = '<i class="fa-solid fa-2xl fa-house"></i>';

        new tt.Marker({ element: markerElement })
          .setLngLat([apartment.lon, apartment.lat])
          .addTo(map);
      });
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
  margin: 50px;
  height: 350px;
  width: 250px;
  color: black;
  padding-right: 30rem;
  font-family: "Manrope", sans-serif;

  .custom-marker {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    background-color: rgb(255, 70, 100);
    border-radius: 50%;
    color: rgb(255, 70, 100);
    font-size: 100px;
  }
}
</style>
