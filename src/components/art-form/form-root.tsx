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
    console.warn('onSubmit')
    console.warn(data)
  }

  const handleWrongSubmit: SubmitErrorHandler<FormSchema> = (errors, evt) => {
    console.warn('handleWrongSubmit')
    console.warn(errors)
    console.warn(evt)
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit, handleWrongSubmit)}
      className="flex w-full items-center justify-center"
    >
      {children}
    </form>
  )
}
