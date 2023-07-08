'use client'

import React from 'react'

import * as Popover from '~/components/ui/popover'

import ButtonStep1 from './step-1-button'
import type { Step1ButtonProps } from './step-1-button'
import Step1Submit from './step-1-submit'

type Props = Step1ButtonProps & {
  registryTypeOptions: string[]
  children?: React.ReactNode
}

export default function CardPopoverStep1(props: Props) {
  return (
    <Popover.Root>
      <Popover.Trigger>
        <ButtonStep1 {...props} />
      </Popover.Trigger>
      <Popover.Content
        sideOffset={-20}
        align="center"
        className="space-y-2 border-none bg-transparent shadow-none"
      >
        {props.registryTypeOptions.map((option) => (
          <Step1Submit
            templateModel={props.templateModel}
            registryType={option}
            key={option}
          />
        ))}
      </Popover.Content>
    </Popover.Root>
  )
}
