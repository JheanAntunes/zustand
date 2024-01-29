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
  deleteMail: (selectedId: string) => void
  setArchive: (selectedId: string) => void
}

const configCreator: StateCreator<Config & Actions> = (set) => ({
  mails,
  trash: [],
  archives: [],
  selected: mails[0].id,
  setSelected: (selectedId: string) => {
    set(() => ({ selected: selectedId }))
  },
  deleteMail: (selectedId: string) => {
    set((state) => ({
      trash: [
        ...state.trash,
        state.mails.find((mail) => mail.id === selectedId)!
      ],
      mails: state.mails.filter((mail) => mail.id !== selectedId)
    }))
  },
  setArchive: (selectedId: string) => {
    set((state) => ({
      archives: [
        ...state.archives,
        state.mails.find((mail) => mail.id === selectedId)!
      ],
      mails: state.mails.filter((mail) => mail.id !== selectedId)
    }))
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
