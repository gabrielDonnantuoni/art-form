import SuggestedTemplatesCard from '~/components/art-templates/suggested-templates/card-suggested-templates'
import { twm } from '~/lib/utils'

export default function ContextSuggestedTemplates() {
  return (
    <div className="mt-2 flex flex-col content-center space-y-4 pl-10 pr-10 pt-6">
      <div className={twm('flex flex-row justify-between')}>
        <h1 className="text-lg font-bold text-primary">Templates Sugeridos</h1>
      </div>
      <div
        className={twm(
          'flex flex-col space-y-2',
          'xs:flex-row xs:space-x-2 xs:space-y-0',
          'sm:flex-row sm:space-x-2 sm:space-y-0',
        )}
      >
        <SuggestedTemplatesCard />
        <SuggestedTemplatesCard />
      </div>
    </div>
  )
}
