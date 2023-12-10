import { TbError404 } from "react-icons/tb";
import { SiVlcmediaplayer } from "react-icons/si";
import { NavLink } from "react-router-dom";
import { AiOutlineEnter } from "react-icons/ai";

export default function ErrorPage404() {
  return (
    <div className="w-full h-screen grid place-content-center gap-2">
      <div className="flex text-[9rem] items-center justify-center text-danger-normal/70">
        <SiVlcmediaplayer className="text-[8rem]" />
        <TbError404 />
      </div>
      <p className="text-2xl">
        <span className="text-danger-normal font-medium">Error 404! </span>
        Page Not Found.
      </p>
      <div className="pt-3 flex gap-2 items-center">
        <NavLink
          to="/"
          className="cursor-pointer hover:underline hover:text-primary-dark"
        >
          Go back to Home
        </NavLink>
        <div className="w-fit px-1 bg-primary-dark text-white">
          <NavLink to="/">
            <AiOutlineEnter className="text-3xl p-1" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}
