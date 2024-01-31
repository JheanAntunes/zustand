import { Mail, mails } from '@/mail/data'
import { StateCreator } from 'zustand'

export interface StoreSelectedMail {
  mails: Mail[]
  selected: Mail['id'] | null
  setSelected: (selectedId: string) => void
}

export interface StoreDeleteMail {
  trash: Mail[]
  deleteMail: (type: 'mail' | 'archives', selectedId: string) => void
}

export interface StoreArchivesMail {
  archives: Mail[]
  setArchive: (type: 'mail' | 'trash', selectedId: string) => void
}

export const createStoreSelected: StateCreator<
  StoreSelectedMail,
  [],
  [],
  StoreSelectedMail
> = (set) => ({
  mails,
  selected: mails[0].id,
  setSelected: (selectedId: string) => {
    set(() => ({ selected: selectedId }))
  }
})

export const createStoreDelete: StateCreator<
  StoreArchivesMail & StoreDeleteMail & StoreSelectedMail,
  [],
  [],
  StoreDeleteMail
> = (set) => ({
  trash: [],
  deleteMail(type, selectedId) {
    switch (type) {
      case 'mail':
        set((state) => ({
          trash: [
            ...state.trash,
            state.mails.find((mail) => mail.id === selectedId)!
          ],
          mails: state.mails.filter((mail) => mail.id !== selectedId)
        }))
        break
      case 'archives':
        set((state) => ({
          trash: [
            ...state.trash,
            state.archives.find((mail) => mail.id === selectedId)!
          ],
          archives: state.archives.filter((mail) => mail.id !== selectedId)
        }))
        break
    }
  }
})

export const createStoreArchives: StateCreator<
  StoreArchivesMail & StoreDeleteMail & StoreSelectedMail,
  [],
  [],
  StoreArchivesMail
> = (set) => ({
  archives: [],
  setArchive(type, selectedId) {
    switch (type) {
      case 'mail':
        set((state) => ({
          archives: [
            ...state.archives,
            state.mails.find((mail) => mail.id === selectedId)!
          ],
          mails: state.mails.filter((mail) => mail.id !== selectedId)
        }))
        break
      case 'trash':
        set((state) => ({
          archives: [
            ...state.archives,
            state.trash.find((mail) => mail.id === selectedId)!
          ],
          trash: state.trash.filter((mail) => mail.id !== selectedId)
        }))
        break
    }
  }
})
