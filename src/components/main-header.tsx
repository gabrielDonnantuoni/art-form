import type React from 'react'

import Image from 'next/image'
import { Menu, UserCircle2 } from 'lucide-react'

import creaLogo from '~/assets/crea-logo.svg'

interface Props {
  name: string
  cnp: string
}

export default function MainHeader({ name, cnp }: Props) {
  return (
    <header className="sticky inset-x-0 top-0 z-40 flex h-24 items-center justify-between bg-slate-200 p-4">
      <div className="flex items-center">
        <Menu className="z-50 h-5 w-5 text-black" />
        <Image
          src={creaLogo}
          alt="CREA Logo"
          className="hidden w-[320px] md:block"
        />
      </div>
      <Image src={creaLogo} alt="CREA Logo" className="w-[220px] md:hidden" />
      <div className="flex space-x-1">
        <UserCircle2 className="h-10 w-10" />
        <section className="hidden flex-col md:flex">
          <span className="text-sm">{name}</span>
          <span className="text-xs">{cnp}</span>
        </section>
      </div>
    </header>
  )
}
