import { useFormContext } from 'react-hook-form'

import type { FormSchema } from '~/components/art-form/form-context'
import * as Form from '~/components/ui/form'
import { Input } from '~/components/ui/input'
import { twm } from '~/lib/utils'

import { Checkbox } from '../ui/checkbox'

export default function FormStep4() {
  const form = useFormContext<FormSchema>()
  return (
    <div className="flex max-w-[870px] flex-col space-y-1 p-5">
      <div className={twm('flex flex-col', 'sm:flex-row sm:space-x-5')}>
        <Form.Field
          control={form.control}
          name="client"
          render={({ field }) => (
            <Form.Item className="flex-1 ">
              <Form.Label
                className={twm(
                  'leading-2 mt-3 h-4 text-[10px] font-bold uppercase',
                  'xs:text-xs',
                )}
              >
                Contratante
              </Form.Label>
              <Form.Control>
                <Input
                  type="text"
                  {...field}
                  className="text-xs"
                  placeholder="CPF/CNPJ"
                />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />

        <Form.Field
          control={form.control}
          name="addressOwner"
          render={({ field }) => (
            <Form.Item className="flex-1">
              <Form.Label
                className={twm(
                  'leading-2 mt-3 h-4 text-[10px] font-bold uppercase',
                  'xs:text-xs',
                )}
              >
                Proprietário
              </Form.Label>
              <Form.Control>
                <Input
                  type="text"
                  {...field}
                  className="text-xs"
                  placeholder="CPF/CNPJ"
                />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />
      </div>

      <div
        className={twm('flex flex-wrap space-x-2', 'sm:flex-row sm:space-x-5')}
      >
        <Form.Field
          control={form.control}
          name="publicWorksCode"
          render={({ field }) => (
            <Form.Item className="flex-1">
              <Form.Label
                className={twm(
                  'leading-2 mt-3 h-4 text-[10px] font-bold uppercase',
                  'xs:text-xs',
                )}
              >
                Código de Obra Pública
              </Form.Label>
              <Form.Control>
                <Input
                  type="text"
                  {...field}
                  placeholder="000 000 000 000 000"
                  className="text-xs"
                />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />

        <Form.Field
          control={form.control}
          name="contractNumber"
          render={({ field }) => (
            <Form.Item className="flex-1">
              <Form.Label
                className={twm(
                  'leading-2 mt-3 h-4 text-[10px] font-bold uppercase',
                  'xs:text-xs',
                )}
              >
                Número do contrato
              </Form.Label>
              <Form.Control>
                <Input
                  type="text"
                  {...field}
                  className="text-xs"
                  placeholder="000 000 000 000 000"
                />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />
      </div>

      <div className={twm('flex flex-col', 'sm:flex-row sm:space-x-5')}>
        <Form.Field
          control={form.control}
          name="contractCelebratedIn"
          render={({ field }) => (
            <Form.Item className={twm('sm:flex-1')}>
              <Form.Label
                className={twm(
                  'leading-2 mt-3 h-4 text-[10px] font-bold uppercase',
                  'xs:text-xs',
                )}
              >
                Celebrado em:
              </Form.Label>
              <Form.Control>
                <Input
                  type="date"
                  {...field}
                  placeholder="000 000 000 000 000"
                  className="text-xs"
                />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />

        <Form.Field
          control={form.control}
          name="contractStartDate"
          render={({ field }) => (
            <Form.Item className={twm('flex-1', 'sm:flex-1')}>
              <Form.Label
                className={twm(
                  'leading-2 mt-3 h-4 text-[10px] font-bold uppercase',
                  'xs:text-xs',
                )}
              >
                Inicio
              </Form.Label>
              <Form.Control>
                <Input
                  type="date"
                  {...field}
                  placeholder="000 000 000 000 000"
                  className="text-xs"
                />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />

        <Form.Field
          control={form.control}
          name="contractEndDate"
          render={({ field }) => (
            <Form.Item className={twm('flex-1', 'sm:flex-1')}>
              <Form.Label
                className={twm(
                  'leading-2 mt-3 h-4 text-[10px] font-bold uppercase',
                  'xs:text-xs',
                )}
              >
                Término
              </Form.Label>
              <Form.Control>
                <Input
                  type="date"
                  {...field}
                  placeholder="000 000 000 000 000"
                  className="text-xs"
                />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />
      </div>

      <p className="pt-5 text-xs font-bold uppercase text-foreground">
        Endereço da Obra
      </p>

      <div
        className={twm('flex flex-wrap space-x-1', 'sm:flex-row sm:space-x-5')}
      >
        <Form.Field
          control={form.control}
          name="cep"
          render={({ field }) => (
            <Form.Item className="flex-1">
              <Form.Label
                className={twm(
                  'leading-2 mt-3 h-4 text-[10px] font-bold uppercase',
                  'xs:text-xs',
                )}
              >
                Cep
              </Form.Label>
              <Form.Control>
                <Input
                  type="text"
                  {...field}
                  className="text-xs"
                  placeholder="00 000-00"
                />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />

        <Form.Field
          control={form.control}
          name="addressNumber"
          render={({ field }) => (
            <Form.Item className="flex-1">
              <Form.Label
                className={twm(
                  'leading-2 mt-3 h-4 text-[10px] font-bold uppercase',
                  'xs:text-xs',
                )}
              >
                Número
              </Form.Label>
              <Form.Control>
                <Input
                  type="text"
                  {...field}
                  className="text-xs"
                  placeholder="N°"
                />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />

        <Form.Field
          control={form.control}
          name="addressComplement"
          render={({ field }) => (
            <Form.Item className="flex-1">
              <Form.Label
                className={twm(
                  'leading-2 mt-3 h-4 text-[10px] font-bold uppercase',
                  'xs:text-xs',
                )}
              >
                Complemento
              </Form.Label>
              <Form.Control>
                <Input
                  type="text"
                  {...field}
                  className="text-xs"
                  placeholder="Apto ou Casa"
                />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />
      </div>

      <div className="pt-3 text-sm">
        <Form.Field
          control={form.control}
          name="accessibilityCheck"
          render={({ field }) => (
            <Form.Item className="flex-1 space-x-1">
              <Form.Control className="translate-y-1">
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange as (checked: boolean) => void}
                />
              </Form.Control>
              <Form.Label className="pb-3 text-justify align-middle text-xs">
                Declaro que estou cumprindo as regras de acessibilidade
                previstas nas normas técnicas da ABNT, na legislação específica
                e no decreto n. 5296/2004.
              </Form.Label>
              <Form.Message />
            </Form.Item>
          )}
        />
      </div>
      <div className="pt-1 text-sm">
        <Form.Field
          control={form.control}
          name="compromiseClause"
          render={({ field }) => (
            <Form.Item className="flex-1 space-x-1">
              <Form.Control className="translate-y-1">
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange as (checked: boolean) => void}
                />
              </Form.Control>
              <Form.Label className="pb-3 text-justify align-middle text-xs">
                Cláusula Compromissória: Qualquer conflito ou litígio originado
                do presente contrato, bem como sua interpretação ou execução,
                será resolvido por arbitragem, de acordo com a Lei no. 9.307, de
                23 de setembro de 1996, por meio do Centro de Mediação e
                Arbitragem - CMA vinculado ao Crea-CE, nos termos do respectivo
                regulamento de arbitragem que, expressamente, as partes declaram
                concordar.
              </Form.Label>
              <Form.Message />
            </Form.Item>
          )}
        />
      </div>
    </div>
  )
}
