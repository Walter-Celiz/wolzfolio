/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import {useState} from "react";

import SectionTitle from "./SectionTitle";
import Work1 from "./works/Work1";
import Work2 from "./works/Work2";
import Work3 from "./works/Work3";
// import Work4 from "./works/Work4";

function Experience() {
  const [work1, setWork1] = useState(true);
  const [work2, setWork2] = useState(false);
  const [work3, setWork3] = useState(false);
  // const [work4, setWork4] = useState(false);

  const handleWork1 = () => {
    setWork1(true);
    setWork2(false);
    setWork3(false);
    // setWork4(false);
  };

  const handleWork2 = () => {
    setWork1(false);
    setWork2(true);
    setWork3(false);
    // setWork4(false);
  };

  const handleWork3 = () => {
    setWork1(false);
    setWork2(false);
    setWork3(true);
    // setWork4(false);
  };

  // const handleWork4 = () => {
  //   setWorkR1(false);
  //   setWorkR2(false);
  //   setWorkR3(false);
  //   setWorkR4(true);
  // };

  return (
    <section className="max-w-container mx-auto py-10 lgl:py-24 px-4" id="experience">
      <SectionTitle title="Where I have worked" titleNo="-" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:-32 flex flex-col">
          <li
            className={`${
              work1 ? "border-l-textGreen text-textGreen" : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
            onClick={handleWork1}
          >
            Henry
          </li>
          <li
            className={`${
              work2 ? "border-l-textGreen text-textGreen" : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
            onClick={handleWork2}
          >
            Henry[Lab]
          </li>
          <li
            className={`${
              work3 ? "border-l-textGreen text-textGreen" : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
            onClick={handleWork3}
          >
            HGA Team
          </li>
          {/* <li
            className={`${
              work4
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
            onClick={handleWork4}
          >
            ReactBD4
          </li> */}
        </ul>
        {work1 ? <Work1 /> : null}
        {work2 ? <Work2 /> : null}
        {work3 ? <Work3 /> : null}
        {/* {work4 ? <Work4 /> : null} */}
      </div>
    </section>
  );
}

export default Experience;
