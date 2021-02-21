import { shallowMount } from '@vue/test-utils'
import Banner from '../Banner.vue'
import router from '../../../router'
let wrapper
beforeEach(() => {
  wrapper = shallowMount(Banner,
    {
      router
    })
})
describe('Banner Component', () => {
  test('더보기 클릭시 베스트셀러로 이동', () => {
    wrapper.vm.$router.push = jest.fn()
    wrapper.vm.goMore()
    expect(wrapper.vm.$router.push).toBeCalledWith('/bestseller')
  })
})
