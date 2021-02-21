import book from '../book'
import axios from 'axios'
let store
beforeEach(() => {
  store = { ...book }
  store.state = book.state()
  store.commit = function (name, payload) {
    store.mutations[name](store.state, payload)
  }
  store.dispatch = function (name, payload) {
    const context = {
      state: store.state,
      commit: store.commit,
      dispatch: store.dispatch
    }
    return store.actions[name](context, payload)
  }
})
describe('book store MUTATIONS', () => {
  test('state update', () => {
    expect(store.state.lists).toEqual([])
    store.commit('assignList', [1, 2, 3])
    expect(store.state.lists).toEqual([1, 2, 3])
  })
  test('item update', () => {
    expect(store.state.item).toEqual({})
    store.commit('assignItem', { test: 1 })
    expect(store.state.item).toEqual({ test: 1 })
  })
  test('error update', () => {
    expect(store.state.error).toEqual({})
    store.commit('assignError', { message: 1 })
    expect(store.state.error).toEqual({ message: 1 })
  })
  test('rank update', () => {
    expect(store.state.isRank).toBe(false)
    store.commit('assignRank', true)
    expect(store.state.isRank).toBe(true)
  })
})

describe('book store ACTIONS', () => {
  beforeEach(() => {
    axios.get = jest.fn()
  })
  test('loadMain', async () => {
    axios.get.mockResolvedValue({ data: { item: [1, 2, 3] } })
    await store.dispatch('loadMain')
    expect(axios.get).toBeCalledWith('/api/bestSeller.api?key=undefined&categoryId=100&output=json')
    expect(store.state.lists).toEqual([1, 2, 3])
    expect(store.state.isRank).toBe(true)
  })
  test('loadMain handle Error', async () => {
    const errorMsg = { message: 'error' }
    const rejectedPromise = Promise.reject(errorMsg)
    axios.get.mockReturnValue(rejectedPromise)
    await store.dispatch('loadMain')
    expect(store.state.error).toEqual({ message: 'error' })
  })

  test('loadDetail', async () => {
    axios.get.mockResolvedValue({ data: { item: [{ data: 1 }] } })
    await store.dispatch('loadDetail', 111)
    expect(axios.get).toBeCalledWith('/api/search.api?key=undefined&query=111&output=json&queryType=isbn')
    expect(store.state.item).toEqual({ data: 1 })
    expect(store.state.isRank).toBe(false)
  })
  test('loadDetail handle Error', async () => {
    const errorMsg = { message: 'error' }
    const rejectedPromise = Promise.reject(errorMsg)
    axios.get.mockReturnValue(rejectedPromise)
    await store.dispatch('loadDetail', 111)
    expect(store.state.error).toEqual({ message: 'error' })
  })

  test('loadSearch', async () => {
    axios.get.mockResolvedValue({ data: { item: [{ data: 1 }] } })
    await store.dispatch('loadSearch', '검색어')
    expect(axios.get).toBeCalledWith('/api/search.api?key=undefined&query=검색어&output=json')
    expect(store.state.lists).toEqual([{ data: 1 }])
    expect(store.state.isRank).toBe(false)
  })
  test('loadSearch handle Error', async () => {
    const errorMsg = { message: 'error' }
    const rejectedPromise = Promise.reject(errorMsg)
    axios.get.mockReturnValue(rejectedPromise)
    await store.dispatch('loadSearch', '검색어')
    expect(store.state.error).toEqual({ message: 'error' })
  })

  test('loadCategory', async () => {
    axios.get.mockResolvedValue({ data: { item: [{ data: 1 }] } })
    await store.dispatch('loadCategory', 1)
    expect(axios.get).toBeCalledWith('/api/bestSeller.api?key=undefined&categoryId=1&output=json')
    expect(store.state.lists).toEqual([{ data: 1 }])
    expect(store.state.isRank).toBe(true)
  })
  test('loadCategory handle Error', async () => {
    const errorMsg = { message: 'error' }
    const rejectedPromise = Promise.reject(errorMsg)
    axios.get.mockReturnValue(rejectedPromise)
    await store.dispatch('loadCategory', '검색어')
    expect(store.state.error).toEqual({ message: 'error' })
  })
})
