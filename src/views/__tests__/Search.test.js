import { shallowMount } from '@vue/test-utils'
import Search from '../Search.vue'
import store from '../../store/index'
let wrapper
beforeEach(() => {
  wrapper = shallowMount(Search,
    {
      store,
      mocks: { $route: { params: { id: '가나다' } } }
    })
})

describe('Search View', () => {
  test('Search test', () => {
    expect(wrapper.vm.keyword).toBe('가나다')
    expect(wrapper.vm.title).toBe('가나다에 대한 검색결과 0개입니다')
  })
})
