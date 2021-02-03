<template lang="pug">
section#top.IndexTop
  Live2dCanvas
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api"
import Live2dCanvas from "@/components/Live2dCanvas.vue"

export default defineComponent({
  components: {
    Live2dCanvas,
  },
})
</script>

<style lang="sass">
.IndexTop
  background-color: #fff
</style>
