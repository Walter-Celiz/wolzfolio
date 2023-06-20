import Image from "next/image";
import {TbBrandGithub} from "react-icons/tb";
import {RxOpenInNewWindow} from "react-icons/rx";

import {projectOne, projectThree, projectTwo} from "@/public/assets";

import SectionTitle from "./SectionTitle";

function Projects() {
  return (
    <section className="max-w-container mx-auto lgl:px-20 py-24" id="projects">
      <SectionTitle title="Projects" titleNo="-" />
      <div className="flex flex-col items-center justify-between gap-14 mt-10 lgl:max-w-container">
        {/* Project one */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <div className="">
              <a
                className="w-full xl:w-1/2 h-auto relative group"
                href="https://pi-foods-walterceliz.vercel.app/"
                rel="noopener"
                target="_blank"
              >
                <Image
                  alt="projectOne"
                  className="w-[100%] h-[78%] object-cover rounded-md imgCustom"
                  src={projectOne}
                />
              </a>
            </div>

            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
              {/* <p className="font-titleFont text-textGreen text-sm tracking-wide">01</p> */}
              <h3 className="text-2xl font-bold text-textGreen h3Custom">Henry Foods</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md mt-[-15px] pCustom">
                I develop a FullStack APP (PERN) in which you can view, search, filter, sort, and
                create cooking recipes using the spoonacular API
              </p>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md pCustom">
                I leaned Responsive Desing and Deploy proccess
              </p>
              <ul className="md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textGreen ulCustom">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Redux</li>
                <li>NodeJs</li>
                <li>Postgres</li>
                <li>Sequelize</li>
              </ul>
              <div className="text-2xl flex gap-4 divCustom">
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
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row-reverse gap-6">
            <div>
              <a
                className="w-full xl:w-1/2 h-auto relative group"
                href="https://previews.123rf.com/images/neyro2008/neyro20081510/neyro2008151000223/46402281-bajo-emplazamiento-de-la-obra-p%C3%A1gina-404-la-construcci%C3%B3n-de-la-p%C3%A1gina-web-la-bandera-de-error.jpg"
                rel="noopener"
                target="_blank"
              >
                <Image
                  alt="projectTwo"
                  className="w-[100%] h-[78%] object-cover rounded-md imgCustom2"
                  src={projectTwo}
                />
              </a>
            </div>

            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10">
              {/* <p className="font-titleFont text-textGreen text-sm tracking-wide">02</p> */}
              <h3 className="text-2xl font-bold text-textGreen h3Custom2">Project VideoGames</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 xl:-mr-16 rounded-md pCustom2">
                I develop a FullStack APP (PERN) in which you can view, search, filter, sort, and
                create cooking recipes using the rawr API
              </p>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 xl:-mr-16 rounded-md pCustom2">
                I leaned Responsive Desing and Deploy proccess
              </p>
              <ul className=" md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textGreen ulCustom">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Redux</li>
                <li>NodeJs</li>
                <li>Postgres</li>
                <li>Sequelize</li>
              </ul>
              <div className="text-2xl flex gap-4 divCustom">
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
        {/* Project three */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <div className="">
              <a
                className="w-full xl:w-1/2 h-auto relative group"
                href="https://snykers.vercel.app/"
                rel="noopener"
                target="_blank"
              >
                <Image
                  alt="projectThree"
                  className="w-[100%] h-[78%] object-cover rounded-md imgCustom"
                  src={projectThree}
                />
              </a>
            </div>

            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
              {/* <p className="font-titleFont text-textGreen text-sm tracking-wide">01</p> */}
              <h3 className="text-2xl font-bold text-textGreen h3Custom">snYKers</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md mt-[-15px] pCustom">
                The general idea is to create an eComerce in which you can buy and see different
                shoes available along with relevant information about, while the purchases and the
                users can be administrated by the admin users, and from there you can, among others
                stuff: Buy Shoes Create Shoes Control orders and users Total Crud Giving feedback
                Recive notifications
              </p>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md pCustom">
                I leaned GitFlow, Redux Toolkit, CSS Grid, Agile
              </p>
              <ul className="md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textGreen ulCustom">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>RTK</li>
                <li>NodeJs</li>
                <li>MongoDB</li>
                <li>Others</li>
              </ul>
              <div className="text-2xl flex gap-4 divCustom">
                <a
                  className="hover:text-textGreen duration-300 flex flex-row items-center justify-center text-xl font-bold"
                  href="https://snykers.vercel.app/"
                  rel="noopener"
                  target="_blank"
                >
                  Preview&nbsp;
                  <RxOpenInNewWindow className="text-2xl" />
                </a>
                <a
                  className="hover:text-textGreen duration-300 flex flex-row items-center justify-center text-xl font-bold"
                  href="https://github.com/snYKersCompany/shoes-eComerce"
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
