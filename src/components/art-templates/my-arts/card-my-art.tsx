import ContentMyArt from '~/components/art-templates/my-arts/ui/content-my-art'
import TitleMyArt from '~/components/art-templates/my-arts/ui/title-my-art'
import { Card, CardHeader } from '~/components/ui/card'
import { twm } from '~/lib/utils'

export default function CardMyArt() {
  return (
    <Card
      className={twm(
        'flex flex-col transition-all duration-200 ease-in-out hover:border-slate-300',
        'bg-card xs:flex xs:h-1/2 xs:w-1/2 xs:flex-col',
        'md:w-1/3',
        'lg:w-1/4',
      )}
    >
      <CardHeader>
        <TitleMyArt />
      </CardHeader>
      <ContentMyArt />
    </Card>
  )
}
