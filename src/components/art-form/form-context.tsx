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
  // participation: z.string(),
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
