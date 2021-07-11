import { shallowMount } from '@vue/test-utils'
import router from '../../router'
import Header from '../Header.vue'

let wrapper
beforeEach(() => {
  wrapper = shallowMount(Header, {
    router,
    data: () => ({
      placeholder: '테스트',
      searchValue: '테스트검색값'
    })
  })
})

describe('Header Components', () => {
  test('input 데이터 바인딩', async () => {
    expect(wrapper.find('.search__box > input').attributes().placeholder).toBe('테스트')
    expect(wrapper.find('.search__box > input').element.value).toBe('테스트검색값')
    await wrapper.find('.search__box > input').setValue('changed')
    expect(wrapper.vm.searchValue).toBe('changed')
  })
  test('검색값이 없으면 경고창', () => {
    wrapper.vm.searchValue = ''
    wrapper.vm.$router.push = jest.fn()
    window.alert = jest.fn()
    wrapper.vm.onSubmit()
    expect(wrapper.vm.$router.push).not.toBeCalled()
    expect(window.alert).toBeCalledWith('검색어를 입력해 주세요')
  })
  // test('loginOpen 트루면 모달 오픈', () => {
  //   wrapper = shallowMount(Header, {
  //     router,
  //     data: () => ({
  //       placeholder: '테스트',
  //       searchValue: '테스트검색값',
  //       loginOpen: true
  //     })
  //   })
  //   expect(wrapper.find('login-modal-stub').exists()).toBe(true)
  // })
  // test('모달 닫을시 loginOpen = false', () => {
  //   wrapper = shallowMount(Header, {
  //     router,
  //     data: () => ({
  //       placeholder: '테스트',
  //       searchValue: '테스트검색값',
  //       loginOpen: true
  //     })
  //   })
  //   wrapper.vm.closeModal()
  //   expect(wrapper.vm.loginOpen).toBe(false)
  // })
  test('검색값이 있을시 router변경', () => {
    wrapper.vm.$router.push = jest.fn()
      .mockRejectedValueOnce({ name: 'NavigationDuplicated' })
    wrapper = shallowMount(Header, {
      router,
      data: () => ({
        searchValue: '테스트검색값'
      })
    })
    wrapper.vm.onSubmit()
    expect(wrapper.vm.$router.push).toBeCalledWith('/search/테스트검색값')
  })
})
