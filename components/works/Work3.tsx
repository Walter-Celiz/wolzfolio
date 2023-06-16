import {motion} from "framer-motion";
import {TiArrowForward} from "react-icons/ti";

function Work3() {
  return (
    <motion.div
      animate={{opacity: 1}}
      className="w-full"
      initial={{opacity: 0}}
      transition={{delay: 0.1}}
    >
      <h3 className="flex gap-1 font-meium text-xl font-titleFont">
        Trainee <span className="text-textGreen tracking-wide">@FrontEnd</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">Mar 2023 - Apr 2023</p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark max-w-containerXs">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          My main task was to refactor old React code into a more modern and maintainable code,
          following the Clean Code structure
        </li>
        <li className="text-base flex gap-2 text-textDark max-w-containerXs">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Redesigning the main view of the app dashboard to be multi-platform
        </li>
        <li className="text-base flex gap-2 text-textDark max-w-containerXs">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I learned the basics of Tailwind CSS to apply them in the project
        </li>
      </ul>
    </motion.div>
  );
}

export default Work3;
