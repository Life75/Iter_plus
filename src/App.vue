<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import NavBar from './components/NavBar.vue';

export default defineComponent({
    name: 'App',
    components: {NavBar}
})
</script>

<template>
    <NavBar></NavBar>
    <router-view></router-view>
</template>

<style lang="postcss">
body {
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
	background-image: linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
	height: 100vh;
}

@keyframes gradient {


}
</style>
