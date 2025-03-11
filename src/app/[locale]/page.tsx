import About from "@/components/About"
import Banner from "@/components/Banner"
import BrandSlider from "@/components/BrandSlider"
import Games from "@/components/Games"
import Image from "next/image"

export default function Home() {
  return (
    <div>
      <Banner />
      <About />
      <div className="mt-14">
        <Image
          src="/images/Illustrator.png"
          alt="Illustrator"
          width={533}
          height={437}
          className="m-auto -mb-20 object-contain fairy"
        />
        <Image
          src="/images/Pin-map.png"
          alt="Pin-map"
          width={1160}
          height={428}
          className="m-auto"
        />
      </div>

      <Games />
      <BrandSlider />
    </div>
  )
}
