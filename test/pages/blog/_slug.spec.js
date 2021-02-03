import { shallowMount } from "@vue/test-utils"
import BlogContentPage from "@/pages/blog/_slug.vue"

describe("Blog Content Page", () => {
  test("is a Vue instance", () => {
    const wrapper = shallowMount(BlogContentPage)
    expect(wrapper.vm).toBeTruthy()
  })
})
