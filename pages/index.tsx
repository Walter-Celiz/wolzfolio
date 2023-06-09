import Navbar from "@/components/Navbar"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>Celiz Walter Portfolio</title>
        <meta name="descripton" content="Celiz Walter Personal FrontEnd Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1 " />
      </Head>
      <main className="w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll">
        <Navbar />
      </main>
    </>
  )
}
