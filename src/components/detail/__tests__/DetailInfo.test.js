import { shallowMount } from '@vue/test-utils'
import DetailInfo from '../DetailInfo.vue'

let wrapper
beforeEach(() => {
  wrapper = shallowMount(DetailInfo,
    {
      propsData:
         {
           item: {
             title: '테스트제목',
             mileageRate: 10,
             description: '가나다라. 마바사 아자차',
             pubDate: '2020.09.04',
             publisher: '테스트출판',
             priceStandard: '29000',
             priceSales: '28000'
           }
         }
    })
})

describe('DetailInfo Component', () => {
  test('렌더링 테스트', () => {
    console.log(wrapper.html())
    expect(wrapper.find('.left__section h1').text()).toBe('제목 : 테스트제목')
    expect(wrapper.find('.left__section span').text()).toBe('평점 : 10')
    expect(wrapper.find('.left__section p').html()).toBe('<p>가나다라.<br> 마바사 아자차</p>')
    expect(wrapper.find('.right__section li:nth-child(1) strong').text()).toBe('2020-.0-9.04')
    expect(wrapper.find('.right__section li:nth-child(2) strong').text()).toBe('테스트출판')
    expect(wrapper.find('.right__section li:nth-child(3) strong').text()).toBe('2900028000')
  })
})
