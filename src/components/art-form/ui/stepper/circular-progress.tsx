'use client'

import { useHookstate } from '@hookstate/core'
import { memo, useEffect } from 'react'

import { useARTFormStepNumber } from '~/lib/hooks'
import { twm } from '~/lib/utils'

interface Props {
  size: number
  strokeWidth: number
  wrapperClassName?: string
  svgClassName?: string
}

export const CircularProgress = memo(function CircularProgress({
  size,
  strokeWidth,
  wrapperClassName,
  svgClassName,
}: Props) {
  const currentStepNumber = useARTFormStepNumber()
  const radius = size / 2 - strokeWidth * 2
  const circumference = radius * 2 * Math.PI

  const percent = useHookstate(0)

  useEffect(() => {
    percent.set(currentStepNumber.value / 4)
  }, [currentStepNumber.value, percent])

  return (
    <div
      className={twm(
        'relative flex items-center justify-center overflow-hidden rounded-full',
        wrapperClassName,
      )}
    >
      {/* Building a Progress Ring: https://css-tricks.com/building-progress-ring-quickly/ */}
      <svg
        className={twm('-rotate-90', svgClassName)}
        style={{ width: size, height: size }}
      >
        <circle
          className="text-secondary"
          strokeWidth={strokeWidth}
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={radius + 2 * strokeWidth}
          cy={radius + 2 * strokeWidth}
        />
        <circle
          className="text-primary"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={circumference - percent.value * circumference}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={radius + 2 * strokeWidth}
          cy={radius + 2 * strokeWidth}
        />
      </svg>
      <span className="absolute text-sm text-foreground">{`${currentStepNumber.value} de 4`}</span>
    </div>
  )
})
