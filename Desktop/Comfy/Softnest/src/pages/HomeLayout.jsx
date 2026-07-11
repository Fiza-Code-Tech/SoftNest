import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components'
import { NavBar } from '../components'
const HomeLayout = () => {
  return (
    <>
      <Header />
      <NavBar />
      <section className="align-element py-20">
        <Outlet />
      </section>
    </>
  )
}

export default HomeLayout
