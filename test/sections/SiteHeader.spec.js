import { shallowMount } from "@vue/test-utils"
import SiteHeader from "@/sections/SiteHeader.vue"

describe("Header Section", () => {
  test("is a Vue instance", () => {
    const wrapper = shallowMount(SiteHeader)
    expect(wrapper.vm).toBeTruthy()
  })
})
