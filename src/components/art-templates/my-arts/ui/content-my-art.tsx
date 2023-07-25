import { ChevronRight } from 'lucide-react'

import { CardContent } from '~/components/ui/card'

export default function ContentMyArt() {
  return (
    <CardContent className="flex-col items-center">
      <div className="flex items-center">
        <div className="h-6 w-6">
          <ChevronRight />
        </div>
        <span className="inline items-center text-xs text-black">
          Supervisão de Execução de Obras Civis
        </span>
      </div>

      <div className="flex items-center">
        <div className="h-6 w-6">
          <ChevronRight />
        </div>
        <span className="text-xs  text-black">Múltipla Mensal</span>
      </div>

      <div className="flex items-center">
        <div className="h-6 w-6">
          <ChevronRight />
        </div>
        <span className="text-xs text-black">A.C.A. Engenharia Ltda.</span>
      </div>
    </CardContent>
  )
}
