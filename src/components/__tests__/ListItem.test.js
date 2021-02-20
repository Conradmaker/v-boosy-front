import { shallowMount } from '@vue/test-utils'
import ListItem from '../ListItem.vue'
import router from '../../router/index'
let wrapper
beforeEach(() => {
  wrapper = shallowMount(ListItem, {
    router,
    mocks: {
      $store: {
        state: {
          book: {
            isRank: false
          }
        }
      }
    },
    propsData: { item: { isbn: 111, coverLargeUrl: 'test.jpg', title: '테스트제목', author: '테스트저자' }, index: 8 }
  })
})

describe('ListItem Component', () => {
  test('프롭스 데이터 렌더링 8위인 책', () => {
    expect(wrapper.vm.$store.state.book.isRank).toBe(false)
    expect(wrapper.vm.isTop).toBe(false)
    expect(wrapper.find('.top-rank').exists()).not.toBeTruthy()
  })
  test('인덱스 5위 안일경우 클래스명 추가', () => {
    wrapper = shallowMount(ListItem, {
      mocks: {
        $store: {
          state: {
            book: {
              isRank: true
            }
          }
        }
      },
      propsData: { item: { isbn: 111, coverLargeUrl: 'test.jpg', title: '테스트제목', author: '테스트저자' }, index: 4 }
    })
    expect(wrapper.vm.$store.state.book.isRank).toBe(true)
    expect(wrapper.vm.isTop).toBe(true)
    expect(wrapper.find('.top-rank').exists()).toBeTruthy()
  })
  test('goDetail 실행시 router이동', () => {
    wrapper.vm.$router.push = jest.fn()
    wrapper.vm.goDetail()
    expect(wrapper.vm.$router.push).toBeCalledWith('/detail/111')
  })
})
