import { shallowMount } from "@vue/test-utils"
import BlogPage from "@/pages/blog/index.vue"

describe("Blog Page", () => {
  test("is a Vue instance", () => {
    const wrapper = shallowMount(BlogPage)
    expect(wrapper.vm).toBeTruthy()
  })
})
