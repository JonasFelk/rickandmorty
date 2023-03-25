import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'

import { Header } from '../components'

export const MainLayout: FC = () => {
  return (
    <div className='wrapper'>
      <header>
        <Header />
      </header>
      <main className='content'>
        <Outlet />
      </main>
    </div>
  )
}
