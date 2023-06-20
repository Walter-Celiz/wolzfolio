import Image from "next/image";
import {AiFillHtml5} from "react-icons/ai";
import {DiCss3, DiJavascript1, DiReact} from "react-icons/di";
import {TbBrandTypescript, TbBrandNextjs, TbBrandTailwind, TbBrandBootstrap} from "react-icons/tb";
import {BsFillGrid1X2Fill, BsFiletypeCss} from "react-icons/bs";
import {SiStyledcomponents, SiBem} from "react-icons/si";

import {profileImg} from "@/public/assets";

import SectionTitle from "./SectionTitle";

function AboutMe() {
  return (
    <section
      className="max-w-containerSmall mx-auto py-10 lgl:px-10 flex flex-col gap-8"
      id="aboutme"
    >
      <SectionTitle title="About Me" titleNo="-" />
      <div className="flex flex-col lgl:flex-row gap-16 items-center justify-center">
        <div className="w-full ll:w-2/3 text-base text-textDark font-medium flex flex-col gap-4 items-center justify-center">
          <p>
            Hi, I&apos;m Walter Celiz, a JavaScript developer since 2022. After studying the basics
            of web development on both worlds, the frontend and the backend, I discovered that my
            true passion lies in designing and developing user interfaces. I love creating
            innovative and user-friendly designs for websites and applications
          </p>
          <p>
            I would like to improve my skills in frontend development and learn about different
            architectures and design patterns to create products that adapt to any need. I am
            interested in delving deeper into this world and understanding its complexities and
            details, from accessibility to performance optimization. Additionally, I would like to
            stay up to date with the latest trends and technologies in the frontend field, so that I
            can apply them to my projects and offer innovative solutions to clients.
          </p>
          <p className="md:text-start xs:text-center">
            Here are./ technologies I have been working with recently:{" "}
          </p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6 xs:ml-8">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillHtml5 />
              </span>
              HTML 5
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <DiCss3 />
              </span>
              CSS 3
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <DiJavascript1 />
              </span>
              JavaScripts (ES6+)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <TbBrandTypescript />
              </span>
              TypeScript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <DiReact />
              </span>
              React
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <TbBrandNextjs />
              </span>
              NextJs
            </li>
          </ul>
          <p className="md:text-start xs:text-center">
            Within the world of CSS3, I have been playing around with the basics of:{" "}
          </p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6 xs:ml-8">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <TbBrandBootstrap />
              </span>
              Bootstrap 5
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <BsFillGrid1X2Fill />
              </span>
              CSS Grid
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <TbBrandTailwind />
              </span>
              Tailwind
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <SiBem />
              </span>
              BEM
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <SiStyledcomponents />
              </span>
              Styled Components
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <BsFiletypeCss />
              </span>
              CSS Modules
            </li>
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group xs:ml-3 flex items-center justify-center">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg flex items-center justify-center">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0 items-center justify-center">
              <Image
                alt="profileImg"
                className="rounded-lg h-full object-cover xs:ml-3"
                src={profileImg}
              />
              <div className="hidden lgl:inline-block absolute w-full h-80  rounded-md top-0 left-0  duration-300" />
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
