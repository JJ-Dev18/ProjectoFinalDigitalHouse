import { useEffect } from 'react';
import { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './styles/search-calendar.css'


const SearchCalendar = (props) => {
 
  const windowWidth = window.innerWidth
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);


  const onDateChange = (dates) => {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);
  }
      //     const startDateStr = dates[0].toString().split(' ')[2] + ' de '+ dates[0].toString().split(' ')[1].toLowerCase();
  //     const endDateStr   = dates[1].toString().split(' ')[2] + ' de '+ dates[1].toString().split(' ')[1].toLowerCase();
  //     let inputString = '';
  //     startDateStr === endDateStr ? inputString =  startDateStr + '.' : inputString = startDateStr + ' - ' + endDateStr + '.';
  //     props.setValues("        " + inputString);
  //     props.clickDateHandler();
  //     setStartDate(null);
  //     setEndDate(null);
  // }
  

  const onClik = (e, startDate,endDate) => {
    e.preventDefault();
    console.log('hola')
    console.log(startDate, endDate)
    const startDateStr = startDate.toString().split(' ')[2] + ' de '+ startDate.toString().split(' ')[1].toLowerCase();
    const endDateStr   = endDate.toString().split(' ')[2] + ' de '+ endDate.toString().split(' ')[1].toLowerCase();
    let inputString = '';
    startDateStr === endDateStr ? inputString =  startDateStr + '.' : inputString = startDateStr + ' - ' + endDateStr + '.';
    props.setValues("        " + inputString);
    props.clickDateHandler();
    setStartDate(null);
    setEndDate(null);
  }


  return (
    <div className={props.class}>
      <DatePicker
        selected={startDate}
        onChange={onDateChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange 
        inline
        monthsShown={windowWidth<768 ? 1 : 2}
        formatWeekDay={dayName => dayName.slice(0, 1).toUpperCase()}
        local={"es"}
        >
        <div className='calendar-footer'>
          <button className='calendar-button'  onClick={ e => onClik(e, startDate, endDate)}>Aplicar</button>
        </div>
        </DatePicker>  
    </div>
  );
}

export default SearchCalendar