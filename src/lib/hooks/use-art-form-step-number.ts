import { hookstate, useHookstate } from '@hookstate/core'

const MINIMUM_STEP_NUMBER = 1
const MAXIMUM_STEP_NUMBER = 4

const artFormStepNumberState = hookstate(1)

export function useARTFormStepNumber() {
  const state = useHookstate(artFormStepNumberState)

  return {
    get value() {
      return state.value
    },
    next() {
      state.set((current) =>
        current + 1 > MAXIMUM_STEP_NUMBER ? MAXIMUM_STEP_NUMBER : current + 1,
      )
    },
    prev() {
      state.set((current) =>
        current - 1 < MINIMUM_STEP_NUMBER ? MINIMUM_STEP_NUMBER : current - 1,
      )
    },
    set(value: number) {
      if (value < MINIMUM_STEP_NUMBER || value > MAXIMUM_STEP_NUMBER) {
        throw new Error('Invalid step number')
      }
      state.set(value)
    },
  }
}
