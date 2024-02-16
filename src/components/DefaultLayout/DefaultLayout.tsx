import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const DefaultLayout = () => {
  return (
    <>
    <Header/>
    <main className='py-2 px-4'>
    <Outlet></Outlet>
    </main>
    </>
  )
}

export default DefaultLayout;