'use client'

import { memo } from 'react'

import { useARTFormStepNumber } from '~/lib/hooks'
// import { twm } from '~/lib/utils'

import { CircularProgress } from './circular-progress'

export interface Props {
  stepTexts: string[]
}

export const StepperInfo = memo(function StepperButton({ stepTexts }: Props) {
  const currentStepNumber = useARTFormStepNumber()

  return (
    <div className="flex items-center space-x-2 border-none bg-transparent sm:hidden">
      <CircularProgress
        size={70}
        strokeWidth={3}
        svgClassName="block sm:hidden"
      />
      <div className="flex flex-col">
        <p className="font-bold text-foreground">
          {stepTexts[currentStepNumber.value - 1]}
        </p>
        {currentStepNumber.value !== 4 && (
          <p className="text-sm text-gray-400">
            {stepTexts[currentStepNumber.value]}
          </p>
        )}
      </div>
    </div>
  )
})
