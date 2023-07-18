'use client'

import type { SubmitErrorHandler } from 'react-hook-form'
import { useFormContext } from 'react-hook-form'

import type { FormSchema } from '~/components/art-form/form-context'

interface Props {
  children: React.ReactNode
}

export function ARTFormRoot({ children }: Props) {
  const form = useFormContext<FormSchema>()

  function onSubmit(data: FormSchema) {
    console.log('onSubmit')
    console.log(data)
  }

  const handleWrongSubmit: SubmitErrorHandler<FormSchema> = (errors, evt) => {
    console.log('handleWrongSubmit')
    console.log(errors)
    console.log(evt)
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit, handleWrongSubmit)}>
      {children}
    </form>
  )
}
