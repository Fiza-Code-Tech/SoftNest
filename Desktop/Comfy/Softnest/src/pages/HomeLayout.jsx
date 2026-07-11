import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components'
const HomeLayout = () => {
  return (
    <>
      <Header />
      <nav>
        <span className="text-4xl text-primary">Softnest</span>
      </nav>
      <section className="align-element py-20">
        <Outlet />
      </section>
    </>
  )
}

export default HomeLayout
