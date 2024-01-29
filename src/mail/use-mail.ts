import { atom, useAtom } from 'jotai'
import { StateCreator, create } from 'zustand'

import { Mail, mails } from '@/mail/data'

type Config = {
  selected: Mail['id'] | null
}

type Actions = {
  setSelected: (selectedId: string) => void
}

const configCreator: StateCreator<Config & Actions> = (set) => ({
  selected: mails[0].id,
  setSelected: (selectedId: string) => {
    set(() => ({ selected: selectedId }))
  }
})

export const useMailStore = create<Config & Actions>()(configCreator)

// export const useMailZustand = () => {
//   return useMailStore.getState().selected
// }

const configAtom = atom<Config>({
  selected: mails[0].id
})

export function useMail() {
  return useAtom(configAtom)
}
