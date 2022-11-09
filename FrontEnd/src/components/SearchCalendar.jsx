import { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './styles/search-calendar.css'


const SearchCalendar = (props) => {
 
  const windowWidth = window.innerWidth
   
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);


  const onDateChange = (dates) => {

      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);

  }

  return (
    <div className={props.class}>
      <DatePicker 
        inline
        className='picker'
        onChange={onDateChange}
        monthsShown={windowWidth<768 ? 1 : 2}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        formatWeekDay={dayName => dayName.slice(0, 1).toUpperCase()}
        local={"es"}
        minDate={new Date()}
      />
    </div>
  );
}

export default SearchCalendar