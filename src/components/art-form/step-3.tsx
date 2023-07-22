import { useFormContext } from 'react-hook-form'

import type { FormSchema } from '~/components/art-form/form-context'
import * as Accordion from '~/components/ui/accordion'
import * as Form from '~/components/ui/form'
import { Input } from '~/components/ui/input'
import { twm } from '~/lib/utils'

export default function FormStep3() {
  const form = useFormContext<FormSchema>()
  return (
    <div className="flex max-w-[870px] flex-col space-y-1 p-5">
      <div className={twm('flex flex-col', 'sm:flex')}>
        <Accordion.Root type="single" collapsible className="w-full">
          <Accordion.Item value="item-1">
            <Accordion.Trigger>
              Grupo de Atividade - Execução - Execução de Obra
            </Accordion.Trigger>
            <Accordion.Content>
              <Form.Field
                control={form.control}
                name="activityLevel"
                render={({ field }) => (
                  <Form.Item className="flex-1">
                    <Form.Label className="leading-2 mt-3 h-4 text-xs font-bold uppercase ">
                      Nível atividade
                    </Form.Label>
                    <Form.Control>
                      <Input
                        type="text"
                        {...field}
                        className="border-b-4"
                        placeholder="Nível de atividade"
                      />
                    </Form.Control>
                    <Form.Message />
                  </Form.Item>
                )}
              />

              <Form.Field
                control={form.control}
                name="professionalActivity"
                render={({ field }) => (
                  <Form.Item className="">
                    <Form.Label className="leading-2 mt-3 h-4 text-xs font-bold uppercase">
                      Atividade profissional
                    </Form.Label>
                    <Form.Control>
                      <Input
                        type="text"
                        {...field}
                        className="border-b-4"
                        placeholder="Atividade profissional"
                      />
                    </Form.Control>
                    <Form.Message />
                  </Form.Item>
                )}
              />

              <Form.Field
                control={form.control}
                name="activity"
                render={({ field }) => (
                  <Form.Item className="">
                    <Form.Label className="leading-2 mt-3 h-4 text-xs font-bold uppercase">
                      Atividade
                    </Form.Label>
                    <Form.Control>
                      <Input
                        type="text"
                        {...field}
                        className="border-b-4"
                        placeholder="Atividade"
                      />
                    </Form.Control>
                    <Form.Message />
                  </Form.Item>
                )}
              />
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
        <Form.Field
          control={form.control}
          name="activityLevel"
          render={({ field }) => (
            <Form.Item className="flex-1">
              <Form.Label className="leading-2 mt-3 h-4 text-xs font-bold uppercase ">
                Nível atividade
              </Form.Label>
              <Form.Control>
                <Input
                  type="text"
                  {...field}
                  className="border-b-4"
                  placeholder="Nível de atividade"
                />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />

        <Form.Field
          control={form.control}
          name="professionalActivity"
          render={({ field }) => (
            <Form.Item className="">
              <Form.Label className="leading-2 mt-3 h-4 text-xs font-bold uppercase">
                Atividade profissional
              </Form.Label>
              <Form.Control>
                <Input
                  type="text"
                  {...field}
                  className="border-b-4"
                  placeholder="Atividade profissional"
                />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />

        <Form.Field
          control={form.control}
          name="activity"
          render={({ field }) => (
            <Form.Item className="">
              <Form.Label className="leading-2 mt-3 h-4 text-xs font-bold uppercase">
                Atividade
              </Form.Label>
              <Form.Control>
                <Input
                  type="text"
                  {...field}
                  className="border-b-4"
                  placeholder="Atividade"
                />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />
      </div>

      <div className={twm('flex flex-row', 'sm:flex-1 sm:flex-row')}>
        <Form.Field
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <Form.Item className={twm('mr-4', 'sm:mr-4')}>
              <Form.Label className="leading-2 mt-3 h-4 text-xs font-bold uppercase">
                Quantidade
              </Form.Label>
              <Form.Control>
                <Input
                  type="text"
                  {...field}
                  className="bg-input"
                  placeholder="Quantidade"
                />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />
        <Form.Field
          control={form.control}
          name="unit"
          render={({ field }) => (
            <Form.Item className={twm('')}>
              <Form.Label className="leading-2 mt-3 h-4 text-xs font-bold uppercase">
                Unidade de Medida
              </Form.Label>
              <Form.Control>
                <Input
                  type="text"
                  {...field}
                  className="bg-input"
                  placeholder="UN"
                />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />
      </div>
    </div>
  )
}
