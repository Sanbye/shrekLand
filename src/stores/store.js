import { create } from 'zustand'

const useStore = create((set)=>({
    colorsAnimation: true,
    setColorsAnimation: () => set((state) => ({ colorsAnimation: !state.colorsAnimation })),
}))


export default useStore;