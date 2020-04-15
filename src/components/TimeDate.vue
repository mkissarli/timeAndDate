<template>
<div class="timeDateDash">
  <label> Which area would you like to pick? </label>
  <select id="areaPicker">
    <option v-for="a in area" v-bind:key="a" v-bind:value="a"> {{ a }} </option>
  </select>
</div>
</template>

<script>
export default {
  name: 'TimeDate',
  props: {
  },
  data: () =>({
    area: ["Africa", "America", "Asia", "Atlantic", "Australia", "Europe", "Indian", "Pacific"],
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
