'use client'

import { useEffect, useRef } from 'react'

interface Props {
  query: string
  onLocationChange: (latitude: number, longitude: number) => void
}

export default function Map({ query, onLocationChange }: Props) {
  const mapRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const embedMap = () => {
      const url = `https://www.google.com/maps/embed/v1/search?key=${
        process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string
      }&q=${encodeURIComponent(query)}`

      if (mapRef.current) {
        mapRef.current.src = url
      }
    }

    embedMap()
  }, [query])

  useEffect(() => {
    const mapRefCurrent = mapRef.current

    function handleIframeLoad() {
      if (mapRefCurrent) {
        const latitude = mapRefCurrent.contentWindow?.document
          .querySelector('.maps-iframe-container iframe')
          ?.getAttribute('data-value-lat')
        const longitude = mapRefCurrent.contentWindow?.document
          .querySelector('.maps-iframe-container iframe')
          ?.getAttribute('data-value-lng')

        if (latitude && longitude) {
          onLocationChange(parseFloat(latitude), parseFloat(longitude))
        }
      }
    }

    if (mapRefCurrent) {
      mapRefCurrent.addEventListener('load', handleIframeLoad)
    }

    return () => {
      if (mapRefCurrent) {
        mapRefCurrent.removeEventListener('load', handleIframeLoad)
      }
    }
  }, [onLocationChange])

  return (
    <iframe
      ref={mapRef}
      title="Map"
      className="h-96 w-full"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  )
}
