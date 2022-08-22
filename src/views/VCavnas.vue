<template>
    <div class="">
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from '../components/NavBar.vue'

export default defineComponent({
    name: 'VCanvas',
    components: {NavBar}
})
</script>

<style></style>
