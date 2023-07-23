import Image from 'next/image'
import React from 'react'

interface IconProps {
  icon: React.ElementType
}

interface ImageProps {
  src: string
  alt: string
}

type Step1ButtonProps = (IconProps | ImageProps) & {
  templateModel: string
  isOutOfDate: boolean
}

const FallbackIcon = React.memo(function FallbackIcon() {
  return <div />
})

export default function ButtonStep1(props: Step1ButtonProps) {
  let Icon: React.ElementType = FallbackIcon
  if ('icon' in props) {
    Icon = props.icon
  }

  return (
    <div className="flex h-full w-full items-center justify-start rounded-lg border bg-card p-2 text-card-foreground shadow-step1Button hover:bg-gray-200 hover:shadow-step1Button-blur md:flex-col md:justify-center">
      {'src' in props ? (
        <Image
          src={props.src}
          alt={props.alt}
          className="mb-1 mr-2 w-7 md:w-14"
        />
      ) : (
        <Icon className="w-14 text-foreground" />
      )}
      <p className="mb-1 mr-2 text-left text-xs uppercase xs:text-sm md:text-center">
        {props.templateModel}
      </p>
      {props.isOutOfDate && (
        <p className="ml-auto max-w-[66px] text-[10px] uppercase text-gray-500 xs:text-xs md:ml-0 md:max-w-none">
          Fora de época
        </p>
      )}
    </div>
  )
}
