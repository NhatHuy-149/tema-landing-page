import Link from "next/link"
import React from "react"
import { FaTwitter } from "react-icons/fa"
import { IoLogoFacebook } from "react-icons/io"
import { FaLinkedin } from "react-icons/fa6"
import Image from "next/image"
import { HiArrowRight } from "react-icons/hi2"
import { useTranslations } from "next-intl"

function Footer() {
    const t = useTranslations("footer");
  
  return (
    <footer className="relative w-full min-h-fit">
      <Image
        src="/images/bannerFooter.png"
        alt="Banner"
        width={1920}
        height={478}
        className="object-cover relative -z-10 h-full min-h-[750px] md:min-h-[448px]"
      />
      <div className="absolute top-0 left-0 w-full h-full py-8 md:py-24 md:px-32 md:flex flex-col md:flex-row justify-between gap-10 md:gap-64">
        <div className="flex flex-col items-center gap-10 mb-10 md:mb-0">
          <div className="logo">
            <Image
              src="/images/White_logo.png"
              alt="Logo"
              width={163}
              height={96}
            />
          </div>
          <div className="social flex gap-4">
            <Link href="/">
              <FaTwitter size={40} color="white" />
            </Link>
            <Link href="/">
              <IoLogoFacebook size={40} color="white" />
            </Link>
            <Link href="/">
              <FaLinkedin size={40} color="white" />
            </Link>
          </div>
        </div>
        <div className="flex  flex-col md:flex-row px-4 md:px-0 gap-6 md:gap-9">
          <div className="text-light flex flex-col gap-4 md:gap-10">
            <h3 className="">{t("address")}</h3>
            <div className="flex gap-2">
              <Image
                src="/images/location.png"
                alt="location"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <div>
                <p>
                  Valletta Buildings, South Street, Valletta - VLT 1103 Malta,
                  Mỹ
                </p>
                <p>
                  {t("address_desc")}
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <Image
                src="/images/mobile.png"
                alt="mobile"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <div>
                <p>(+1) 555-0108-000 hoặc (+236) 555-0108</p>
              </div>
            </div>
          </div>
          <div className="text-light flex flex-col gap-4 md:gap-10">
            <h3>{t("subscribe")}</h3>
            <div>
              <p>
                {t("subscribe_desc")}
              </p>
              <div className="email w-full flex bg-transparent border-solid border rounded-lg p-4 mt-8">
                <input
                  type="text"
                  placeholder={t("email")}
                  className="w-full font-montserrat bg-transparent"
                />
                <button>
                  <HiArrowRight fontSize={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-center text-light py-8 bg-black">
        {new Date().getFullYear()} Copyright. Policy.
        </p>
      </div>
    </footer>
  )
}

export default Footer
