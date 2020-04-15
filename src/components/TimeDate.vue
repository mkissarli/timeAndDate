<template>
<div class="timeDateDash">
  <label> Which area would you like to pick? </label>
  <select id="areaPicker" v-model="selectedLocation" @change="getLocations">
    <option v-for="a in area" v-bind:key="a" v-bind:value="a"> {{ a }} </option>
  </select>

  <label> What location? </label>
  <select id="locationPicker">
    <option v-for="l in locations" v-bind:key="l" v-bind:value="l"> {{ l }} </option>
  </select>
</div>
</template>

<script>
import Api from "@/api.js";
  
export default {
  name: 'TimeDate',
  props: {
  },
  data(){
    return {
      area: ["Africa", "America", "Asia", "Atlantic", "Australia", "Europe", "Indian", "Pacific"],
      selectedLocation: "Africa",
      locations: [],
    }
  },
  methods: {
    getLocations: async function(){
      this.locations = (await Api.locations(this.selectedLocation));
	//.forEach(e => e.substring(this.selectedLocation.length + 1));
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
