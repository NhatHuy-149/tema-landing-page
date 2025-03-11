"use client"
import { useState } from "react"
import { Menu } from "@headlessui/react"
import Image from "next/image"
import { TiArrowSortedDown } from "react-icons/ti"
import { FaCheck } from "react-icons/fa6"
import { usePathname, useRouter } from "next/navigation";

const languages = [
  { code: "vi", label: "Vietnamese", flag: "/images/vietnam.png" },
  { code: "en", label: "English", flag: "/images/united-states.png" },
]

export default function LanguageSelector() {
  const [selectedLang, setSelectedLang] = useState(languages[1])
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (lang: string) => {
    router.push(`/${lang}${pathname.substring(3)}`);
  };
  return (
    <div className="relative">
      <Menu>
        <Menu.Button className="flex items-center gap-2 px-3 py-2  ">
          <Image
            src={selectedLang.flag}
            alt={selectedLang.label}
            width={24}
            height={16}
          />
          <TiArrowSortedDown color="white" />
        </Menu.Button>
        <Menu.Items className="absolute mt-2 w-48 bg-white border rounded-lg shadow-lg right-[20px]">
          {languages.map((lang) => (
            <Menu.Item key={lang.code}>
              {({ active }) => (
                <button
                  onClick={() => {
                    setSelectedLang(lang)
                    changeLanguage(lang.code)
                  }}
                  className={`flex items-center gap-2 px-3 py-2 w-full rounded-lg ${
                    active ? "bg-gray-200" : ""
                  }`}
                >
                  {selectedLang.code === lang.code ? (
                    <FaCheck />
                  ) : (
                    <div className="w-4"></div>
                  )}
                  <Image
                    src={lang.flag}
                    alt={lang.label}
                    width={24}
                    height={16}
                  />
                  {lang.label}
                </button>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Menu>
    </div>
  )
}
