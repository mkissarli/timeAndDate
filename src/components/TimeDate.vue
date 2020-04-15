<template>
<div class="timeDateDash">
  <label> Which area would you like to pick? </label>
  <select id="areaPicker" v-model="selectedArea" @change="getLocations">
    <option v-for="a in area" v-bind:key="a" v-bind:value="a"> {{ a }} </option>
  </select>

  <label> What location? </label>
  <select id="locationPicker" v-model="selectedLocation" @change="formatTime">
    <option v-for="l in locations" v-bind:key="l" v-bind:value="l">
      {{ l.substring(selectedLocation.length + 1) }}
    </option>
  </select>
  <p>{{ time }}</p>
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
      selectedArea: "Europe",
      locations: [],
      selectedLocation: "London",
      time: ""
    }
  },
  methods: {
    getLocations: async function(){
      this.locations = (await Api.locations(this.selectedArea));
	//.forEach(e => e.substring(this.selectedLocation.length + 1));
    },
    getTime: async function(){
      return (await Api.time(this.selectedLocation));
    },
    formatTime: async function() {
      var unix = (await this.getTime()).unixtime;
      var date = new Date(unix * 1000);
      var hours = date.getHours();
      var minutes = "0" + date.getMinutes();
      var seconds = "0" + date.getSeconds();
      this.time = (hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2));
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
