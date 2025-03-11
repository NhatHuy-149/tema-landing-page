"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import Image from "next/image"
import { useTranslations } from "next-intl"

const brands = [
  { id: 1, src: "/images/partners/ea-games.png", alt: "EA Games" },
  { id: 2, src: "/images/partners/game-logo.png", alt: "Game Logo" },
  { id: 3, src: "/images/partners/first-power.png", alt: "First Power Up" },
  { id: 4, src: "/images/partners/disney.png", alt: "Disney" },
  { id: 5, src: "/images/partners/bookpro.png", alt: "BookPro Game Show" },
  { id: 6, src: "/images/partners/first-power.png", alt: "First Power Up" },
]

export default function BrandSlider() {
  const t = useTranslations("partners")

  return (
    <div className="mt-12 md:mt-32 py-10 md:pt-16 md:pb-24 bg-gray-100">
      <h2 className="text-center mb-6">{t("title")}</h2>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        autoplay={{ delay: 2000 }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          1024: { slidesPerView: 5 },
        }}
        className="w-[90%] mx-auto"
      >
        {brands.map(({id,src,alt}) => (
          <SwiperSlide key={id} className="flex justify-center">
            <Image
              src={src}
              alt={alt}
              width={260}
              height={100}
              className="h-16 object-contain min-w-44"

            />
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  )
}
