import { atom, useAtom } from 'jotai'
import { StateCreator, create } from 'zustand'

import { Mail, mails } from '@/mail/data'

type Config = {
  selected: Mail['id'] | null
  mails: Mail[]
  trash: Mail[]
  archives: Mail[]
}

type Actions = {
  setSelected: (selectedId: string) => void
  deleteMail: (type: 'mail' | 'archives', selectedId: string) => void
  setArchive: (type: 'mail' | 'trash', selectedId: string) => void
}

const configCreator: StateCreator<Config & Actions> = (set) => ({
  mails,
  trash: [],
  archives: [],
  selected: mails[0].id,
  setSelected: (selectedId: string) => {
    set(() => ({ selected: selectedId }))
  },
  deleteMail: (type, selectedId: string) => {
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
  },
  setArchive: (type, selectedId: string) => {
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

export const useMailStore = create<Config & Actions>()(configCreator)

// export const useMailZustand = () => {
//   return useMailStore.getState().selected
// }

const configAtom = atom<Config>({
  selected: mails[0].id,
  mails,
  trash: [],
  archives: []
})

export function useMail() {
  return useAtom(configAtom)
}
