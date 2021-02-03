import { shallowMount } from "@vue/test-utils"
import NewsContentPage from "@/pages/news/_slug.vue"

describe("News Content Page", () => {
  test("is a Vue instance", () => {
    const wrapper = shallowMount(NewsContentPage)
    expect(wrapper.vm).toBeTruthy()
  })
})
