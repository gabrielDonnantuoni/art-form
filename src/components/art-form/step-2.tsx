import { ChevronRight } from 'lucide-react'
import { useFormContext } from 'react-hook-form'

import type { FormSchema } from '~/components/art-form/form-context'
import * as Form from '~/components/ui/form'
import { Input } from '~/components/ui/input'
import { Textarea } from '~/components/ui/textarea'
import { twm } from '~/lib/utils'

export default function FormStep2() {
  const form = useFormContext<FormSchema>()

  return (
    <div className="flex max-w-[870px] flex-col space-y-1 p-5">
      <div className="mt-2 text-xs font-bold">
        <input type="checkbox" /> ART Originada de fiscalização?
      </div>

      <div className={twm('flex w-full flex-col', 'sm:flex-row sm:space-x-5')}>
        <Form.Field
          control={form.control}
          name="participation"
          render={({ field }) => (
            <Form.Item className={twm('flex-1', 'sm:mr-2 sm:flex-1')}>
              <Form.Label className="leading-2 mt-3 h-4 text-xs font-bold uppercase ">
                Participação
              </Form.Label>
              <Form.Control>
                <Input
                  type="text"
                  {...field}
                  className="border-b-4"
                  placeholder="Participação"
                />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />

        <Form.Field
          control={form.control}
          name="finality"
          render={({ field }) => (
            <Form.Item className={twm('flex-1', 'sm:flex-1')}>
              <Form.Label className="leading-2 mt-3 h-4 text-xs font-bold uppercase">
                Finalidade
              </Form.Label>
              <Form.Control>
                <Input
                  type="text"
                  {...field}
                  className="border-b-4"
                  placeholder="Finalidade"
                />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />
      </div>

      <div className={twm('flex w-full flex-col', 'sm:flex-row sm:space-x-5')}>
        <Form.Field
          control={form.control}
          name="contractedCompany"
          render={({ field }) => (
            <Form.Item className="flex-1">
              <Form.Label className="leading-2 mt-3 h-4 text-xs font-bold uppercase">
                Empresa contratada
              </Form.Label>
              <Form.Control>
                <Input
                  type="text"
                  {...field}
                  className="border-b-4"
                  placeholder="Empresa contratada"
                />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />
      </div>

      <div className={twm('flex w-full flex-col', 'sm:flex-row sm:space-x-5')}>
        <Form.Field
          control={form.control}
          name="observation"
          render={({ field }) => (
            <Form.Item className={twm('flex-1', 'sm:flex-1')}>
              <Form.Label className="leading-2 mt-3 h-4 text-xs font-bold uppercase">
                Descrição
              </Form.Label>
              <Form.Control>
                <Textarea
                  {...field}
                  className="bg-white"
                  placeholder="Ex: Exucução de residencia unifamiliar de X m² - Empresa contratante"
                />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />
      </div>

      <div className=" mt-2 flex items-center text-xs font-bold uppercase">
        <span className="">Responsável técnico</span>
        <ChevronRight />
      </div>

      <div className={twm('flex w-full flex-col', 'sm:flex-row sm:space-x-5')}>
        <Form.Field
          control={form.control}
          name="classEntity"
          render={({ field }) => (
            <Form.Item className={twm('flex-1', 'sm:mr-2 sm:flex-1')}>
              <Form.Label className="leading-2 mt-3 h-4 text-xs font-bold uppercase ">
                Entidade de Classes
              </Form.Label>
              <Form.Control>
                <Input
                  type="text"
                  {...field}
                  className="border-b-4"
                  placeholder="Entidade de classes"
                />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />

        <Form.Field
          control={form.control}
          name="institutionalAction"
          render={({ field }) => (
            <Form.Item className={twm('flex-1', 'sm:flex-1')}>
              <Form.Label className="leading-2 mt-3 h-4 text-xs font-bold uppercase">
                Ação Institucional
              </Form.Label>
              <Form.Control>
                <Input
                  type="text"
                  {...field}
                  className="border-b-4"
                  placeholder="Ação institucional"
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
