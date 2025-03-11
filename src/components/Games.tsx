import { useTranslations } from "next-intl"
import Image from "next/image"
import React from "react"

function Games() {
  const t = useTranslations("games")

  const cardList = [
    {
      title: "E-Space",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imgLink: "/images/cards/espace.png",
    },
    {
      title: "Kingland",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imgLink: "/images/cards/kingland.png",
    },
    {
      title: "The Last Game",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imgLink: "/images/cards/lastGame.png",
    },
    {
      title: "G-Dragon",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imgLink: "/images/cards/gDragon.png",
    },
    {
      title: "Pirates",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imgLink: "/images/cards/pirates.png",
    },
    {
      title: "Witch Party",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imgLink: "/images/cards/party.png",
    },
    {
      title: "Rocky",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imgLink: "/images/cards/rocky.png",
    },
    {
      title: "Blue Fire",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imgLink: "/images/cards/blueFire.png",
    },
    {
      title: "Trau Vang",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imgLink: "/images/cards/trauVang.png",
    },
    {
      title: "Aborigines",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imgLink: "/images/cards/aborigines.png",
    },
    {
      title: "Cinderella",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imgLink: "/images/cards/cinderella.png",
    },
    {
      title: "Egypt Game",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imgLink: "/images/cards/egypt.png",
    },
  ]
  return (
    <div className="game paddingContainer text-center">
      <h2>{t("title")}</h2>
      <p className="max-w-[60%] mx-auto mt-6 mb-20">{t("desc")}</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
        {cardList?.map(({ title, desc, imgLink }, index) => {
          return (
            <div
              className={`card relative max-w-fit max-h-fit hover:cursor-pointer  ${
                index % 2 === 0 ? "" : "mt-16"
              }   `}
              key={index}
            >
              <Image
                src={imgLink}
                alt="espace"
                width={410}
                height={560}
                className="object-cover rounded-lg"
              />
              <div className="content text-left text-light absolute left-0 bottom-0 p-2 md:px-10 md:pb-14">
                <h3 className="text-[1.5rem] md:text-[2.5rem] ">{title}</h3>
                <p>{desc}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Games
