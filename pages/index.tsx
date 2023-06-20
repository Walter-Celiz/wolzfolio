import Head from "next/head";
import { motion } from "framer-motion";

import LeftSide from "@/components/LeftSide";
import Navbar from "@/components/Navbar";
import RightSide from "@/components/RightSide";
import Banner from "@/components/Banner";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Celiz Walter Portfolio</title>
        <meta content="Celiz Walter Personal FrontEnd Portfolio" name="descripton" />
        <meta content="width=device-width, initial-scale=1 " name="viewport" />
        <link href="/logo.ico" rel="icon" />
      </Head>
      <main className="w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textDark/60">
        <Navbar />
        <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
          <motion.div
            animate={{ opacity: 1 }}
            className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0"
            initial={{ opacity: 0 }}
            transition={{ delay: 1.5 }}
          >
            <LeftSide />
          </motion.div>
          <motion.div
            animate={{ opacity: 1 }}
            className="h-[88vh] w-full mx-auto p-4"
            initial={{ opacity: 0 }}
            transition={{ delay: 1 }}
          >
            <Banner />
            <AboutMe />
            <Experience />
            <Projects />
            {/* Archive */}
            <Contact />
            <Footer />
          </motion.div>
          <motion.div
            animate={{ opacity: 1 }}
            className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0"
            initial={{ opacity: 0 }}
            transition={{ delay: 1.5 }}
          >
            <RightSide />
          </motion.div>
        </div>
      </main>
    </>
  );
}
