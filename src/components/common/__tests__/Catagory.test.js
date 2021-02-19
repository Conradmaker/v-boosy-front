import { mount, shallowMount } from '@vue/test-utils'
import router from '../../../router'
import Catagory from '../Catagory.vue'

let wrapper
beforeEach(() => {
  wrapper = shallowMount(Catagory, {
    router,
    propsData: {
      isShow: true
    }
  })
})

describe('11', () => {
  test('isShow open시 ', () => {
    wrapper = shallowMount(Catagory, {
      router,
      propsData: {
        isShow: true
      }
    })
    expect(wrapper.find('.catagory__container').classes()).toContain('open')
  })
  test('isShow false 시 클래스명 ', () => {
    wrapper = shallowMount(Catagory, {
      router,
      propsData: {
        isShow: false
      }
    })
    expect(wrapper.find('.catagory__container').classes()).not.toContain('open')
  })
  test('카테고리 데이터 갯수만큼 렌더링', () => {
    wrapper = mount(Catagory, {
      data: () => ({
        catas1: [
          { id: 100, name: '1' }
        ],
        catas2: [
          { id: 111, name: '2' },
          { id: 112, name: '3' }
        ]
      })
    })
    expect(wrapper.findAll('li').length).toBe(3)
  })
})
