import { clsx } from 'clsx'
import type { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

interface PrefixedClasses {
  prefix: string
  classes: string
}
type ClassInput = ClassValue | PrefixedClasses

export function twm(...inputs: ClassInput[]) {
  return twMerge(
    clsx(
      inputs.map((input) => {
        const prefix = (input as PrefixedClasses)?.prefix
        if (prefix) {
          return (input as PrefixedClasses).classes
            .split(' ')
            .map((c) => `${prefix}${c}`)
            .join(' ')
        }
        return input
      }),
    ),
  )
}
