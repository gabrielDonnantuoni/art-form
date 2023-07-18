'use client'

import { memo } from 'react'
import { useFormContext } from 'react-hook-form'

import type { FormSchema } from '~/components/art-form/form-context'
import { Button } from '~/components/ui/button'
import { useARTFormStepNumber } from '~/lib/hooks'

export interface Props {
  text: string
  step: number
  scopedFields: (keyof FormSchema)[]
}

export const StepperButton = memo(function StepperButton({
  text,
  step,
  scopedFields,
}: Props) {
  const currentStepNumber = useARTFormStepNumber()
  const { getFieldState, formState } = useFormContext<FormSchema>()

  const isChecked = !scopedFields.some(
    (field) => getFieldState(field, formState).invalid,
  )

  function handleClick() {
    currentStepNumber.set(step)
  }

  return (
    <Button
      onClick={handleClick}
      aria-checked={isChecked}
      aria-selected={currentStepNumber.value === step}
      className="group flex border-none bg-transparent"
    >
      <div className="h-5 w-5 rounded-full" />
      <p className="text-b">{text}</p>
    </Button>
  )
})
