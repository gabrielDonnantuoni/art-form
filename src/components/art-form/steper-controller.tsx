'use client'

import { ArrowRight, ArrowLeft } from 'lucide-react'

import { Button } from '~/components/ui/button'
import { useARTFormStepNumber } from '~/lib/hooks'
import { twm } from '~/lib/utils'

export function StepperController() {
  const currentStepNumber = useARTFormStepNumber()

  return (
    <div
      className={twm(
        'flex w-full max-w-[870px] justify-between p-5',
        currentStepNumber.value === 1 && 'hidden',
      )}
    >
      <Button
        className="space-x-2 rounded-3xl bg-secondary hover:bg-secondary-hover"
        onClick={() => {
          currentStepNumber.prev()
        }}
      >
        <ArrowLeft className="h-4 w-4" />
        <p>Voltar</p>
      </Button>
      {currentStepNumber.value === 4 ? (
        <a
          href="https://forms.gle/ByuUSDsZS2fy1SVC6"
          about="_blank"
          className="flex items-center justify-center space-x-2 rounded-3xl bg-secondary px-4 py-2 text-secondary-foreground hover:bg-secondary-hover"
        >
          Cadastrar
        </a>
      ) : (
        <Button
          className="space-x-2 rounded-3xl bg-secondary hover:bg-secondary-hover"
          onClick={() => {
            currentStepNumber.next()
          }}
        >
          <p>Avançar</p>
          <ArrowRight className="h-4 w-4" />
        </Button>
      )}
    </div>
  )
}
