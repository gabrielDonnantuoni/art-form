'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import React from 'react'

import * as Popover from '~/components/ui/popover'
import { useMediaQuery } from '~/lib/hooks'

interface Props {
  templateModelButton: React.ReactNode
  registryTypeButtons: React.ReactNode
}

export default function CardStep1({
  templateModelButton,
  registryTypeButtons,
}: Props) {
  const isMobile = useMediaQuery('(max-width: 640px)')
  return isMobile ? (
    <Dialog.Root>
      <Dialog.Trigger className="w-full sm:h-40 sm:w-40">
        {templateModelButton}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-20 bg-black bg-opacity-50" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-30 w-4/5 -translate-x-1/2 -translate-y-1/2 space-y-2 rounded-lg bg-popover p-3 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-90">
          <Dialog.Title className="mb-2 font-bold">
            Tipo de registro
          </Dialog.Title>
          {registryTypeButtons}
          <Dialog.Close>
            <X className="absolute right-2 top-2 h-6 w-6 text-gray-500 hover:text-gray-700" />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  ) : (
    <Popover.Root>
      <Popover.Trigger className="w-full sm:h-40 sm:w-40">
        {templateModelButton}
      </Popover.Trigger>
      <Popover.Content
        sideOffset={-20}
        align="center"
        className="space-y-2 border-none bg-transparent shadow-none"
      >
        {registryTypeButtons}
      </Popover.Content>
    </Popover.Root>
  )
}
