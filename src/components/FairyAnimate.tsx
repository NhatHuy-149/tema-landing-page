import Image from "next/image"
import { motion } from "framer-motion"

export default function FairyAnimate() {
  return (
    <>
      <motion.div
        animate={{ rotate: [0, 15, 0], y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{ display: "inline-block" }} // Giữ kích thước theo ảnh
      >
        <Image
          src="/images/Illustrator.png"
          alt="Illustrator"
          width={533}
          height={437}
          priority
        />
      </motion.div>
    </>
  )
}
