import { clsx } from 'clsx'
import type { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function twm(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
