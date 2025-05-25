import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import {
    add,
    eachDayOfInterval,
    endOfMonth,
    format,
    getDay,
    isSameDay,
    isSameMonth,
    startOfToday,
    sub,
} from 'date-fns'
import { useState } from 'react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function CalendarGrid({ checkIn, checkOut, onDateSelect }) {
    const today = startOfToday()
    const [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))

    function parseDate(str) {
        return new Date(format(new Date(str), 'yyyy-MM-01'))
    }

    function startOfWeek(date) {
        const day = getDay(date)
        return sub(date, { days: day })
    }

    function endOfWeek(date) {
        const day = getDay(date)
        return add(date, { days: 6 - day })
    }

    const firstDayCurrentMonth = parseDate(currentMonth)

    const days = eachDayOfInterval({
        start: startOfWeek(firstDayCurrentMonth),
        end: endOfWeek(endOfMonth(firstDayCurrentMonth)),
    })

    const handlePrevMonth = () => {
        const firstDayPrev = sub(firstDayCurrentMonth, { months: 1 })
        setCurrentMonth(format(firstDayPrev, 'MMM-yyyy'))
    }

    const handleNextMonth = () => {
        const firstDayNext = add(firstDayCurrentMonth, { months: 1 })
        setCurrentMonth(format(firstDayNext, 'MMM-yyyy'))
    }

    const isInRange = (day) => {
        return checkIn && checkOut && day >= checkIn && day <= checkOut
    }

    return (
        <div className="p-4 max-w-md mx-auto">
            <div className="flex items-center justify-between mb-4">
                <button onClick={handlePrevMonth}>
                    <ChevronLeftIcon className="w-5 h-5" />
                </button>
                <h2 className="text-lg font-bold">
                    {format(firstDayCurrentMonth, 'MMMM yyyy')}
                </h2>
                <button onClick={handleNextMonth}>
                    <ChevronRightIcon className="w-5 h-5" />
                </button>
            </div>

            <div className="grid grid-cols-7 text-center text-sm font-medium text-gray-500 mb-2">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                    <div key={day}>{day}</div>
                ))}
            </div>

            <div className="grid grid-cols-7 text-center text-sm gap-1">
                {days.map((day) => {
                    const isToday = isSameDay(day, today)
                    const isStart = isSameDay(day, checkIn)
                    const isEnd = isSameDay(day, checkOut)
                    const inRange = isInRange(day)

                    return (
                        <button
                            key={day.toString()}
                            onClick={() => onDateSelect(day)}
                            className={classNames(
                                'py-1 rounded-md border',
                                isSameMonth(day, firstDayCurrentMonth)
                                    ? 'bg-white'
                                    : 'bg-gray-100 text-gray-400',
                                inRange && 'bg-green-100',
                                isStart && 'bg-green-500 text-white font-bold',
                                isEnd && 'bg-red-500 text-white font-bold',
                                isToday && !isStart && !isEnd && 'ring-1 ring-blue-400',
                                'hover:bg-gray-200'
                            )}
                        >
                            {format(day, 'd')}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}
