<template>
<div class="timeDateDash">
  <div class="selectArea">
    <label> Which area would you like to pick? </label>
    <select id="areaPicker" v-model="selectedArea" @change="getLocations">
      <option v-for="a in area" v-bind:key="a" v-bind:value="a"> {{ a }} </option>
    </select>
  </div>

  <div class="selectLocation">
    <label> What location? </label>
    <select id="locationPicker" v-model="selectedLocation" @change="getTime">
      <option v-for="l in locations" v-bind:key="l" v-bind:value="l">
	{{ l.substring(selectedArea.length + 1).replace("_", " ") }}
      </option>
    </select>
  </div>
  
  <p class="time">
    The time is {{ time }} in {{ selectedLocation.replace("_", " ").split("/").reverse().join(", ") }}
  </p>
</div>
</template>

<script>
import Api from "@/api.js";
  
export default {
  name: 'TimeDate',
  data(){
    return {
      area: ["Africa", "America", "Asia", "Atlantic", "Australia", "Europe", "Indian", "Pacific"],
      selectedArea: "Europe",
      locations: [],
      selectedLocation: "Europe/London",
      time: "",
    }
  },
  methods: {
    /**
     * Gets the locations and saves them in data.
     */
    getLocations: async function(){
      this.locations = (await Api.locations(this.selectedArea));
    },
    /**
     * Gets and formats the time for the picked location.
     */
    getTime: async function(){
      this.time = (await Api.time(this.selectedLocation)).datetime.substring(11,19);
    }
  },
  /**
   * Runs functions before mounting, to avoid awkward markup.
   */
  async beforeMount() {
    await this.getLocations();
    await this.getTime();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
