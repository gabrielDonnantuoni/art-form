import { Trash2 } from 'lucide-react'
import { memo } from 'react'
import { useWatch } from 'react-hook-form'
import type { Control, UseFieldArrayRemove } from 'react-hook-form'

import type { FormSchema } from '~/components/art-form/form-context'
import * as Accordion from '~/components/ui/accordion'
import { Autocomplete } from '~/components/ui/autocomplete'
import { Button } from '~/components/ui/button'
import * as Form from '~/components/ui/form'
import { Input } from '~/components/ui/input'
import { activities } from '~/data/activities'
import { units } from '~/data/unit'
import { twm } from '~/lib/utils'

interface Props {
  parentIndex: number
  index: number
  control: Control<FormSchema>
  removeFunc: UseFieldArrayRemove
}

export const Activity = memo(function Activity({
  index,
  parentIndex,
  control,
  removeFunc,
}: Props) {
  const field = useWatch<FormSchema>({
    name: `activityGroups.${parentIndex}.activities.${index}`,
  }) as FormSchema['activityGroups'][number]['activities'][number]

  return (
    <Accordion.Root type="single" collapsible className="relative w-full">
      <Accordion.Item value="item-1">
        <Accordion.Trigger>
          <div className="flex items-center">
            {field.activity ? (
              <div className="flex items-center">
                <p className="max-w-[200px] truncate sm:max-w-[360px] lg:max-w-[560px]">
                  {field.activity}
                </p>
                {field.quantity > 0 && field.unit && (
                  <span className="ml-2 text-xs">
                    {` - ${field.quantity} ${field.unit.split(' - ')[0]}`}
                  </span>
                )}
              </div>
            ) : (
              <p>Nova Atividade</p>
            )}
            {index !== 0 && (
              <Button
                onClick={() => removeFunc(index)}
                className="ml-1 h-4 w-4 border-none bg-popover p-0 text-popover-foreground hover:text-red-500"
                asChild
              >
                <Trash2 />
              </Button>
            )}
          </div>
        </Accordion.Trigger>
        <Accordion.Content className="overflow-visible">
          <Form.Field
            control={control}
            name={`activityGroups.${parentIndex}.activities.${index}.activity`}
            render={({ field }) => (
              <Form.Item className="flex-1">
                <Form.Label className="leading-2 mt-3 h-4 text-xs font-bold uppercase ">
                  Atividade
                </Form.Label>
                <Form.Control>
                  <Autocomplete
                    options={activities}
                    {...field}
                    placeholder="Atividade"
                  />
                </Form.Control>
                <Form.Message />
              </Form.Item>
            )}
          />

          <div className={twm('flex flex-row', 'sm:flex-1 sm:flex-row')}>
            <Form.Field
              control={control}
              name={`activityGroups.${parentIndex}.activities.${index}.quantity`}
              render={({ field }) => (
                <Form.Item className={twm('mr-4', 'sm:mr-4')}>
                  <Form.Label className="leading-2 mt-3 h-4 text-xs font-bold uppercase">
                    Quantidade
                  </Form.Label>
                  <Form.Control>
                    <Input
                      type="number"
                      {...field}
                      className=""
                      placeholder="Quantidade"
                    />
                  </Form.Control>
                  <Form.Message />
                </Form.Item>
              )}
            />
            <Form.Field
              control={control}
              name={`activityGroups.${parentIndex}.activities.${index}.unit`}
              render={({ field }) => (
                <Form.Item className={twm('')}>
                  <Form.Label className="leading-2 mt-3 h-4 text-xs font-bold uppercase">
                    Unidade de Medida
                  </Form.Label>
                  <Form.Control>
                    <Autocomplete
                      options={units}
                      {...field}
                      className=""
                      placeholder="Ex: m, m², h, kg, etc."
                    />
                  </Form.Control>
                  <Form.Message />
                </Form.Item>
              )}
            />
          </div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  )
})
