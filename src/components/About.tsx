"use client"
import { useTranslations } from "next-intl"
import Image from "next/image"
import React from "react"
import { CountUp } from "use-count-up"

function About() {
  const t = useTranslations("about")

  const aboutList = [
    {
      title: "hour",
      desc: "hour_desc",
      iconLink: "/images/logoAccess.png",
    },
    {
      title: "design",
      desc: "design_desc",
      iconLink: "/images/logoDesign.png",
    },
    {
      title: "team",
      desc: "team_desc",
      iconLink: "/images/logoTeam.png",
    },
  ]
  return (
    <div className="about md:paddingContainer flex mt-16 md:mt-0">
      <div className="md:w-10/12 m-auto flex flex-col md:flex-row justify-between gap-10">
        <div className="md:w-1/2 flex flex-col gap-10">
          <h2>{t("title")}</h2>
          <p>
{t("desc")}
          </p>
          <div className="flex md:flex-col gap-10">
            <div>
              <span className="text-blue text-[2.75rem] md:text-[5rem] font-bold">
                <CountUp isCounting end={600} duration={2} />
                <sub>M</sub>+
              </span>
              <h3>{t("title")}</h3>
            </div>
            <div>
              <span className="text-blue text-[2.75rem] md:text-[5rem] font-bold">
                <CountUp isCounting end={135} duration={2} />
              </span>
              <h3>Trò chơi</h3>
            </div>
          </div>
        </div>
        <div className="bg-[#eeeeee] md:w-1/2 flex justify-center items-center ">
          <div className=" md:w-3/4 flex flex-col gap-10">
            {aboutList.map(({ title, desc, iconLink }) => (
              <div key={title} className="flex gap-6">
                <Image
                  src={iconLink}
                  alt={title}
                  width={50}
                  height={50}
                  className="w-12 h-12"
                />
                <div className="flex flex-col gap-2">
                  <h3>{t(title)}</h3>
                  <p>{t(desc)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
