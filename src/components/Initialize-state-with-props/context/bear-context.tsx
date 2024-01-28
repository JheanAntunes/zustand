'use client'
import { createContext, useContext, useRef } from 'react'
import { useStore } from 'zustand'
import {
  BearProps,
  BearState,
  BearStore,
  createBearStore
} from '../store/store-bear'

export const BearContext = createContext<BearStore | null>(null)

type BearContextProviderProps = React.PropsWithChildren<BearProps>

export const BearContextProvider = ({
  children,
  ...props
}: BearContextProviderProps) => {
  const store = useRef<BearStore>()
  if (!store.current) {
    store.current = createBearStore(props)
  }
  return (
    <BearContext.Provider value={store.current}>
      {children}
    </BearContext.Provider>
  )
}

// export const useBearContext = () => {
//   const context = useContext(BearContext)
//   if (!context)
//     throw new Error(
//       'Error de Envelopamento: Esse componente não está envelopado no BearContextProvider'
//     )

//   return context
// }

export function useBearContext<T>(selector: (state: BearState) => T): T {
  const store = useContext(BearContext)
  if (!store) throw new Error('Missing BearContext.Provider in the tree')
  return useStore(store, selector)
}
