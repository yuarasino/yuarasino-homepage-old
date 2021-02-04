<template lang="pug">
div.IndexPage
  IndexTop
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api"
import IndexTop from "@/sections/index/IndexTop.vue"

export default defineComponent({
  components: {
    IndexTop,
  },
  head() {
    return {
      script: [{ src: "/live2d/scripts/live2dcubismcore.min.js", body: true }],
    }
  },
})
</script>

<style lang="sass">
.IndexPage
  background-color: #fff
</style>
