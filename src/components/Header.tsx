import Image from "next/image"
import Link from "next/link"
import React from "react"
import LanguageSelector from "./LanguageSelector"
import { RxHamburgerMenu } from "react-icons/rx";
import { useTranslations } from "next-intl";

function Header() {
  const menuLinks = [
    { title: "aboutUs", url: "aboutUs" },
    { title: "games", url: "" },
    { title: "partners", url: "" },
    { title: "contactUs", url: "" },
  ]
  const t = useTranslations("Menu");

  return (
    <header className="paddingContainer w-full h-24 flex justify-between items-center">
      <Link href="/" className="logo">
        <Image
          src="/images/White_logo.png"
          alt="Logo"
          width={100}
          height={64}
          className="w-[4.5rem] md:w-full"
        />
      </Link>
      <div className=" hidden md:flex items-center gap-7">
        <ul className="menu flex gap-20">
          {menuLinks.map(({ title, url }) => {
            return (
              <li key={title}>
                <Link
                  href={url}
                  className="uppercase text-sm text-light font-bold hover:underline"
                >
                  {/* {title} */}
                  {t(title)}
                </Link>
              </li>
            )
          })}
        </ul>
        <LanguageSelector />
      </div>
      <button className=" md:hidden">
      <RxHamburgerMenu size={40} color="white"/>

      </button>
    </header>
  )
}

export default Header
