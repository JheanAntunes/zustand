import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

type State = {
  firstName: string
  lastName: string
}

type Actions = {
  updatingFirstName: (newFirstName: State['firstName']) => void
  updatingLastName: (newLastName: State['lastName']) => void
}

type UsePersonStore = State & Actions

export const usePersonStore = create<UsePersonStore>()(
  devtools((set) => ({
    firstName: '',
    lastName: '',
    updatingFirstName: (newFirstName) =>
      set(() => ({ firstName: newFirstName })),
    updatingLastName: (newLastName) => set(() => ({ lastName: newLastName }))
  }))
)
