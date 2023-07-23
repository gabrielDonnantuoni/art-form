import { useFormContext, useFieldArray } from 'react-hook-form'

import type { FormSchema } from '~/components/art-form/form-context'
import { Button } from '~/components/ui/button'
import { twm } from '~/lib/utils'

import { ActivityGroup } from './ui/activity/activity-group'

export default function FormStep3() {
  const form = useFormContext<FormSchema>()

  const { fields, append, remove } = useFieldArray<
    FormSchema,
    'activityGroups'
  >({
    name: 'activityGroups' as const,
  })

  return (
    <div className="flex max-w-[870px] flex-col space-y-1 p-5">
      <div className={twm('flex flex-col space-y-3', 'sm:flex')}>
        {fields.map((field, index) => (
          <ActivityGroup
            index={index}
            key={field.id}
            removeFunc={remove}
            control={form.control}
          />
        ))}
        <Button
          onClick={() =>
            append({
              activityLevel: '',
              professionalActivity: '',
              activities: [{ activity: '', quantity: 0, unit: '' }],
            })
          }
          className="mt-4 rounded-3xl"
        >
          Adicionar Grupo de Atividades
        </Button>
      </div>
    </div>
  )
}
