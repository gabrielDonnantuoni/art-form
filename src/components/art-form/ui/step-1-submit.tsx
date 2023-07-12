'use client'

import { useCallback } from 'react'

interface Props {
  templateModel: string
  registryType: string
}

export default function Step1Submit({ templateModel, registryType }: Props) {
  const handleSubmitStep1 = useCallback(() => {
    // Save templateModel and registryType to localStorage and formContext
    console.log(templateModel, registryType)

    // Go to step 2
    //
  }, [templateModel, registryType])

  return (
    <button
      onClick={handleSubmitStep1}
      className="w-full rounded-lg bg-primary-foreground p-2 text-primary transition-colors hover:bg-secondary hover:text-secondary-foreground"
    >
      {registryType}
    </button>
  )
}
