import React from 'react'

import MainHeader from '~/components/main-header'

interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <MainHeader name="Nome do Usuário da Silva" cnp="000. XXX. 222 - 12" />
      {children}
    </>
  )
}
