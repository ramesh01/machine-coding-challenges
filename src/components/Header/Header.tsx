import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white border-gray-200 px-4 lg:px-6 py-5 shadow dark:bg-gray-800">
        <div className="flex flex-wrap items-center">
        <div className='flex gap-2'>
        <Link className='hover:bg-sky-400' to={'/drawshapes'}>Draw shapes</Link>
        <Link className='hover:bg-sky-400' to={'/chessboard'}>ChessBoard</Link>
        </div>
        </div>
  </header>
  )
}

export default Header;