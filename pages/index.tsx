import LeftSide from "@/components/LeftSide"
import Navbar from "@/components/Navbar"
import RightSide from "@/components/RightSide"
import Head from "next/head"
import { motion } from "framer-motion"
import Banner from "@/components/Banner"

export default function Home() {
  return (
    <>
      <Head>
        <title>Celiz Walter Portfolio</title>
        <meta name="descripton" content="Celiz Walter Personal FrontEnd Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1 " />
        <link rel="icon" href="/logo.ico"></link>
      </Head>
      <main className="w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll">
        <Navbar />
        <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
          <motion.div
            className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <LeftSide />
          </motion.div>
          <div className="h-[88vh] w-full mx-auto p-4 ">
            <Banner />
            {/* About me*/}
            {/* Experience */}
            {/* Projects */}
            {/* Archive */}
            {/* Contact */}
            {/* Footer */}
          </div>
          <motion.div
            className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <RightSide />
          </motion.div>
        </div>
      </main>
    </>
  )
}
