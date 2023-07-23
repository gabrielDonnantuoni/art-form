import type { FormSchema } from '~/components/art-form/form-context'
import { twm } from '~/lib/utils'

import { StepperButton } from './stepper-button'
import type { Props as StepProp } from './stepper-button'
import { StepperInfo } from './stepper-info'

const steps: StepProp[] = [
  {
    text: 'Modelo e forma de registro',
    step: 1,
    scopedFields: ['templateModel', 'registryType', 'isOutOfDate'],
  },
  {
    text: 'Participação e Finalidade',
    step: 2,
    scopedFields: [
      'participation',
      'finality',
      'contractedCompany',
      'description',
      'classEntity',
      'institutionalAction',
    ],
  },
  {
    text: 'Atividades',
    step: 3,
    scopedFields: [
      'activityGroups.0.activityLevel',
      'activityGroups.0.professionalActivity',
      'activityGroups.0.activities.0.activity',
      'activityGroups.0.activities.0.quantity',
      'activityGroups.0.activities.0.unit',
    ] as unknown as (keyof FormSchema)[],
  },
  {
    text: 'Contrato',
    step: 4,
    scopedFields: [
      'client',
      'addressOwner',
      'publicWorksCode',
      'contractStartDate',
      'contractEndDate',
      'contractCelebratedIn',
      'cep',
      'addressNumber',
      'addressComplement',
    ],
    isLast: true,
  },
]

export function Stepper() {
  return (
    <div
      className={twm(
        'flex h-20 w-full flex-col items-center justify-center bg-card',
        'sm:h-auto sm:w-[460px] sm:items-start sm:justify-start sm:space-y-7 sm:pl-7 sm:pt-5',
      )}
    >
      {steps.map((step) => (
        <StepperButton {...step} key={step.step} />
      ))}
      <StepperInfo stepTexts={steps.map((step) => step.text)} />
    </div>
  )
}
