import {motion} from "framer-motion";
import {TiArrowForward} from "react-icons/ti";

function ReactBD2() {
  return (
    <motion.div
      animate={{opacity: 1}}
      className="w-full"
      initial={{opacity: 0}}
      transition={{delay: 0.1}}
    >
      <h3 className="flex gap-1 font-meium text-xl font-titleFont">
        Engineer <span className="text-textGreen tracking-wide">@ReactBD2</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">Jan 2033 - adjkasld</p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark max-w-containerXs">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Write modern, perdomant, maintainable code client and internal projects
        </li>
        <li className="text-base flex gap-2 text-textDark max-w-containerXs">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Write modern, perdomant, maintainable code client and internal projects, Write modern,
          perdomant, maintainable code client and internal projects
        </li>
        <li className="text-base flex gap-2 text-textDark max-w-containerXs">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quaerat, perspiciatis
          maxime asperiores esse non quas blanditiis ipsum, ut reiciendis laboriosam assumenda
          inventore doloribus autem corrupti iusto illum tempora incidunt.
        </li>
      </ul>
    </motion.div>
  );
}

export default ReactBD2;
