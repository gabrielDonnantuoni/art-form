import { CardFooter } from '~/components/ui/card'
import { twm } from '~/lib/utils'

export default function SuggestedTemplatesFooter() {
  return (
    <CardFooter className={twm('flex space-x-2', 'md:items-start')}>
      <button
        className={twm(
          'rounded bg-primary p-1 px-3 text-xs text-white',
          'md:px-2',
        )}
      >
        Execução
      </button>

      <button
        className={twm(
          'rounded bg-primary p-1 px-3 text-xs text-white',
          'md:px-2',
        )}
      >
        Projeto
      </button>
    </CardFooter>
  )
}
