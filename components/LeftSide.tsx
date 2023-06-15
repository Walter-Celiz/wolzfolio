import {TbBrandGithub} from "react-icons/tb";
import {SlSocialLinkedin} from "react-icons/sl";
import {AiOutlineMail} from "react-icons/ai";

function LeftSide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-textLight">
      <div className="flex flex-col gap-4 ">
        <a href="https://github.com/Walter-Celiz" rel="noopener" target="_blank">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <TbBrandGithub />
          </span>
        </a>
        <a href="https://www.linkedin.com/in/walter-celiz/" rel="noopener" target="_blank">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <SlSocialLinkedin />
          </span>
        </a>
        <a href="mailto:wceliz.dev@gmail.com" rel="noopener" target="_blank">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <AiOutlineMail />
          </span>
        </a>
      </div>
      <div className="w-[2px] h-80 bg-textDark" />
    </div>
  );
}

export default LeftSide;
