<template lang="pug">
div.SiteLayout
  SiteHeader
  SiteMain
    nuxt
  SiteFooter
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api"
import SiteHeader from "@/sections/SiteHeader.vue"
import SiteMain from "@/sections/SiteMain.vue"
import SiteFooter from "@/sections/SiteFooter.vue"

export default defineComponent({
  components: {
    SiteHeader,
    SiteMain,
    SiteFooter
  },
})
</script>

<style lang="sass">
.SiteLayout
  background-color: #fff
</style>
