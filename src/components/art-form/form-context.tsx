'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import * as Form from '~/components/ui/form'

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  templateModel: z.enum([
    'Obra e serviços',
    'Cargo e função',
    'Multipla mensal',
    'Receituário agronômico',
  ]),
  registryType: z.enum([
    'Inicial',
    'Complementação de prazo',
    'Substituição',
    'Complementar',
  ]),
  isOutOfDate: z.boolean(),
  // Os campos dos names ficarão aqui
  participation: z.string(),
  finality: z.string(),
  contractedCompany: z.string(),
  observation: z.string(),
  activityLevel: z.string(),
  professionalActivity: z.string(),
  activity: z.string(),
  quantity: z.string(),
  unit: z.string(),
  contractor: z.string(),
  owner: z.string(),
  contractNumber: z.string(),
  publicWorksCode: z.string(),
  contractStartDate: z.string(),
  contractEndDate: z.string(),
  contractCelebratedIn: z.string(),
  cep: z.string(),
  addressNumber: z.string(),
  complement: z.string(),
  classEntity: z.string(),
  institutionalAction: z.string(),
})

export type FormSchema = z.infer<typeof formSchema>

interface Props {
  children: React.ReactNode
}

export function ARTFormContext({ children }: Props) {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    },
  })

  return <Form.Root {...form}>{children}</Form.Root>
}
