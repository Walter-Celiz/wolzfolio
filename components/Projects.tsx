import Image from "next/image";
import {TbBrandGithub} from "react-icons/tb";
import {RxOpenInNewWindow} from "react-icons/rx";

import {projectOne, projectTwo} from "@/public/assets";

import SectionTitle from "./SectionTitle";

function Projects() {
  return (
    <section className="max-w-container mx-auto lgl:px-10 py-24" id="projects">
      <SectionTitle title="Some Things i have built" titleNo="-" />
      <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
        {/* Project one */}
        <div className="w-full flex flex-col items-center justify-center gap-28">
          <div className="flex flex-col xl:flex-row gap-6">
            <div>
              <a href="https://pi-foods-walterceliz.vercel.app/" rel="noopener" target="_blank">
                <Image
                  alt="projectOne"
                  className="w-[100%] h-[80%] object-cover rounded-md"
                  src={projectOne}
                />
              </a>
            </div>

            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
              <div>
                <p className="font-titleFont text-textGreen text-sm tracking-wide">01</p>
                <h3 className="text-2xl font-bold">Henry Foods</h3>
              </div>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                I develop a FullStack APP (PERN) in which you can view, search, filter, sort, and
                create cooking recipes using the spoonacular API
              </p>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                I leaned Responsive Desing and Deploy proccess
              </p>
              <div className="mt-30">
                <ul className="md:text-sm font-titleFont tracking-wide flex justify-between text-textGreen drop-shadow-lg shadow-black">
                  <div className="flex gap-3 mt-8">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>NodeJs</li>
                    <li>Postgres</li>
                    <li>Sequelize</li>
                  </div>
                </ul>
              </div>
              <div className="text-2xl flex gap-4 mt-[-10px]">
                <a
                  className="hover:text-textGreen duration-300 flex flex-row items-center justify-center text-xl font-bold"
                  href="https://pi-foods-walterceliz.vercel.app/"
                  rel="noopener"
                  target="_blank"
                >
                  Preview&nbsp;
                  <RxOpenInNewWindow className="text-2xl" />
                </a>
                <a
                  className="hover:text-textGreen duration-300 flex flex-row items-center justify-center text-xl font-bold"
                  href="https://github.com/Walter-Celiz/Pi-Foods"
                  rel="noopener"
                  target="_blank"
                >
                  GitHub&nbsp;
                  <TbBrandGithub className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Project two */}
        <div className="w-full flex flex-col items-center justify-center gap-28 ">
          <div className="flex flex-col xl:flex-row-reverse gap-6">
            <div>
              <a
                href="https://previews.123rf.com/images/neyro2008/neyro20081510/neyro2008151000223/46402281-bajo-emplazamiento-de-la-obra-p%C3%A1gina-404-la-construcci%C3%B3n-de-la-p%C3%A1gina-web-la-bandera-de-error.jpg"
                rel="noopener"
                target="_blank"
              >
                <Image
                  alt="projectTwo"
                  className="w-[100%] h-[80%] object-cover rounded-md"
                  src={projectTwo}
                />
              </a>
            </div>

            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10">
              <div>
                <p className="font-titleFont text-textGreen text-sm tracking-wide">02</p>
                <h3 className="text-2xl font-bold">Project VideoGames</h3>
              </div>
              <p className="bg-[#112240] text-sm md:text-base p-2 xl:-mr-16  md:p-6 rounded-md">
                I develop a FullStack APP (PERN) in which you can view, search, filter, sort, and
                create Video Games using the rawr API
              </p>
              <p className="bg-[#112240] text-sm md:text-base p-2 xl:-mr-16  md:p-6 rounded-md">
                I leaned Responsive Desing and Deploy proccess
              </p>
              <div className="mt-30">
                <ul className="md:text-sm font-titleFont tracking-wide flex justify-between text-textGreen drop-shadow-lg shadow-black">
                  <div className="flex gap-3 mt-8">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>NodeJs</li>
                    <li>Postgres</li>
                    <li>Sequelize</li>
                  </div>
                </ul>
              </div>
              <div className="text-2xl flex gap-4 mt-[-10px]">
                <a
                  className="hover:text-textGreen duration-300 flex flex-row items-center justify-center text-xl font-bold"
                  href="https://previews.123rf.com/images/neyro2008/neyro20081510/neyro2008151000223/46402281-bajo-emplazamiento-de-la-obra-p%C3%A1gina-404-la-construcci%C3%B3n-de-la-p%C3%A1gina-web-la-bandera-de-error.jpg"
                  rel="noopener"
                  target="_blank"
                >
                  Preview&nbsp;
                  <RxOpenInNewWindow className="text-2xl" />
                </a>
                <a
                  className="hover:text-textGreen duration-300 flex flex-row items-center justify-center text-xl font-bold"
                  href="https://github.com/Walter-Celiz/Pi-VideoGames"
                  rel="noopener"
                  target="_blank"
                >
                  GitHub&nbsp;
                  <TbBrandGithub className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
