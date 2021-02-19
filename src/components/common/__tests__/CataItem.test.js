import { mount, shallowMount } from '@vue/test-utils'
import router from '../../../router'
import CataItem from '../CataItem.vue'

let wrapper
beforeEach(() => {
  wrapper = shallowMount(CataItem, {
    router,
    propsData: {
      cata: { id: 1, name: '테스트' }
    }
  })
})

describe('CataItem Component', () => {
  test('Props 데이터 렌더링', () => {
    expect(wrapper.find('li').text()).toBe('테스트')
  })
  test('클릭시 라우터 변경', () => {
    wrapper.vm.$router.replace = jest.fn()

    wrapper.vm.searchCate()
    expect(wrapper.vm.$router.replace).toBeCalledWith('/category/1?title=테스트')
  })
})
