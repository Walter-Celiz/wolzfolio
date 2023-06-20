/* eslint-disable @typescript-eslint/no-unnecessary-type-arguments */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Image from "next/image";
import Link from "next/link";
import {motion} from "framer-motion";
import {useRef, useState} from "react";
import {MdOutlineClose} from "react-icons/md";

import {wlogo} from "@/public/assets";

function Navbar() {
  const ref = useRef<string | any>("");
  const [showMenu, setShowMenu] = useState(false);
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);

    elem?.scrollIntoView({
      behavior: "smooth",
    });

    //Update the class name of clicked link
    const links = document.querySelectorAll(".nav-link");

    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };

  return (
    <div className="w-full shadow-navbarShadow h-20 lg:h[12vh] sticky top-0 z-50 bg-bodyColor px-4">
      <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
        <motion.div animate={{opacity: 1}} initial={{opacity: 0}} transition={{duration: 0.5}}>
          <Image alt="wlogo" className="w-14" src={wlogo} />
        </motion.div>
        <div className="hidden mdl:inline-flex items-center gap-7">
          <ul className="flex text-[13px] gap-7">
            <Link
              className="flex items-center gap-1 font-medium text-textDark  hover:text-textGreen cursor-pointer duration-300 nav-link"
              href="#home"
              onClick={handleScroll}
            >
              <motion.li
                animate={{y: 0, opacity: 1}}
                initial={{y: -10, opacity: 0}}
                transition={{duration: 0.1}}
              >
                Home
              </motion.li>
            </Link>
            <Link
              className="flex items-center gap-1 font-medium text-textDark  hover:text-textGreen cursor-pointer duration-300 nav-link"
              href="#aboutme"
              onClick={handleScroll}
            >
              <motion.li
                animate={{y: 0, opacity: 1}}
                initial={{y: -10, opacity: 0}}
                transition={{duration: 0.1, delay: 0.1}}
              >
                About me
              </motion.li>
            </Link>
            <Link
              className="flex items-center gap-1 font-medium text-textDark  hover:text-textGreen cursor-pointer duration-300 nav-link"
              href="#experience"
              onClick={handleScroll}
            >
              <motion.li
                animate={{y: 0, opacity: 1}}
                initial={{y: -10, opacity: 0}}
                transition={{duration: 0.1, delay: 0.2}}
              >
                Experience
              </motion.li>
            </Link>
            <Link
              className="flex items-center gap-1 font-medium text-textDark  hover:text-textGreen cursor-pointer duration-300 nav-link"
              href="#projects"
              onClick={handleScroll}
            >
              <motion.li
                animate={{y: 0, opacity: 1}}
                initial={{y: -10, opacity: 0}}
                transition={{duration: 0.1, delay: 0.3}}
              >
                Projects
              </motion.li>
            </Link>
            <Link
              className="flex items-center gap-1 font-medium text-textDark  hover:text-textGreen cursor-pointer duration-300 nav-link"
              href="#contact"
              onClick={handleScroll}
            >
              <motion.li
                animate={{y: 0, opacity: 1}}
                initial={{y: -10, opacity: 0}}
                transition={{duration: 0.1, delay: 0.4}}
              >
                Contact
              </motion.li>
            </Link>
          </ul>
          <a href="/assets/walterceliz.pdf" target="_blank">
            <motion.button
              animate={{y: 0, opacity: 1}}
              className="px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
              initial={{y: -10, opacity: 0}}
              transition={{duration: 0.1, delay: 0.5}}
            >
              Resume
            </motion.button>
          </a>
        </div>
        {/* small icon section */}
        <div
          className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflo-hidden group"
          onClick={() => setShowMenu(true)}
        >
          <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300" />
          <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300" />
          <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300" />
        </div>
        {showMenu ? (
          <div
            ref={(node) => (ref.current = node)}
            className="absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end"
          >
            <motion.div
              animate={{x: 0, opacity: 1}}
              className="w-[80%] h-full overflow-y-scroll scrollbarHide bg-[#112240] flex flex-col items-center px-4 py-10 relative"
              initial={{x: 20, opacity: 0}}
              transition={{duration: 0.1}}
            >
              <MdOutlineClose
                className="text-3xl text-textGreen cursor-pointer hover:text-red-500 absolute top-4 right-4"
                onClick={() => setShowMenu(false)}
              />
              <div className="flex flex-col items-center gap-7">
                <ul className="flex flex-col text-base gap-7">
                  <Link
                    className="flex items-center gap-1 font-medium text-textDark  hover:text-textGreen cursor-pointer duration-300 nav-link"
                    href="#home"
                    onClick={handleScroll}
                  >
                    <motion.li
                      animate={{x: 0, opacity: 1}}
                      initial={{x: 20, opacity: 0}}
                      transition={{duration: 0.2, delay: 0.1, ease: "easeIn"}}
                    >
                      Home
                    </motion.li>
                  </Link>
                  <Link
                    className="flex items-center gap-1 font-medium text-textDark  hover:text-textGreen cursor-pointer duration-300 nav-link"
                    href="#aboutme"
                    onClick={handleScroll}
                  >
                    <motion.li
                      animate={{x: 0, opacity: 1}}
                      initial={{x: 20, opacity: 0}}
                      transition={{duration: 0.2, delay: 0.2, ease: "easeIn"}}
                    >
                      About me
                    </motion.li>
                  </Link>
                  <Link
                    className="flex items-center gap-1 font-medium text-textDark  hover:text-textGreen cursor-pointer duration-300 nav-link"
                    href="#experience"
                    onClick={handleScroll}
                  >
                    <motion.li
                      animate={{x: 0, opacity: 1}}
                      initial={{x: 20, opacity: 0}}
                      transition={{duration: 0.2, delay: 0.3, ease: "easeIn"}}
                    >
                      Experience
                    </motion.li>
                  </Link>
                  <Link
                    className="flex items-center gap-1 font-medium text-textDark  hover:text-textGreen cursor-pointer duration-300 nav-link"
                    href="#projects"
                    onClick={handleScroll}
                  >
                    <motion.li
                      animate={{x: 0, opacity: 1}}
                      initial={{x: 20, opacity: 0}}
                      transition={{duration: 0.2, delay: 0.4, ease: "easeIn"}}
                    >
                      Projects
                    </motion.li>
                  </Link>
                  <Link
                    className="flex items-center gap-1 font-medium text-textDark  hover:text-textGreen cursor-pointer duration-300 nav-link"
                    href="#contact"
                    onClick={handleScroll}
                  >
                    <motion.li
                      animate={{x: 0, opacity: 1}}
                      initial={{x: 20, opacity: 0}}
                      transition={{duration: 0.2, delay: 0.5, ease: "easeIn"}}
                    >
                      Contact
                    </motion.li>
                  </Link>
                </ul>
                <a href="/assets/walterceliz.pdf" target="_blank">
                  <motion.button
                    animate={{opacity: 1}}
                    className="w-32 h-10 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
                    initial={{opacity: 0}}
                    transition={{delay: 0.6, ease: "easeIn"}}
                  >
                    Resume
                  </motion.button>
                </a>
              </div>
            </motion.div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Navbar;
