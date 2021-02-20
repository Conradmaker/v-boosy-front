import { shallowMount } from '@vue/test-utils'
import BestSeller from '../BestSeller.vue'
import store from '../../store/index'
import List from '../../components/List.vue'
let wrapper
beforeEach(() => {
  wrapper = shallowMount(BestSeller,
    {
      store
    })
})

describe('BestSeller View', () => {
  test('should call loadMain', async () => {
    expect(wrapper.vm.$store.state.book.lists).toEqual([])
  })
  test('리스트 비었을경우', () => {
    expect(wrapper.vm.isNotEmpty).toBe(false)
    expect(wrapper.findComponent(List).exists()).not.toBe(true)
  })
  test('리스트 안비었을경우', async () => {
    wrapper.vm.$store.commit('book/assignList', [1, 2, 3])
    expect(wrapper.vm.$store.state.book.lists).toEqual([1, 2, 3])
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.isNotEmpty).toBe(true)
    expect(wrapper.findComponent(List).exists()).toBe(true)
    expect(wrapper.findComponent(List).attributes()).toEqual({ title: 'Popular Now', lists: '1,2,3' })
  })
})
