<template lang="pug">
canvas.Live2dCanvas(
  ref="canvasRef"
  width="600"
  height="900"
)
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "@nuxtjs/composition-api"
import Live2dManager from "@/assets/scripts/live2d/live2dmanager"

export default defineComponent({
  setup() {
    const canvasRef = ref<HTMLCanvasElement>()

    onMounted(async () => {
      const canvas = canvasRef.value!
      const manager = new Live2dManager(canvas)
      await manager.initializeAsync("yuarasino.1024")
      manager.main()
    })

    return {
      canvasRef,
    }
  },
})
</script>

<style lang="sass"></style>
