import Image from 'next/image'
import React from 'react'

interface Option1 {
  icon: React.ElementType
}

interface Option2 {
  src: string
  alt: string
}

export type Step1ButtonProps = (Option1 | Option2) & {
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
    <div className="flex h-full w-full items-center justify-start rounded-lg border bg-card p-2 text-card-foreground shadow-step1Button hover:bg-gray-200 hover:shadow-step1Button-blur sm:flex-col sm:justify-center">
      {'src' in props ? (
        <Image
          src={props.src}
          alt={props.alt}
          className="mb-1 mr-2 w-7 sm:w-14"
        />
      ) : (
        <Icon className="w-14 text-foreground" />
      )}
      <p className="mb-1 mr-2 text-left text-xs uppercase 2xs:text-sm sm:text-center">
        {props.templateModel}
      </p>
      {props.isOutOfDate && (
        <p className="ml-auto max-w-[66px] text-[10px] uppercase text-gray-500 2xs:text-xs sm:ml-0 sm:max-w-none">
          Fora de época
        </p>
      )}
    </div>
  )
}