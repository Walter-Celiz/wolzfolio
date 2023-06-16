import {motion} from "framer-motion";
import {TiArrowForward} from "react-icons/ti";

function Work1() {
  return (
    <motion.div
      animate={{opacity: 1}}
      className="w-full"
      initial={{opacity: 0}}
      transition={{delay: 0.1}}
    >
      <h3 className="flex gap-1 font-meium text-xl font-titleFont">
        Teaching Assistant <span className="text-textGreen tracking-wide">@FullStack</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">Jul 2022 - Nov 2022</p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark max-w-containerXs">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Full-Stack Teaching Assistant and Bootcamp Helper (TA) for Full-Stack Development
          students.
        </li>
        <li className="text-base flex gap-2 text-textDark max-w-containerXs">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Main tasks: <br />
          • Coordinate a group of students to achieve integration into the study group.
          <br />
          • Guide students in the first steps of the course.
          <br />
          • Assist in exercise resolution and promote group collaboration (Pair Programming).
          <br />
          • Propose ideas for process improvement and progress in the Bootcamp.
          <br />
        </li>
        <li className="text-base flex gap-2 text-textDark max-w-containerXs">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Learn soft skills in a group
        </li>
      </ul>
    </motion.div>
  );
}

export default Work1;
