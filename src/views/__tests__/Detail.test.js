import { shallowMount } from '@vue/test-utils'
import Detail from '../Detail.vue'
import store from '../../store/index'
let wrapper
beforeEach(() => {
  wrapper = shallowMount(Detail,
    {
      store,
      mocks: { $route: { params: { id: 1 }, query: { title: 1 } } }
    })
})

describe('Detail View', () => {
  test('should test', () => {
    expect(wrapper.vm.isbn).toBe(1)
  })
})
