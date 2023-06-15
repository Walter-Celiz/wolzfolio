/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import {useState} from "react";

import SectionTitle from "./SectionTitle";
import ReactBD1 from "./works/ReactBD1";
import ReactBD2 from "./works/ReactBD2";
import ReactBD3 from "./works/ReactBD3";
import ReactBD4 from "./works/ReactBD4";

function Experience() {
  const [workReactBD1, setWorkReactBD1] = useState(true);
  const [workReactBD2, setWorkReactBD2] = useState(false);
  const [workReactBD3, setWorkReactBD3] = useState(false);
  const [workReactBD4, setWorkReactBD4] = useState(false);

  const handleReactBD1 = () => {
    setWorkReactBD1(true);
    setWorkReactBD2(false);
    setWorkReactBD3(false);
    setWorkReactBD4(false);
  };

  const handleReactBD2 = () => {
    setWorkReactBD1(false);
    setWorkReactBD2(true);
    setWorkReactBD3(false);
    setWorkReactBD4(false);
  };

  const handleReactBD3 = () => {
    setWorkReactBD1(false);
    setWorkReactBD2(false);
    setWorkReactBD3(true);
    setWorkReactBD4(false);
  };

  const handleReactBD4 = () => {
    setWorkReactBD1(false);
    setWorkReactBD2(false);
    setWorkReactBD3(false);
    setWorkReactBD4(true);
  };

  return (
    <section className="max-w-container mx-auto py-10 lgl:py-24 px-4" id="experience">
      <SectionTitle title="Where I have worked" titleNo="-" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:-32 flex flex-col">
          <li
            className={`${
              workReactBD1
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
            onClick={handleReactBD1}
          >
            ReactBD1
          </li>
          <li
            className={`${
              workReactBD2
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
            onClick={handleReactBD2}
          >
            ReactBD2
          </li>
          <li
            className={`${
              workReactBD3
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
            onClick={handleReactBD3}
          >
            ReactBD3
          </li>
          <li
            className={`${
              workReactBD4
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
            onClick={handleReactBD4}
          >
            ReactBD4
          </li>
        </ul>
        {workReactBD1 ? <ReactBD1 /> : null}
        {workReactBD2 ? <ReactBD2 /> : null}
        {workReactBD3 ? <ReactBD3 /> : null}
        {workReactBD4 ? <ReactBD4 /> : null}
      </div>
    </section>
  );
}

export default Experience;
