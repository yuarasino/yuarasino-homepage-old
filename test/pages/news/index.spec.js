import { shallowMount } from "@vue/test-utils"
import NewsPage from "@/pages/news/index.vue"

describe("News Page", () => {
  test("is a Vue instance", () => {
    const wrapper = shallowMount(NewsPage)
    expect(wrapper.vm).toBeTruthy()
  })
})
