import { useState } from "react";
import { CalendarDaysIcon, UserIcon } from "@heroicons/react/20/solid";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { monthNames } from "../utils";
import dayjs from "dayjs";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const currentMonth = monthNames[dayjs().month()];

  return (
    <nav className="container mx-auto my-3 flex flex-wrap items-center justify-between w-8/12">
      <div className="w-full flex justify-between lg:w-auto">
        <Link to="/">
          <img
            src="https://i.postimg.cc/52k5g7Zx/Screenshot-24.png"
            alt="cityEventsLogo"
            className="h-auto max-h-24 w-full"
          />
        </Link>

        <button
          className="cursor-pointer text-primary leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <Bars3Icon className="h-4 w-4" />
        </button>
      </div>
      <div
        className={
          "lg:flex flex-grow items-center" + (navbarOpen ? " flex" : " hidden")
        }
      >
        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li className="nav-item">
            <Link
              to="/auth"
              className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-darkBrown hover:opacity-75"
            >
              <span className="mr-1">Sign in</span>
              <UserIcon className="h-4 w-4" />
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={`/calendar/${currentMonth}`}
              className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-darkBrown hover:opacity-75"
            >
              <span className="mr-1">Calendar</span>
              <CalendarDaysIcon className="h-4 w-4" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
