import Image from "next/image"
import React from "react"
import CountdownTimer from "./CountdownTimer"
import { HiArrowRight } from "react-icons/hi2"
import { useTranslations } from "next-intl"

function Banner() {
  const t = useTranslations("banner")

  return (
    <div className="banner h-screen">
      <Image
        src="/images/BG.png"
        alt="Banner"
        fill
        className="object-cover absolute top-0 left-0 w-full -z-10"
      />
      <Image
        src="/images/Fairy.png"
        alt="Fairy"
        width={938}
        height={938}
        className="w-auto h-auto  absolute bottom-[-20%] left-1/4 md:bottom-0 md:left-0"
      />
      <div className="content absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center backdrop-blur rounded-full">
        <h1 className="text-light shadow-lg">{t("title")}</h1>
        <CountdownTimer />

        <div className="mt-10 md:mt-14 md:mx-24 ">
          <p className="text-light text-center text-xs md:text-lg">
          {t("desc")}
          </p>
          <div className="email w-full flex bg-white p-4 rounded-lg mt-8">
            <input
              type="text"
              placeholder={t("email")}
              className="w-full font-montserrat"
            />
            <button>
              <HiArrowRight fontSize={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
