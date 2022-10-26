import { useState } from 'react'
import Calendar from 'react-calendar'
import './styles/calendar.css'
import 'react-calendar/dist/Calendar.css'

const SearchCalendar = (props) => {
    
  const [date, setDate] = useState(new Date());
  
  const onDateChange = (dates) => {
      setDate(dates);
      console.log(dates);
  }

  return (
    <div className={props.class}>
        <Calendar onChange={onDateChange} value={date} next2Label={null} prev2Label={null} selectRange={true} returnValue="range"/>
    </div>
  )
}

export default SearchCalendar