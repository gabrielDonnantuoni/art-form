'use client'

import { Check } from 'lucide-react'
import { memo, useEffect, useState } from 'react'
import { useWatch } from 'react-hook-form'

import type { FormSchema } from '~/components/art-form/form-context'
import { Button } from '~/components/ui/button'
import { useARTFormStepNumber } from '~/lib/hooks'
import { twm } from '~/lib/utils'

export interface Props {
  text: string
  step: number
  scopedFields: (keyof FormSchema)[]
  isLast?: boolean
}

export const StepperButton = memo(function StepperButton({
  text,
  step,
  scopedFields,
  isLast,
}: Props) {
  const currentStepNumber = useARTFormStepNumber()
  const fields = useWatch<FormSchema>({ name: scopedFields })

  const [isChecked, setIsChecked] = useState(false)

  useEffect(() => {
    const isAllFieldsChecked = !fields.some((field) => {
      return typeof field !== 'boolean' && !field
    })

    setIsChecked(isAllFieldsChecked)
  }, [fields])

  function handleClick() {
    currentStepNumber.set(step)
  }

  return (
    <Button
      onClick={handleClick}
      aria-checked={isChecked}
      aria-selected={currentStepNumber.value === step}
      className="group hidden items-center space-x-2 border-none bg-transparent sm:flex"
    >
      <div
        className={twm(
          'relative flex h-7 w-7 items-center justify-center rounded-full border-[1.5px] border-gray-300 bg-transparent',
          'group-hover:border-gray-400',
          'group-aria-selected:border-primary group-aria-selected:ring-2 group-aria-selected:ring-primary',
          'group-aria-checked:border-primary group-aria-checked:bg-primary',
        )}
      >
        <div
          className={twm(
            'relative flex h-2 w-2 rounded-full',
            'group-hover:bg-gray-400',
            'group-aria-selected:bg-primary',
            'group-aria-checked:bg-transparent',
          )}
        >
          {isChecked && (
            <Check className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2" />
          )}
        </div>
        {isLast || (
          <div
            className={twm(
              'absolute left-1/2 top-full h-[30px] w-[2px] -translate-x-1/2 translate-y-[6px] rounded-full bg-gray-300',
              'group-aria-checked:bg-primary',
            )}
          />
        )}
      </div>
      <p className="font-bold text-foreground">{text}</p>
    </Button>
  )
})
