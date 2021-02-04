import { shallowMount, createLocalVue } from "@vue/test-utils"
import VueMeta from "vue-meta"
import IndexPage from "@/pages/index.vue"

const localVue = createLocalVue()
localVue.use(VueMeta, { keyName: "head" })

describe("Index Page", () => {
  test("is a Vue instance", () => {
    const wrapper = shallowMount(IndexPage, { localVue })
    expect(wrapper.vm).toBeTruthy()
  })
})
