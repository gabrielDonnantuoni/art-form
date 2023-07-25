import { ChevronRight } from 'lucide-react'

import { CardContent } from '~/components/ui/card'

export default function SuggestedTemplatesContent() {
  return (
    <CardContent className="flex-col items-center">
      <div className="flex">
        <div className="h-6 w-6">
          <ChevronRight />
        </div>
        <span className="inline text-xs text-black">
          Edificação de 01 Pavimento, com 02 dormitórios, sala, banheiro,
          cozinha e área para tanque.
        </span>
      </div>
    </CardContent>
  )
}
