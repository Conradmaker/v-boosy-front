import { shallowMount } from '@vue/test-utils'
import Stack from '../Stack.vue'
import router from '../../../router'
let wrapper
beforeEach(() => {
  wrapper = shallowMount(Stack,
    {
      router
    })
})
describe('Stack Component', () => {
  test('더보기 클릭시 베스트셀러로 이동', async () => {
    wrapper.vm.goGH()
    await wrapper.vm.$nextTick()
    expect(window.location.href).toBe('http://localhost/')
  })
})
