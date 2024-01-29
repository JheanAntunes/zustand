import { createSelectors } from '@/utils/createSelectors'

import { createStore } from 'zustand'
type CounterStore = {
  count: number
  setIncrementCount: (qtd?: number) => void
  setResetCount: () => void
  setDescrementCount: (qtd?: number) => void
}

const CounterStore = createStore<CounterStore>((set) => ({
  count: 0,
  setIncrementCount: (qtd) =>
    set((state) => ({ count: qtd ?? state.count + 1 })),
  setDescrementCount: (qtd) =>
    set((state) => ({ count: qtd ?? state.count - 1 })),
  setResetCount: () => {
    //reset count
    set(() => ({ count: 0 }))
  }
}))

export const useCounterStore = createSelectors(CounterStore)
