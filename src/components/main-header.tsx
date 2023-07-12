import { Menu, UserCircle2 } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

import creaLogo from '~/assets/crea-logo.svg'

interface Props {
  name: string
  cnp: string
}

export default function MainHeader({ name, cnp }: Props) {
  return (
    <header className="sticky inset-x-0 top-0 z-10 flex h-24 items-center justify-between bg-slate-200 p-4">
      <div className="flex items-center">
        <Menu className="h-5 w-5 text-black" />
        <Image
          src={creaLogo as string}
          alt="CREA Logo"
          className="hidden w-[320px] md:block"
        />
      </div>
      <Image
        src={creaLogo as string}
        alt="CREA Logo"
        className="w-[190px] 2xs:w-[220px] md:hidden"
      />
      <div className="flex space-x-1">
        <UserCircle2 className="h-8 w-8 2xs:h-10 2xs:w-10" />
        <section className="hidden flex-col md:flex">
          <span className="text-sm">{name}</span>
          <span className="text-xs">{cnp}</span>
        </section>
      </div>
    </header>
  )
}
