import { Dispatch, SetStateAction } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";
import { monthNames } from "../../utils";

interface ICalendarHeaderProps {
  currentMonth: number;
  setCurrentMonth: Dispatch<SetStateAction<number>>;
}

const CalendarHeader = ({
  currentMonth,
  setCurrentMonth,
}: ICalendarHeaderProps) => {
  const month = monthNames[currentMonth];

  const setNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const setPrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  return (
    <div className="m-auto">
      <div className="w-full px-2 h-20 flex justify-center items-center">
        <button onClick={setPrevMonth} aria-label={"previous_month"}>
          <ArrowLeftIcon className="h-5 w-5 text-primary" />
        </button>
        <p className="text-xl tracking-wider w-28 text-center font-sans text-primary">
          {month}
        </p>
        <button onClick={setNextMonth} aria-label={"next_month"}>
          <ArrowRightIcon className="h-5 w-5 text-primary" />
        </button>
      </div>
    </div>
  );
};

export default CalendarHeader;
