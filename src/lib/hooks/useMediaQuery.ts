import { useCallback, useEffect, useState, useMemo } from 'react'

export function useMediaQuery(query: string): boolean {
  const matchMedia = useMemo(() => window.matchMedia(query), [query])

  const [matches, setMatches] = useState<boolean>(matchMedia.matches)

  const handleChange = useCallback(() => {
    setMatches(matchMedia.matches)
  }, [matchMedia.matches])

  useEffect(() => {
    // Triggered at the first client-side load and if query changes
    handleChange()

    matchMedia.addEventListener('change', handleChange)

    return () => {
      matchMedia.removeEventListener('change', handleChange)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  return matches
}
