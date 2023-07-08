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
    <div className="flex h-40 w-40 flex-col items-center justify-center rounded-lg border bg-card text-card-foreground shadow-step1Button hover:bg-gray-200 hover:shadow-step1Button-blur">
      {'src' in props ? (
        <Image src={props.src} alt={props.alt} />
      ) : (
        <Icon className="h-32 w-32 text-primary-foreground" />
      )}
      <p className="test-sm uppercase">{props.templateModel}</p>
      {props.isOutOfDate && (
        <p className="text-xs uppercase text-gray-500">Fora de época</p>
      )}
    </div>
  )
}
