import { useState } from 'react'
import Calendar from 'react-calendar'
import './styles/calendar.css'
import 'react-calendar/dist/Calendar.css'
import { useGlobalStates } from './Context'

const SearchCalendar = (props) => {
    
  const [dates, setDates] = useState('')
  
  const onDateChange = (dates) => {  
      const startDate = dates[0].toString().split(' ');
      const endDate = dates[1].toString().split(' ');
      const startDateStr = startDate[2] + ' de '+ startDate[1].toLowerCase();
      const endDateStr = endDate[2] + ' de '+ endDate[1].toLowerCase();
      
      let inputString = '';
      startDateStr === endDateStr ? inputString =  startDateStr + '.' : inputString = startDateStr + ' - ' + endDateStr + '.';
      props.setValues("        " + inputString);
      console.log(inputString);
  }

  return (
    <div className={props.class}>
        <Calendar onChange={onDateChange} value={dates} next2Label={null} prev2Label={null} selectRange={true} returnValue="range"/>
    </div>
  )
}

export default SearchCalendar