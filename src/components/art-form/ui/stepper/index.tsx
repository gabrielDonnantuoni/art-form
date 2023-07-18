import { StepperButton } from './stepper-button'
import type { Props as StepProp } from './stepper-button'

const steps: StepProp[] = [
  {
    text: 'Modelo e forma de registro',
    step: 1,
    scopedFields: ['templateModel', 'registryType', 'isOutOfDate'],
  },
  {
    text: 'Participação e Finalidade',
    step: 2,
    scopedFields: ['templateModel', 'registryType', 'isOutOfDate'],
  },
  {
    text: 'Contrato',
    step: 3,
    scopedFields: ['templateModel', 'registryType', 'isOutOfDate'],
  },
  {
    text: 'Declarações',
    step: 4,
    scopedFields: ['templateModel', 'registryType', 'isOutOfDate'],
  },
]

export function Stepper() {
  return (
    <div className="flex h-20 w-full flex-col items-center justify-center sm:h-full sm:w-96">
      {steps.map((step) => (
        <StepperButton {...step} key={step.step} />
      ))}
    </div>
  )
}
