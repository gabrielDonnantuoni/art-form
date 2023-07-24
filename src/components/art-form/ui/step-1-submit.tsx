'use client'

import { memo } from 'react'
import { useFormContext } from 'react-hook-form'

import type { FormSchema } from '~/components/art-form/form-context'
import { useARTFormStepNumber } from '~/lib/hooks'

interface Props {
  templateModel: string
  registryType: string
  isOutOfDate: boolean
}

const Step1Submit = memo(function Step1Submit({
  templateModel,
  registryType,
  isOutOfDate,
}: Props) {
  const { setValue } = useFormContext<FormSchema>()
  const stepNumber = useARTFormStepNumber()

  function handleSubmitStep1() {
    // Save templateModel and registryType to localStorage and formContext
    setValue('templateModel', templateModel)
    setValue('registryType', registryType)
    setValue('isOutOfDate', isOutOfDate)

    // Go to step 2
    stepNumber.set(2)
  }

  return (
    <button
      onClick={handleSubmitStep1}
      className="w-full rounded-lg bg-primary-foreground p-2 text-primary transition-colors hover:bg-secondary hover:text-secondary-foreground"
    >
      {registryType}
    </button>
  )
})

export default Step1Submit
