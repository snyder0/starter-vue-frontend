import { shallowMount } from '@vue/test-utils'
import About from '../../../../src/views/about/about.vue'

describe("About.vue", () => {
    it("Page description renders when prop 'isVisible' is true", () => {
        const wrapper = shallowMount(About, {
            propsData: { isVisible: true }
        })
        expect(wrapper.isEmpty()).toBeFalsy()
    })
})