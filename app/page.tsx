'use client'
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

import { Button, Chip } from "@nextui-org/react";
import Link from "next/link";
import Info from "@/components/Info";
import { motion } from "framer-motion";
interface IProps {

}
const page = ({ }: IProps) => {
  const text3Variants = (delay: any) => ({
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 2, delay } }
  });
  const fadeInUpVariants = (delay: any) => ({
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay } }
  });
  const Links = [
    {
      text: "Email",
      url: "mailto:farahmoahmed10@gmail.com"
    },
    {
      text: "Behance",
      url: "https://www.behance.net/farahmohamed52"
    },
    {
      text: "Instagram",
      url: "https://www.instagram.com/fr.eg_/"
    },
    {
      text: "LinkedIn",
      url: "https://www.linkedin.com/in/farah-mohamed-2034a4291"
    },
  ]
  return <>
    <main className="relative min-h-screen flex  flex-col items-center justify-center bg-white overflow-hidden">
      <div className="px-4">
        <Info />
        <div className="my-5 flex items-center justify-center space-x-4">
          <Link target="_blank" href={"https://www.linkedin.com/in/farah-mohamed-2034a4291"}>
            <motion.span
              variants={text3Variants(0.2)}
              initial="hidden"
              animate="visible"
              className="text-[#283890]"
            >
              <FaLinkedinIn size={30} />
            </motion.span>
          </Link>

          <Link href={"mailto:farahmoahmed10@gmail.com"}>
            <motion.span
              variants={text3Variants(0.4)}
              initial="hidden"
              animate="visible"
              className="text-[#283890]"
            >
              <MdEmail size={30} />
            </motion.span>
          </Link>

          <Link target="_blank" href={"https://api.whatsapp.com/send?phone=201068487314"}>
            <motion.span
              variants={text3Variants(0.6)}
              initial="hidden"
              animate="visible"
              className="text-[#283890]"
            >
              <FaWhatsapp size={30} />
            </motion.span>
          </Link>

          <Link target="_blank" href={"https://www.instagram.com/fr.eg_/"}>
            <motion.span
              variants={text3Variants(0.8)}
              initial="hidden"
              animate="visible"
              className="text-[#283890]"
            >
              <FaInstagram size={30} />
            </motion.span>
          </Link>

          <Link target="_blank" href={"https://www.tiktok.com/@fr.eg_"}>
            <motion.span
              variants={text3Variants(1.0)}
              initial="hidden"
              animate="visible"
              className="text-[#283890]"
            >
              <FaTiktok size={30} />
            </motion.span>
          </Link>
        </div>

        <div className="my-4 flex flex-col space-y-5 items-center justify-center">
          {Links.map((fr, index) => (
            <motion.div
              key={index}
              variants={fadeInUpVariants(index * 0.2)}
              initial="hidden"
              animate="visible"
              className="w-full"
            >
              <Button
                as={Link}
                href={fr.url}
                target="_blank"
                className="w-full font-medium bg-[#283890] text-white"
                color="default"
              >
                {fr.text}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
      <div className=" absolute bottom-4">
        <p className="text-tiny">Powered by <Link href={"https://www.instagram.com/nest.dev/"} target="_blank" className="font-bold">NEST</Link></p>
      </div>
    </main >
  </>;
};

export default page;
