import { create } from 'zustand'

import { counterStoreCreator, type CounterStore } from './counter-store-creator'

export const useCounterStore = create<CounterStore>()(counterStoreCreator)
