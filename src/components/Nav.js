import React from 'react'
import Link from 'next/link'
import NavLink from './NavLink'

export default function Nav() {
  const linkClasses =
    'border-2 border-black w-28 hover:bg-gray-200 active:bg-blue-200'

  return (
    <main className="w-full h-24 border-2 border-black">
      <nav className="w-full h-full">
        <ul className="w-full h-full flex justify-between items-center text-center">
          <li className={`${linkClasses}`}>
            <NavLink href="/">Home</NavLink>
          </li>
          <li className={`${linkClasses}`}>
            <NavLink href="/form">Form</NavLink>
          </li>
          <li className={`${linkClasses}`}>
            <NavLink href="/pets">Pets</NavLink>
          </li>
        </ul>
      </nav>
    </main>
  )
}
