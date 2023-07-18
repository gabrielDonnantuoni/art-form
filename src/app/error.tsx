'use client'

import NotFound from './not-found'

interface ErrorProps {
  error: Error
  reset: () => void
}

export default function Error({ error }: ErrorProps) {
  if (error.message === '404') {
    return <NotFound />
  }
  return (
    <div className="flex h-screen flex-1 flex-col items-center justify-center">
      <p className="text-lg font-bold">{error.name}</p>
      <p>{error.message}</p>
      <p>{String(error.cause)}</p>
      <p>{error.stack}</p>
    </div>
  )
}
