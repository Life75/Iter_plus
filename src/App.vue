<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
    name: 'App',
})
</script>

<template>
    <router-view></router-view>
</template>

<style lang="postcss">
body {
  @apply bg-orange-400 ;
}
</style>
