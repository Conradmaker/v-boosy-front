import { shallowMount } from '@vue/test-utils'
import LoginModal from '../LoginModal.vue'
import store from '../../store/index'
let wrapper
beforeEach(() => {
  wrapper = shallowMount(LoginModal,
    {
      store
    })
})

describe('LoginModal Component', () => {
  test('이벤트 전달이 잘 되는가', () => {
    wrapper.vm.closeModal()
    expect(wrapper.emitted()).toEqual({ 'close-modal': [[]] })
  })
  test('이메일 유효성검증 실패시', () => {
    wrapper.vm.$refs.emailInput.focus = jest.fn()
    const alert = window.alert
    window.alert = jest.fn()
    wrapper.vm.onChangeTitle()
    expect(window.alert).toBeCalledWith('올바른 이메일을 입력하세요')
    expect(wrapper.vm.$refs.emailInput.focus).toBeCalled()
    window.alert = alert
  })
  test('이메일 유효성검증 성공시', async () => {
    wrapper = shallowMount(LoginModal,
      {
        data: () => ({
          email: 'yhg0337@gmail.com',
          password: '',
          welcome: 'Friend!!'
        })
      })
    expect(wrapper.vm.welcome).toBe('Friend!!')
    wrapper.vm.onChangeTitle()
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.welcome).toBe('yhg0337')
  })
})
