'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import * as Form from '~/components/ui/form'

const requiredMessageInput = [1, { message: 'Campo obrigatório' }] as const

const formSchema = z.object({
  templateModel: z.string().min(...requiredMessageInput),
  registryType: z.string().min(...requiredMessageInput),
  isOutOfDate: z.boolean(),
  participation: z.string().min(...requiredMessageInput),
  finality: z.string().min(...requiredMessageInput),
  contractedCompany: z.string().min(...requiredMessageInput),
  description: z.string().optional(),
  classEntity: z.string().min(...requiredMessageInput),
  institutionalAction: z.string().min(...requiredMessageInput),
  activityGroups: z.array(
    z.object({
      activityLevel: z.string().min(...requiredMessageInput),
      professionalActivity: z.string().min(...requiredMessageInput),
      activities: z.array(
        z.object({
          activity: z.string().min(...requiredMessageInput),
          quantity: z
            .number({ coerce: true })
            .gt(0, { message: 'Valor deve ser maior que 0' }),
          unit: z.string().min(...requiredMessageInput),
        }),
      ),
    }),
  ),
  client: z.string().min(...requiredMessageInput),
  addressOwner: z.string().min(...requiredMessageInput),
  contractNumber: z.string().optional(),
  publicWorksCode: z.string().optional(),
  contractStartDate: z.string().min(...requiredMessageInput),
  contractEndDate: z.string().min(...requiredMessageInput),
  contractCelebratedIn: z.string().optional(),
  cep: z.string().min(...requiredMessageInput),
  addressNumber: z.string().min(...requiredMessageInput),
  addressComplement: z.string().optional(),
  accessibilityCheck: z.boolean().refine((value) => value === true, {
    message: 'Você precisa aceitar os termos',
  }),
  compromiseClause: z.boolean().refine((value) => value === true, {
    message: 'Você precisa aceitar os termos',
  }),
})

export type FormSchema = z.infer<typeof formSchema>

interface Props {
  children: React.ReactNode
}

export function ARTFormContext({ children }: Props) {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      templateModel: '',
      registryType: '',
      isOutOfDate: false,
      participation: '',
      finality: 'SEM DEFINIÇÃO',
      contractedCompany: '',
      description: '',
      classEntity: 'NENHUMA - NÃO OPTANTE',
      institutionalAction: 'NENHUMA - NÃO OPTANTE',
      activityGroups: [
        {
          activityLevel: '',
          professionalActivity: '',
          activities: [
            {
              activity: '',
              quantity: 0,
              unit: '',
            },
          ],
        },
      ],
      client: '',
      addressOwner: '',
      contractNumber: '',
      publicWorksCode: '',
      contractStartDate: '',
      contractEndDate: '',
      contractCelebratedIn: '',
      cep: '',
      addressNumber: '',
      addressComplement: '',
      accessibilityCheck: false,
      compromiseClause: false,
    },
    mode: 'onTouched',
  })

  return <Form.Root {...form}>{children}</Form.Root>
}
