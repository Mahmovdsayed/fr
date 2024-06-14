import Image from "next/image";
import logo from "../public/fr_logo.jpg"
import link from "../public/link.png"
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

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
      url: "https://www.instagram.com/farahtelebx/"
    },
    {
      text: "LinkedIn",
      url: "https://www.linkedin.com/in/farah-mohamed-2034a4291"
    },
  ]
  return <>
    <main className="relative min-h-screen flex  flex-col items-center justify-center bg-white">
      <div className="px-4">
        <div className="text-center">
          <Image
            className="rounded-full blur-3xl"
            width={120}
            height={120}
            alt="fr_logo"
            blurDataURL="true"
            draggable="false"
            src={logo}
          />
          <div className="flex  items-center justify-center space-x-2">
            <h1 className="text-3xl font-semibold">Farah's Links</h1>
            <Image
              width={25}
              height={25}
              src={link}
              alt="link"
            />
          </div>
          <p className="mt-1 text-sm md:text-lg font-medium">Transforming the Ordinary into the Extraordinary</p>
          <Chip className="mt-2" variant="dot" size="sm" color="secondary">Available For Work</Chip>
        </div>
        <div className="my-5 flex items-center justify-center space-x-4">
          <Link target="_blank" href={"https://www.linkedin.com/in/farah-mohamed-2034a4291"}><span className="text-[#283890]"><FaLinkedin size={30} /></span></Link>
          <Link href={"mailto:farahmoahmed10@gmail.com"}><span className="text-[#283890]"><MdEmail size={30} /></span></Link>
          <Link target="_blank" href={"https://api.whatsapp.com/send?phone=201068487314"}><span className="text-[#283890]"><FaWhatsapp size={30} /></span></Link>
          <Link target="_blank" href={"https://www.instagram.com/farahtelebx/"}><span className="text-[#283890]"><FaInstagramSquare size={30} /></span></Link>
          <Link target="_blank" href={"https://www.tiktok.com/@fr.eg_"}><span className="text-[#283890]"><FaTiktok size={30} /></span></Link>

        </div>
        <div className="my-4 flex flex-col space-y-5 items-center justify-center">
          {Links.map((fr) =>
            <Button as={Link} href={fr.url} target="_blank" className="w-full font-medium bg-[#283890] text-white" color="default">{fr.text}</Button>
          )}
        </div>
      </div>
      <div className=" absolute bottom-4">
        <p className="text-tiny">Powered by <Link href={"https://www.instagram.com/nest.dev/"} target="_blank" className="font-bold">NEST</Link></p>
      </div>
    </main>
  </>;
};

export default page;
