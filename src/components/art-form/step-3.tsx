import { useFormContext, useFieldArray } from 'react-hook-form'

import type { FormSchema } from '~/components/art-form/form-context'
import { Button } from '~/components/ui/button'

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
    <div className="flex w-full max-w-[870px] flex-col space-y-3 p-5">
      {fields.map((field, index) => (
        <ActivityGroup
          index={index}
          key={field.id}
          removeFunc={remove}
          control={form.control}
        />
      ))}
      <Button
        type="button"
        onClick={() =>
          append({
            activityLevel: '',
            professionalActivity: '',
            activities: [{ activity: '', quantity: 0, unit: '' }],
          })
        }
        className="mx-auto mt-4 w-3/4 min-w-[250px] rounded-3xl"
      >
        Adicionar Grupo de Atividades
      </Button>
    </div>
  )
}
