import { useFormContext } from 'react-hook-form'

import type { FormSchema } from '~/components/art-form/form-context'
import * as Form from '~/components/ui/form'
import { Input } from '~/components/ui/input'
import { twm } from '~/lib/utils'

export default function FormStep4() {
  const form = useFormContext<FormSchema>()
  return (
    <div className="flex max-w-[870px] flex-col space-y-1 p-5">
      <div className={twm('flex flex-col', 'sm:flex-row sm:space-x-5')}>
        <Form.Field
          control={form.control}
          name="contractor"
          render={({ field }) => (
            <Form.Item className="flex-1 ">
              <Form.Label className="leading-2 mt-3 h-4 text-xs font-bold uppercase">
                Contratante
              </Form.Label>
              <Form.Control>
                <Input
                  type="text"
                  {...field}
                  className="border-b-4"
                  placeholder="CPF/CNPJ"
                />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />

        <Form.Field
          control={form.control}
          name="owner"
          render={({ field }) => (
            <Form.Item className="flex-1">
              <Form.Label className="leading-2 mt-3 h-4 text-xs font-bold uppercase">
                Proprietário
              </Form.Label>
              <Form.Control>
                <Input
                  type="text"
                  {...field}
                  className="border-b-4"
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
          name="contractNumber"
          render={({ field }) => (
            <Form.Item className="flex-1">
              <Form.Label className="leading-2 mt-3 h-4 text-xs font-bold uppercase ">
                Número do contrato
              </Form.Label>
              <Form.Control>
                <Input
                  type="text"
                  {...field}
                  className=""
                  placeholder="000 000 000 000 000"
                />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />

        <Form.Field
          control={form.control}
          name="publicWorksCode"
          render={({ field }) => (
            <Form.Item className="flex-1">
              <Form.Label className="leading-2 mt-3 h-4 text-xs font-bold uppercase">
                Código de Obra Pública
              </Form.Label>
              <Form.Control>
                <Input
                  type="text"
                  {...field}
                  className="bg-input"
                  placeholder="000 000 000 000 000"
                />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />
      </div>

      <div className={twm('flex flex-wrap', 'sm:flex-row sm:space-x-5')}>
        <Form.Field
          control={form.control}
          name="contractStartDate"
          render={({ field }) => (
            <Form.Item className={twm('mr-4 flex-1', 'sm:flex-1')}>
              <Form.Label className="leading-2 mt-3 h-4 text-xs font-bold uppercase ">
                Inicio
              </Form.Label>
              <Form.Control>
                <Input
                  type="date"
                  {...field}
                  className="bg-input"
                  placeholder="000 000 000 000 000"
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
              <Form.Label className="leading-2 mt-3 h-4 text-xs font-bold uppercase ">
                Término
              </Form.Label>
              <Form.Control>
                <Input
                  type="date"
                  {...field}
                  className="bg-input"
                  placeholder="000 000 000 000 000"
                />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />

        <Form.Field
          control={form.control}
          name="contractCelebratedIn"
          render={({ field }) => (
            <Form.Item className={twm('w-64', 'sm:flex-1')}>
              <Form.Label className="leading-2 mt-3 h-4 text-xs font-bold uppercase">
                Celebrado em:
              </Form.Label>
              <Form.Control>
                <Input
                  type="date"
                  {...field}
                  className="bg-input"
                  placeholder="000 000 000 000 000"
                />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />
      </div>

      <div className="leading-2 mt-3 h-4  text-sm font-bold uppercase">
        <label htmlFor="" className="rounded-sm text-black">
          Endereço da Obra
        </label>
      </div>

      <div
        className={twm('flex flex-wrap space-x-1', 'sm:flex-row sm:space-x-5')}
      >
        <Form.Field
          control={form.control}
          name="cep"
          render={({ field }) => (
            <Form.Item className="flex-1">
              <Form.Label className="leading-2 mt-3 h-4 text-xs font-bold uppercase">
                Cep
              </Form.Label>
              <Form.Control>
                <Input
                  type="text"
                  {...field}
                  className="border-b-4"
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
              <Form.Label className="leading-2 mt-3 h-4 text-xs font-bold uppercase ">
                Número
              </Form.Label>
              <Form.Control>
                <Input
                  type="text"
                  {...field}
                  className="border-b-4"
                  placeholder="N°"
                />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />

        <Form.Field
          control={form.control}
          name="complement"
          render={({ field }) => (
            <Form.Item className="flex-1">
              <Form.Label className="leading-2 mt-3 h-4 text-xs font-bold uppercase">
                Complemento
              </Form.Label>
              <Form.Control>
                <Input
                  type="text"
                  {...field}
                  className="border-b-4"
                  placeholder="Apto ou Casa"
                />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />
      </div>

      <div className="mt-2 text-xs">
        <input type="checkbox" /> Declaro que estou cumprindo as regras de
        acessibilidade previstas nas normas técnicas da ABNT, na legislação
        específica e no decreto n. 5296/2004.
      </div>
      <div className="mt-2 text-xs">
        <input type="checkbox" /> Cláusula Compromissória: Qualquer conflito ou
        litígio originado do presente contrato, bem como sua interpretação ou
        execução, será resolvido por arbitragem, de acordo com a Lei no. 9.307,
        de 23 de setembro de 1996, por meio do Centro de Mediação e Arbitragem -
        CMA vinculado ao Crea-CE, nos termos do respectivo regulamento de
        arbitragem que, expressamente, as partes declaram concordar.
      </div>
    </div>
  )
}
