<template>
<div id="app">
  <timeDate></timeDate>
</div>
</template>

<script>
import TimeDate from './components/TimeDate.vue'

export default {
  name: 'App',
  components: {
    TimeDate
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
