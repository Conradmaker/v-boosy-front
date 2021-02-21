import { shallowMount } from '@vue/test-utils'
import Category from '../Category.vue'
import store from '../../store/index'
import axios from 'axios'
let wrapper
beforeEach(() => {
  wrapper = shallowMount(Category,
    {
      store, mocks: { $route: { params: { id: 1 }, query: { title: 1 } } }
    })
})

describe('Category View', () => {
  test('마운트시 loadCategory', async () => {
    axios.get = jest.fn()
    axios.get.mockReturnValue({ data: { item: [1, 2, 3] } })
    wrapper = shallowMount(Category,
      {
        store, mocks: { $route: { params: { id: 1 }, query: { title: 1 } } }
      })
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.$store.state.book.lists).toEqual([1, 2, 3])
  })
  test('route내 데이터 적용', async () => {
    wrapper = shallowMount(Category,
      {
        store, mocks: { $route: { params: { id: 1 }, query: { title: 1 } } }
      })
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.title).toBe('1 카테고리 목록')
    expect(wrapper.vm.id).toBe(1)
  })
  test('$route변경시 새로 로드', async () => {
    axios.get = jest.fn()
    axios.get.mockReturnValue({ data: { item: [1, 2, 3] } })
    wrapper = shallowMount(Category,
      {
        store, mocks: { $route: { params: { id: 1 }, query: { title: 1 } } }
      })
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.$store.state.book.lists).toEqual([1, 2, 3])
    wrapper.vm.loadCategory = jest.fn()
    axios.get.mockReturnValue({ data: { item: [1, 2, 3, 4] } })
    wrapper.setData({ $route: { params: { id: 3 }, query: { title: 3 } } })
    await wrapper.vm.$nextTick()
    expect(axios.get).toBeCalled()
  })
})
