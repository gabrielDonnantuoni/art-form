import { useFormContext } from 'react-hook-form'

import type { FormSchema } from '~/components/art-form/form-context'
// import { Autocomplete } from '~/components/ui/autocomplete'
import * as Form from '~/components/ui/form'
import { Input } from '~/components/ui/input'

export default function FormStep2() {
  const form = useFormContext<FormSchema>()

  return (
    <div className="flex justify-center">
      <div className="flex max-h-[720px] max-w-5xl flex-wrap items-center justify-center gap-5 px-10 py-10 md:gap-10 md:px-28">
        <Form.Field
          control={form.control}
          name="username"
          render={({ field }) => (
            <Form.Item>
              <Form.Label>Username</Form.Label>
              <Form.Control>
                <Input type="text" {...field} />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />
      </div>
    </div>
  )
}
