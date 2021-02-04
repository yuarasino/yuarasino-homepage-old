import { shallowMount } from "@vue/test-utils"
import Live2dManager from "@/assets/scripts/live2d/live2dmanager"
import Live2dCanvas from "@/components/Live2dCanvas.vue"

jest.mock("@/assets/scripts/live2d/live2dmanager")

describe("Live2dCanvas Component", () => {
  test("is a Vue instance", (done) => {
    const wrapper = shallowMount(Live2dCanvas)
    wrapper.vm.$nextTick(() => {
      expect(Live2dManager).toHaveBeenCalled()
      expect(wrapper.vm).toBeTruthy()
      done()
    })
  })
})
