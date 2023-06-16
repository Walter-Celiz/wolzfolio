import {motion} from "framer-motion";
import {TiArrowForward} from "react-icons/ti";

function Work2() {
  return (
    <motion.div
      animate={{opacity: 1}}
      className="w-full"
      initial={{opacity: 0}}
      transition={{delay: 0.1}}
    >
      <h3 className="flex gap-1 font-meium text-xl font-titleFont">
        FrontEnd Team <span className="text-textGreen tracking-wide">@snYKers</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">Dic 2022 - Jan 2023</p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark max-w-containerXs">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I helped build an ecommerce, working on the project dashboard, interacting with the API to
          fetch data on user purchases
        </li>
        <li className="text-base flex gap-2 text-textDark max-w-containerXs">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I learned to use CSS Grid to achieve better responsive views
        </li>
        <li className="text-base flex gap-2 text-textDark max-w-containerXs">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I organize the tasks of the front-end team
        </li>
      </ul>
    </motion.div>
  );
}

export default Work2;
