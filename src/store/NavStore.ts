import { create } from 'zustand'

const useNavStore = create((set) => ({
    isNavOpen: false,
    changeNavOpen: (value: boolean) =>
        set((state: { isNavOpen: boolean }) => ({
            isNavOpen: (!state.isNavOpen)
        }))
}))



export default useNavStore;
