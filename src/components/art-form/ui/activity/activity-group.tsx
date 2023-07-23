import { X } from 'lucide-react'
import { memo } from 'react'
import type { Control, UseFieldArrayRemove } from 'react-hook-form'
import { useFieldArray, useWatch } from 'react-hook-form'

import type { FormSchema } from '~/components/art-form/form-context'
import * as Accordion from '~/components/ui/accordion'
import { Button } from '~/components/ui/button'
import * as Form from '~/components/ui/form'
import { Input } from '~/components/ui/input'

import { Activity } from './activity'

interface Props {
  index: number
  control: Control<FormSchema>
  removeFunc: UseFieldArrayRemove
}

export const ActivityGroup = memo(function ActivityGroup({
  index,
  control,
  removeFunc,
}: Props) {
  const { fields, append, remove } = useFieldArray<
    FormSchema,
    'activityGroups.0.activities'
  >({
    name: `activityGroups.${index}.activities` as 'activityGroups.0.activities',
  })

  const field = useWatch<FormSchema>({
    name: `activityGroups.${index}`,
  }) as FormSchema['activityGroups'][number]

  return (
    <Accordion.Root
      type="single"
      collapsible
      className="w-full rounded-sm border-2 p-2"
    >
      <Accordion.Item value={`ActivityGroup-${index}`} className="border-none">
        <Accordion.Trigger>
          <div className="flex items-center border-none">
            {field.activityLevel && field.professionalActivity ? (
              <p>{`${field.activityLevel} - ${field.professionalActivity}`}</p>
            ) : (
              <p>Novo Grupo de Atividade</p>
            )}
            {index !== 0 && (
              <Button
                onClick={() => removeFunc(index)}
                className="ml-1 h-4 w-4 border-none bg-popover p-0"
              >
                <X className="h-4 w-4 text-popover-foreground hover:text-red-500" />
              </Button>
            )}
          </div>
        </Accordion.Trigger>
        <Accordion.Content>
          <Form.Field
            control={control}
            name={`activityGroups.${index}.activityLevel`}
            render={({ field }) => (
              <Form.Item className="flex-1">
                <Form.Label className="leading-2 mt-3 h-4 text-xs font-bold uppercase">
                  Nível atividade
                </Form.Label>
                <Form.Control>
                  <Input
                    type="text"
                    {...field}
                    placeholder="Nível de atividade"
                  />
                </Form.Control>
                <Form.Message />
              </Form.Item>
            )}
          />

          <Form.Field
            control={control}
            name={`activityGroups.${index}.professionalActivity`}
            render={({ field }) => (
              <Form.Item className="">
                <Form.Label className="leading-2 mt-3 h-4 text-xs font-bold uppercase">
                  Atividade profissional
                </Form.Label>
                <Form.Control>
                  <Input
                    type="text"
                    {...field}
                    placeholder="Atividade profissional"
                  />
                </Form.Control>
                <Form.Message />
              </Form.Item>
            )}
          />

          {fields.map((activity, childIndex) => (
            <Activity
              key={activity.id}
              parentIndex={index}
              index={childIndex}
              removeFunc={remove}
              control={control}
            />
          ))}
          <div className="flex items-center justify-center">
            <Button
              onClick={() => append({ activity: '', quantity: 0, unit: '' })}
              className="mx-auto mt-4 w-3/4 rounded-3xl bg-secondary hover:bg-secondary-hover"
            >
              Adicionar atividade
            </Button>
          </div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  )
})
