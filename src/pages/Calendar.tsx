import { useEffect, useRef, useState } from "react";
import dayjs from "dayjs";
import Day from "../components/Calendar/DayOfCalendar";
import CalendarHeader from "../components/Calendar/CalendarHeader";
import { daysOfTheWeekNames, monthNames } from "../utils";
import DayFromPreviousMonth from "../components/Calendar/DayFromPreviousMonth";
import weekday from "dayjs/plugin/weekday";
import { useNavigate, useParams } from "react-router-dom";

export interface IDay {
  date: number;
  dayOfTheWeek: number;
  month: number;
}

type DaysOfOtherMonth = "prev" | "next";

dayjs.extend(weekday);

const Calendar = () => {
  const navigate = useNavigate();
  const { monthName } = useParams();

  const [currentMonth, setCurrentMonth] = useState(
    monthNames.indexOf(monthName!)
  );

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    navigate(`/calendar/${monthNames[currentMonth]}`);
  }, [currentMonth]);

  const updateDimensions = () => {
    setScreenWidth(window.innerWidth);
  };

  window.addEventListener("resize", updateDimensions);

  function getDaysInMonth(year: number, month: number) {
    let day = 0;
    let days: IDay[] = [];

    const monthDigit = month + 1 < 10 ? `0${month + 1}` : `${month + 1}`;

    const daysInMonthString = `${year}-${monthDigit}-01`;

    const daysInMonth = dayjs(daysInMonthString).daysInMonth();

    for (let i = 0; i < daysInMonth; i++) {
      day++;
      days.push({
        date: dayjs().year(year).month(month).date(day).date(),
        dayOfTheWeek: dayjs().year(year).month(month).date(day).weekday(),
        month: dayjs().year(year).month(month).date(day).month(),
      });
    }

    const daysOfPrevMonth = days[0].dayOfTheWeek;
    const dayOfNextMonth = 7 - (days[days.length - 1].dayOfTheWeek + 1);

    const getDaysOfOtherMonth = (daysOfOtherMonth: DaysOfOtherMonth) => {
      return Array.from(
        Array(daysOfOtherMonth === "next" ? dayOfNextMonth : daysOfPrevMonth)
      );
    };
    return { days, getDaysOfOtherMonth };
  }

  const daysInMonth = getDaysInMonth(2022, currentMonth);

  return (
    <div className="flex justify-center items-center mb-20">
      <div className="w-auto lg:w-8/12 m-auto bg-white">
        <div className="rounded-sm shadow-all-sides shadow-primary">
          <CalendarHeader
            currentMonth={currentMonth}
            setCurrentMonth={setCurrentMonth}
          />
          <div className="w-full grid grid-cols-7 gap-0">
            {daysOfTheWeekNames.map((day, index) => {
              return (
                <div
                  key={index}
                  className="p-6 flex justify-center items-center border-y border-secondary hover:bg-secondary text-secondary hover:text-white"
                >
                  <p className="text-sm uppercase tracking-wide text-center">
                    {screenWidth > 600 ? day : day.slice(0, 3)}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="w-full grid grid-cols-7 gap-0 overflow-hidden">
            {daysInMonth.getDaysOfOtherMonth("prev").map((_, index) => {
              return <DayFromPreviousMonth key={index} />;
            })}
            {daysInMonth.days.map((dayInMonth, index) => {
              return <Day key={index} {...dayInMonth} />;
            })}
            {daysInMonth.getDaysOfOtherMonth("next").map((_, index) => {
              return <DayFromPreviousMonth key={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
