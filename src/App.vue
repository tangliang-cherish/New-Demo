<template>
  <div id="app">
  	<top></top>
    <router-view/>
    <bottom></bottom>
  </div>
</template>

<script>
	import top from './components/header'
	import bottom from './components/footer'
export default {
  name: 'App',
  components: {
  	top,
  	bottom
  }
}
</script>

<style>
	
</style>
