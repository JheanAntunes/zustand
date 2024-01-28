import {
  createContext,
  useContext,
  useRef,
  type PropsWithChildren
} from 'react'
import { createStore, type StoreApi } from 'zustand'
import { shallow } from 'zustand/shallow'
import { useStoreWithEqualityFn } from 'zustand/traditional'

import { counterStoreCreator, type CounterStore } from './counter-store-creator'

export const createCounterStore = () => {
  return createStore<CounterStore>(counterStoreCreator)
}

export const CounterStoreContext = createContext<StoreApi<CounterStore>>(
  null as never
)

export type CounterStoreProviderProps = PropsWithChildren

export const CounterStoreProvider = ({
  children
}: CounterStoreProviderProps) => {
  const counterStoreRef = useRef(createCounterStore())

  return (
    <CounterStoreContext.Provider value={counterStoreRef.current}>
      {children}
    </CounterStoreContext.Provider>
  )
}

export type UseCounterStoreContextSelector<T> = (store: CounterStore) => T

export const useCounterStoreContext = <T,>(
  selector: UseCounterStoreContextSelector<T>
): T => {
  const counterStoreContext = useContext(CounterStoreContext)

  if (counterStoreContext === undefined) {
    throw new Error(
      'useCounterStoreContext must be used within CounterStoreProvider'
    )
  }

  return useStoreWithEqualityFn(counterStoreContext, selector, shallow)
}
