import { shallowMount } from "@vue/test-utils"
import SiteFooter from "@/sections/SiteFooter.vue"

describe("Footer Section", () => {
  test("is a Vue instance", () => {
    const wrapper = shallowMount(SiteFooter)
    expect(wrapper.vm).toBeTruthy()
  })
})
