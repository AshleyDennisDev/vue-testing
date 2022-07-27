import { mount, shallowMount } from "@vue/test-utils";
import Parent from "@/components/Parent.vue";

//example of testing parent/child components
describe('Parent.vue', () => {
    it('', () => {
        const wrapper = shallowMount(Parent);

        expect(wrapper.text()).toContain('Parent');
    })
    // it('', () => {
    //     const wrapper = mount(Parent);

    //     expect(wrapper.text()).toContain('Child');
    // })
})