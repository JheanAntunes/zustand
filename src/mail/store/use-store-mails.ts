import { create } from 'zustand'
import {
  createStoreArchives,
  createStoreDelete,
  createStoreSelected,
  type StoreArchivesMail,
  type StoreDeleteMail,
  type StoreSelectedMail
} from './slices-pattern'

export const useStoreMail = create<
  StoreSelectedMail & StoreDeleteMail & StoreArchivesMail
>()((...args) => ({
  ...createStoreSelected(...args),
  ...createStoreDelete(...args),
  ...createStoreArchives(...args)
}))
