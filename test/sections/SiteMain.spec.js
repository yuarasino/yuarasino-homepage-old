import { shallowMount } from "@vue/test-utils"
import SiteMain from "@/sections/SiteMain.vue"

describe("Main Section", () => {
  test("is a Vue instance", () => {
    const wrapper = shallowMount(SiteMain)
    expect(wrapper.vm).toBeTruthy()
  })
})
