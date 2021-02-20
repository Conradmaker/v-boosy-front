import { shallowMount } from '@vue/test-utils'
import DetailNav from '../DetailNav.vue'

let wrapper
beforeEach(() => {
  wrapper = shallowMount(DetailNav)
})

describe('DetailNav Component', () => {
  test('Event test', () => {
    window.addEventListener = jest.fn()
    window.removeEventListener = jest.fn()
    wrapper = shallowMount(DetailNav).destroy()
    expect(window.addEventListener).toBeCalled()
    expect(window.removeEventListener).toBeCalled()
  })
  test('scrollValid test', async () => {
    window.pageYOffset = 100000
    wrapper = shallowMount(DetailNav)
    wrapper.vm.scrollEvent()
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.scrollValid).toBe(2)
    expect(wrapper.find('.nav-act').text()).toBe('3')

    window.pageYOffset = -1
    wrapper = shallowMount(DetailNav)
    wrapper.vm.scrollEvent()
    expect(wrapper.vm.scrollValid).toBe(0)
    expect(wrapper.find('.nav-act').text()).toBe('1')
  })
})
