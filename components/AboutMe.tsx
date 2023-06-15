import Image from "next/image";
import {AiFillThunderbolt} from "react-icons/ai";

import {profileImg} from "@/public/assets";

import SectionTitle from "./SectionTitle";

function AboutMe() {
  return (
    <section
      className="max-w-containerSmall mx-auto py-10 lgl:px-10 flex flex-col gap-8"
      id="aboutme"
    >
      <SectionTitle title="About Me" titleNo="-" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full ll:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            Hello! My name is Walter Celiz and I enjoy creating things that live on the internet. My
            interst in web developer startet back in 2019 when I deciedd t try editing custom Tumblr
            themes lbablblasdasdasdbhadmas Hello! My name is Walter Celiz and I enjoy creating
            things that live on the internet. My interst in web developer startet back in 2019 when
            I deciedd t try editing custom Tumblr themes lbablblasdasdasdbhadmas
          </p>
          <p>
            Hello! My name is Walter Celiz and I enjoy creating things that live on the internet. My
            interst in web developer startet back in 2019 when I deciedd t try editing custom Tumblr
            themes lbablblasdasdasdbhadmas Hello! My name is Walter Celiz and I enjoy creating
            things that live on the internet. My interst in web developer startet back in 2019 when
            I deciedd t try editing custom Tumblr themes lbablblasdasdasdbhadmas
          </p>
          <p>Here are a technologies I have been working with recently</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              HTML 5
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              CSS 3
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              JavaScripts (ES6+)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              TypeScript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              React
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              NextJs
            </li>
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image alt="profileImg" className="rounded-lg h-full object-cover" src={profileImg} />
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
