'use client'
import Image from "next/image";
import logo from "../public/fr_logo.jpg"
import link from "../public/link.png"
import { Chip } from "@nextui-org/react";
import { motion } from "framer-motion";
interface IProps {

}
const Info = ({ }: IProps) => {
    const textVariants = {
        hidden: { opacity: 0, x: 200 },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } }
    };
    const text2Variants = {
        hidden: { opacity: 0, x: -200 },
        visible: { opacity: 1, x: 0, transition: { duration: 1.5 } }
    };
    const text3Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 2 } }
    };
    return <>
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
            <motion.div variants={textVariants}
                initial="hidden"
                animate="visible" className="flex  items-center justify-center space-x-2">
                <h1 className="text-4xl font-semibold">Farah's Links</h1>
                <Image
                    width={25}
                    height={25}
                    src={link}
                    alt="link"
                />
            </motion.div>
            <motion.p variants={text2Variants}
                initial="hidden"
                animate="visible" className="mt-1 text-sm md:text-lg font-medium">Transforming the Ordinary into the Extraordinary</motion.p>
            <motion.div variants={text3Variants}
                initial="hidden"
                animate="visible">
                <Chip className="mt-2" variant="dot" size="sm" color="secondary">Available For Work</Chip>
            </motion.div>
        </div>
    </>;
};

export default Info;