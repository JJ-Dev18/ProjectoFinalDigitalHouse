import { useEffect , useContext } from 'react';
import { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './styles/home/search-calendar.css'
import DatesProvider from '../context/DatesProvider';


const SearchCalendar = (props) => {
 
  const windowWidth = window.innerWidth;

  console.log(props)
  const { range , setRange } = useContext(DatesProvider);

  console.log('soy range dentro de calendario')
  console.log(range)

  const onDateChange = (dates) => {
      
      const [start, end] = dates;
      props.setStartDate(start);
      props.setEndDate(end);
      setRange([start,end]);
      //setDatesRange([start, end])
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
    
    // const startDateStr = props.startDate.toString().split(' ')[2] + ' de '+ props.startDate.toString().split(' ')[1].toLowerCase();
    // const endDateStr   = props.endDate.toString().split(' ')[2] + ' de '+ props.endDate.toString().split(' ')[1].toLowerCase();
    const startDateStr = range[0].toString().split(' ')[2] + ' de '+ range[0].toString().split(' ')[1].toLowerCase();
    const endDateStr   = range[1].toString().split(' ')[2] + ' de '+ range[1].toString().split(' ')[1].toLowerCase();
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
        selected={range[0]}
        onChange={onDateChange}
        startDate={range[0]}
        endDate={range[1]}
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