import { shallowMount } from '@vue/test-utils'
import router from '../../router'
import Navbar from '../Navbar.vue'

let wrapper
beforeEach(() => {
  wrapper = shallowMount(Navbar, { router })
})

describe('NavBar Components', () => {
  test('라우터 변경시 카테고리 닫힘', async () => {
    wrapper = shallowMount(Navbar, {
      router,
      data: () => ({
        cataOpen: true
      })
    })
    wrapper.vm.$router.push('/ss')

    await wrapper.vm.$nextTick()
    expect(wrapper.vm.cataOpen).toBe(false)
  })
})
