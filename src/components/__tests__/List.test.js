import { shallowMount } from '@vue/test-utils'
import List from '../List.vue'
import ListItem from '../ListItem.vue'

let wrapper
beforeEach(() => {
  wrapper = shallowMount(List, { propsData: { title: '테스트제목', lists: [{ isbn: 1 }, { isbn: 2 }] } })
})

describe('List Component', () => {
  test('props test', () => {
    expect(wrapper.find('h2').text()).toBe('테스트제목')
    expect(wrapper.findAllComponents(ListItem).length).toBe(2)
  })
})
