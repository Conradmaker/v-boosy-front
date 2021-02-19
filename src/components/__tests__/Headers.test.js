import { shallowMount } from '@vue/test-utils'
import Headers from '../Headers.vue'

let wrapper
beforeEach(() => {
  wrapper = shallowMount(Headers)
})

describe('Headers Components', () => {
  test('', () => {
    wrapper.vm.isTop = false
    expect(wrapper.vm.isTop).toBe(false)
  })
  test('Home 라우터인경우 isClear true', () => {
    wrapper = shallowMount(Headers, {
      mocks: {
        $route: {
          name: 'Home'
        }
      }
    })
    expect(wrapper.vm.$route.name).toBe('Home')
    expect(wrapper.vm.isClear).toBe(true)
  })
  test('Home 라우터가 아닌경우 isClear false', () => {
    wrapper = shallowMount(Headers, {
      mocks: {
        $route: {
          name: 'test'
        }
      }
    })
    expect(wrapper.vm.$route.name).toBe('test')
    expect(wrapper.vm.isClear).toBe(false)
  })
  test('onScroll 테스트', () => {
    window.pageYOffset = 90
    wrapper.vm.onScroll()
    expect(wrapper.vm.isTop).toBe(false)

    window.pageYOffset = 80
    wrapper.vm.onScroll()
    expect(wrapper.vm.isTop).toBe(true)
  })

  test('컴포넌트 없어지면 removeEvent', () => {
    window.removeEventListener = jest.fn()
    wrapper = shallowMount(Headers, {
      mocks: {
        $route: {
          name: 'test'
        }
      }
    }).destroy()
    expect(window.removeEventListener).toBeCalled()
  })
})
