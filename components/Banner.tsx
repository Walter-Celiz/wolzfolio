import {motion} from "framer-motion";

function Banner() {
  return (
    <section
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
      id="home"
    >
      <motion.h3
        animate={{y: 0, opacity: 1}}
        className="text-lg font-titleFont tracking-wide text-textGreen"
        initial={{y: 10, opacity: 0}}
        transition={{duration: 0.5, delay: 0.6}}
      >
        Hi there
      </motion.h3>
      <motion.h1
        animate={{y: 0, opacity: 1}}
        className="text-4xl lgl:text-6xl font-semibold flex flex-col"
        initial={{y: 10, opacity: 0}}
        transition={{duration: 0.5, delay: 0.7}}
      >
        {/* Walter Celiz. */}
        <span className="text-textDark ">I build things for the web.</span>
      </motion.h1>
      <motion.p
        animate={{y: 0, opacity: 1}}
        className="text-base md:max-w-[650px] text-textDark font-medium"
        initial={{y: 10, opacity: 0}}
        transition={{duration: 0.5, delay: 0.8}}
      >
        my goal is to create websites and applications that are not only user-friendly and visually
        appealing, but also deliver effective results. What&apos;s more, I love adding a touch of
        originality and style to my designs to make your online projects unique and stand out from
        the competition.{" "}
        {/* Let&apos;s work together to take your online presence to the next level! */}{" "}
        {/* <a href="https://github.com/Walter-Celiz" rel="noopener" target="_blank">
          <span className="text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group">
            Learn more
            <span className="absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500" />
          </span>
        </a> */}
      </motion.p>
      {/* <motion.button
        animate={{y: 0, opacity: 1}}
        className="w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300"
        initial={{y: 10, opacity: 0}}
        transition={{duration: 0.5, delay: 0.9}}
      >
        Check out my Projects!
      </motion.button> */}
    </section>
  );
}

export default Banner;
