'use client'

import FormStep1 from '~/components/art-form/step-1'
import FormStep2 from '~/components/art-form/step-2'
import FormStep3 from '~/components/art-form/step-3'
import FormStep4 from '~/components/art-form/step-4'
import { useARTFormStepNumber } from '~/lib/hooks'

const steps = [FormStep1, FormStep2, FormStep3, FormStep4]

export function Steps() {
  const stepNumber = useARTFormStepNumber()

  const Step = steps[stepNumber.value - 1]

  return <Step />
}
