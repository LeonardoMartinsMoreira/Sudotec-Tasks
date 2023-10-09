import { create } from 'zustand';
import { persist } from 'zustand/middleware'

interface IUseCounter{
    count: number;
    increase: () => void;
    decrease: () => void;
  }
  
export const useCounter = create(
    persist<IUseCounter>(
      (set) => ({
        count: 0,
        increase: () => set((state) => ({ count: state.count + 1 })),
        decrease: () => set((state) => ({ count: state.count - 1 }))
      }), {
        name: 'counter'
      }
    )
  );
  