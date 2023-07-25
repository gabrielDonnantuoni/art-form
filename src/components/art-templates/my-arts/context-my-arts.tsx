import Link from 'next/link'

import CardMyArt from '~/components/art-templates/my-arts/card-my-art'
import { twm } from '~/lib/utils'

export default function ContextMyArt() {
  return (
    <div className="mt-2 flex flex-col content-center space-y-4 pl-10 pr-10 pt-2">
      <div className={twm('flex flex-row justify-between')}>
        <h1 className="text-lg font-bold text-primary">Minhas ARTS</h1>
        <Link
          href="/arts/nova"
          className="rounded bg-secondary p-1 px-3 font-bold text-secondary-foreground"
        >
          Nova ART
        </Link>
      </div>
      <div
        className={twm(
          'flex flex-col space-y-2',
          'xs:flex-row xs:space-x-2 xs:space-y-0',
          'sm:flex-row sm:space-x-2 sm:space-y-0',
        )}
      >
        <CardMyArt />
        <CardMyArt />
      </div>
    </div>
  )
}
