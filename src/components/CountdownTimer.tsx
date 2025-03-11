"use client"
import { useTranslations } from "next-intl"
import { useEffect, useState } from "react"

const CountdownTimer = () => {
    const t = useTranslations("banner")
  
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  useEffect(() => {
    const target = new Date();
    target.setDate(target.getDate() + 30);

    const interval = setInterval(() => {
      const now = new Date()
      const difference = target.getTime() - now.getTime()

      const d = Math.floor(difference / (1000 * 60 * 60 * 24))
      setDays(d)

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      setHours(h)

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      setMinutes(m)

      const s = Math.floor((difference % (1000 * 60)) / 1000)
      setSeconds(s)


    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="counter-time  bg-white rounded-[20px] p-6 shadow-md ">
      <div className="flex justify-between items-center w-full gap-1 md:gap-5 -mt-6">
        <div className="flex flex-col items-center text-center ">
          <h2 className="w-14 md:w-20">{days}</h2>
          <h4>{t("day")}</h4>
        </div>
        <span className="font-montserrat text-3xl md:text-6xl">:</span>
        <div className="flex flex-col items-center text-center ">
          <h2 className="w-14 md:w-20">{hours}</h2>
          <h4>{t("hour")}</h4>
        </div>
        <span className="font-montserrat text-3xl md:text-6xl">:</span>
        <div className="flex flex-col items-center text-center ">
          <h2 className="w-14 md:w-20">{minutes}</h2>
          <h4>{t("minute")}</h4>
        </div>
        <span className="font-montserrat text-3xl md:text-6xl">:</span>
        <div className="flex flex-col items-center text-center ">
          <h2 className="w-14 md:w-20">{seconds}</h2>
          <h4>{t("second")}</h4>
        </div>
      </div>
    </div>
  )
}

export default CountdownTimer
