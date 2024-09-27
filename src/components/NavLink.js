'use client'

import Link from 'next/link'

import { usePathname } from 'next/navigation'

const NavLink = ({ href, children }) => {
  const path = usePathname()

  const isActive =
    (href === '/' && path === '/home') ||
    (href !== '/' && path.startsWith(href))

  return (
    <Link
      className={`${
        isActive ? 'bg-purple-700' : 'bg-black-50'
      } w-full h-full border-2 border-yellow-300`}
      href={href}
    >
      {children}
    </Link>
  )
}
export default NavLink
