import { create } from 'zustand'

type State = {
  grumpiness: number
  dispatch: (action: Actions) => void
}

type Actions = {
  type: 'INCREASE' | 'DECREASE'
  payload: {
    qtd: number
  }
}

const reducer = (state: State, action: Actions) => {
  switch (action.type) {
    case 'INCREASE':
      return { grumpiness: state.grumpiness + action.payload.qtd }
    case 'DECREASE':
      return { grumpiness: state.grumpiness - action.payload.qtd }
  }
}

export const useGrumpyStore = create<State>()((set) => ({
  grumpiness: 0,
  dispatch: (args) => set((state) => reducer(state, args))
}))
