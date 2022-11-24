import { useEffect } from 'react';
import { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './styles/home/search-calendar.css'


const SearchCalendar = (props) => {
 
  const windowWidth = window.innerWidth
 

  const onDateChange = (dates) => {
      
      const [start, end] = dates;
      props.setStartDate(start);
      props.setEndDate(end);
      if(props.booking){
        props.setcheckin(start.toLocaleDateString())
        if(end){
          props.setcheckout(end.toLocaleDateString())
        }else props.setcheckout("___/___/____");
      }
      
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
    
    const startDateStr = props.startDate.toString().split(' ')[2] + ' de '+ props.startDate.toString().split(' ')[1].toLowerCase();
    const endDateStr   = props.endDate.toString().split(' ')[2] + ' de '+ props.endDate.toString().split(' ')[1].toLowerCase();
    let inputString = '';
    startDateStr === endDateStr ? inputString =  startDateStr + '.' : inputString = startDateStr + ' - ' + endDateStr + '.';
    props.setValues("        " + inputString);
    props.clickDateHandler();
    // props.setStartDate(null);
    // props.setEndDate(null);
  }


  return (
    <div className={props.class}>
      {props.booking && <h1>Seleccioná tu fecha de reserva</h1>}
      <DatePicker
        selected={props.startDate}
        onChange={onDateChange}
        startDate={props.startDate}
        endDate={props.endDate}
        selectsRange
        inline
        monthsShown={windowWidth < 768 ? 1 : 2}
        formatWeekDay={(dayName) => dayName.slice(0, 1).toUpperCase()}
        local={"es"}
      >
        {props.footer && (
          <div className="calendar-footer">
            <button
              className="calendar-button"
              onClick={(e) => onClik(e, props.startDate, props.endDate)}
            >
              Aplicar
            </button>
          </div>
        )}
      </DatePicker>
    </div>
  );
}

export default SearchCalendar