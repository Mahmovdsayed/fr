import Image from "next/image";
import logo from "../public/fr_logo.jpg"
import link from "../public/link.png"
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { motion } from 'framer-motion';

import { Button, Chip } from "@nextui-org/react";
import Link from "next/link";
interface IProps {

}
const page = ({ }: IProps) => {
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
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Image
            className="rounded-full blur-3xl"
            width={120}
            height={120}
            alt="fr_logo"
            blurDataURL="true"
            draggable="false"
            src={logo}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center space-x-2"
          >
            <h1 className="text-3xl font-semibold">Farah's Links</h1>
            <Image
              width={25}
              height={25}
              src={link}
              alt="link"
            />
          </motion.div>
          <p className="mt-1 text-sm md:text-lg font-medium">Transforming the Ordinary into the Extraordinary</p>
          <Chip className="mt-2" variant="dot" size="sm" color="secondary">Available For Work</Chip>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="my-5 flex items-center justify-center space-x-4"
        >
          <Link target="_blank" href={"https://www.linkedin.com/in/farah-mohamed-2034a4291"}>
            <span className="text-[#283890]"><FaLinkedin size={30} /></span>
          </Link>
          <Link href={"mailto:farahmoahmed10@gmail.com"}>
            <span className="text-[#283890]"><MdEmail size={30} /></span>
          </Link>
          <Link target="_blank" href={"tel:+201068487314"}>
            <span className="text-[#283890]"><FaWhatsapp size={30} /></span>
          </Link>
          <Link target="_blank" href={"https://www.instagram.com/fr.eg_/"}>
            <span className="text-[#283890]"><FaInstagramSquare size={30} /></span>
          </Link>
          <Link target="_blank" href={"https://www.tiktok.com/@fr.eg_"}>
            <span className="text-[#283890]"><FaTiktok size={30} /></span>
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="my-4 flex flex-col space-y-5 items-center justify-center"
        >
          {Links.map((fr, index) =>
            <Button
              key={index}
              as={Link}
              href={fr.url}
              target="_blank"
              className="w-full font-medium bg-[#283890] text-white"
              color="default"
            >
              {fr.text}
            </Button>
          )}
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="absolute bottom-4"
      >
        <p className="text-tiny">Powered by <Link href={"https://www.instagram.com/nest.dev/"} target="_blank" className="font-bold">NEST</Link></p>
      </motion.div>
    </main>
  </>;
};

export default page;
