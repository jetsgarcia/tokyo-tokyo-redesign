import { create } from 'zustand'

type CounterStore = {
  count: number
  increaseCount: () => void
}

export const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  increaseCount: () => set((state) => ({ count: state.count + 1 })),
}))
