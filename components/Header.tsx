"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const menu = [
  { name: "HOME", href: "/" },
  { name: "ABOUT US", href: "/about" },
  {
    name: "SERVICES",
    href: "/services",
    children: [
      { name: "HAIR TRANSPLANT", href: "/services/hair-transplant" },
      { name: "FACE TREATMENT", href: "/services/face-treatment" },
      { name: "SKIN TREATMENT", href: "/services/skin-treatment" },
    ],
  },
  {
    name: "OUR LOCATION",
    href: "/location",
    children: [
      { name: "JALGAON", href: "/location/jalgaon" },
      { name: "KALYAN", href: "/location/kalyan" },
    ],
  },
  { name: "GALLERY", href: "/gallery" },
  { name: "MEDIA", href: "/media" },
  { name: "BLOG", href: "/blog" },
]

export default function Header() {
  const pathname = usePathname()

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/")

  const navLink =
    "relative pb-2 transition-all after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-full after:bg-primary after:rounded-full after:scale-x-0 hover:after:scale-x-100 hover:text-primary"

  const navActive = "text-primary after:scale-x-100"

  return (
    <header className="bg-base-100 shadow-sm">
      <div className="navbar max-w-8xl mx-auto px-6 py-3">

        {/* ================= MOBILE MENU ================= */}
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              ☰
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-0 w-64 bg-base-200 shadow z-9999 rounded-none"
            >
              {menu.map((item) => {
                const active = isActive(item.href)

                return (
                  <li
                    key={item.name}
                    className={`border-b border-base-300 ${active ? "text-primary font-semibold" : ""
                      }`}
                  >
                    {item.children ? (
                      <details open={active}>
                        <summary className="px-4 py-4 uppercase font-medium">
                          {item.name}
                        </summary>
                        <ul className="bg-base-200">
                          {item.children.map((sub) => (
                            <li key={sub.name}>
                              <Link
                                href={sub.href}
                                className={`pl-8 py-3 ${pathname === sub.href
                                  ? "text-primary font-semibold"
                                  : ""
                                  }`}
                              >
                                {sub.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </details>
                    ) : (
                      <Link
                        href={item.href}
                        className="px-4 py-4 uppercase font-medium"
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>

          {/* LOGO */}
          <Link
            href="/"
            className="flex-col items-center ml-auto sm:ml-4 sm:mr-0 hidden lg:flex"
          >
            <span className="text-3xl font-bold text-primary">DV</span>

            <span className="text-xl font-semibold tracking-wide">
              DEVASHA&apos;S
            </span>

            <span className="flex items-center gap-2 text-xs tracking-widest text-primary whitespace-nowrap">
              • COSMETIC CLINIC •
            </span>
          </Link>


        </div>
        {/* MOBILE LOGO – RIGHT */}
        <div className="navbar-end lg:hidden">
          <Link
            href="/"
            className="flex flex-col items-center text-right"
          >
            <span className="text-3xl font-bold text-primary">DV</span>
            <span className="text-xl font-semibold tracking-wide">
              DEVASHA&apos;S
            </span>
            <span className="text-xs tracking-widest text-primary whitespace-nowrap">
              • COSMETIC CLINIC •
            </span>
          </Link>
        </div>
        {/* DESKTOP LOGO */}
        {/* <div className="navbar-start hidden lg:flex">
          <Link href="/" className="flex flex-col items-start">
            <span className="text-3xl font-bold text-primary">DV</span>
            <span className="text-xl font-semibold tracking-wide">
              DEVASHA&apos;S
            </span>
            <span className="text-xs tracking-widest text-primary whitespace-nowrap">
              • COSMETIC CLINIC •
            </span>
          </Link>
        </div> */}


        {/* ================= DESKTOP MENU ================= */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-10 text-sm font-semibold uppercase items-center">

            {menu.map((item) =>
              item.children ? (
                <li key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className={`${navLink} flex items-center gap-1 ${isActive(item.href) ? navActive : ""
                      }`}
                  >
                    {item.name}
                    <span className="text-[10px] font-extrabold">▼</span>
                  </Link>

                  <ul className="menu absolute left-0 top-full mt-3 w-56 bg-base-200 shadow rounded-none opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all z-20">
                    {item.children.map((sub) => (
                      <li key={sub.name}>
                        <Link
                          href={sub.href}
                          className={`${pathname === sub.href
                            ? "text-primary font-semibold"
                            : ""
                            }`}
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`${navLink} ${pathname === item.href ? navActive : ""
                      }`}
                  >
                    {item.name}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* ================= CTA ================= */}
        <div className="navbar-end hidden sm:flex">
          <button className="btn btn-primary rounded-full px-10 shadow-lg hover:shadow-primary/40 transition-all ">
            Make Appointment
          </button>
        </div>

      </div>
    </header>
  )
}
