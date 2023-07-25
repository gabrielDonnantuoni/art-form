import SuggestedTemplatesContent from '~/components/art-templates/suggested-templates/ui/content-suggested-templates'
import SuggestedTemplatesFooter from '~/components/art-templates/suggested-templates/ui/footer-suggested-templates'
import SuggestedTemplatesTitle from '~/components/art-templates/suggested-templates/ui/title-suggested-templates'
import { Card, CardHeader } from '~/components/ui/card'
import { twm } from '~/lib/utils'

export default function SuggestedTemplatesCard() {
  return (
    <Card
      className={twm(
        'flex flex-col transition-all duration-75 ease-in-out hover:border-slate-300',
        'bg-card xs:flex xs:h-1/2 xs:w-1/2 xs:flex-col',
        'md:w-1/3',
        'lg:w-1/4',
      )}
    >
      <CardHeader>
        <SuggestedTemplatesTitle />
      </CardHeader>
      <SuggestedTemplatesContent />
      <SuggestedTemplatesFooter />
    </Card>
  )
}
