import { useState } from "react";
import dayjs from "dayjs";
import Day from "./DayOfCalendar";
import CalendarHeader from "./CalendarHeader";
import { dayNames } from "../../utils";
import DayFromPreviousMonth from "./DayFromPreviousMonth";
import weekday from "dayjs/plugin/weekday";

export interface IDay {
  date: number;
  dayOfTheWeek: number;
  month: number;
}

dayjs.extend(weekday);

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(dayjs().month());

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

    const daysOfPrevMonthArray = Array.from(Array(daysOfPrevMonth));

    return { days, daysOfPrevMonthArray };
  }

  const daysInMonth = getDaysInMonth(2022, currentMonth);

  return (
    <main className="flex justify-center items-center">
      <div className="max-w-screen-xl m-auto bg-white">
        <div className="rounded-sm shadow-all-sides shadow-pink-300">
          <CalendarHeader
            currentMonth={currentMonth}
            setCurrentMonth={setCurrentMonth}
          />
          <div className="w-full grid grid-cols-7 gap-0">
            {dayNames.map((day, index) => {
              return (
                <div
                  key={index}
                  className="p-6 flex justify-center items-center border-y border-pink-700 hover:bg-pink-700 text-pink-700 hover:text-white"
                >
                  <p className="text-sm uppercase tracking-wide text-center">
                    {day}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="w-full grid grid-cols-7 gap-0 overflow-hidden">
            {daysInMonth.daysOfPrevMonthArray.map((_, index) => {
              return <DayFromPreviousMonth key={index} />;
            })}
            {daysInMonth.days.map((dayInMonth, index) => {
              return <Day key={index} {...dayInMonth} />;
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Calendar;
