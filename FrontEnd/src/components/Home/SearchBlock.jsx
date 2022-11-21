import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdCalendar } from "react-icons/io";
import "../styles/home/search-block.css";
import DropDown from "./DropDown";
import SearchCalendar from "../SearchCalendar";

const SearchBlock = ({ city, setCity }) => {
  const [dropDown, setDropDown] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  const [datesPicked, setDatesPicked] = useState("");

  const [cityInput, setCityInput] = useState("");

  const clickCityHandler = () => {
    setDropDown(!dropDown);
    if (showCalendar) setShowCalendar(!showCalendar);
    console.log(dropDown);
  };

  const clickDateHandler = () => {
    setShowCalendar(!showCalendar);
    if (dropDown) setDropDown(!dropDown);
    console.log(showCalendar);
  };

  return (
    <div className="search-block">
      <h1>Busca ofertas en hoteles, casas y mucho más</h1>
      <form>
        <div>
          <div className="input-container">
            <div className="input-icon">
              <div className="icon">
                <FaMapMarkerAlt />
              </div>
              <input
                readOnly
                value={cityInput}
                className=""
                id="city"
                type="text"
                onClick={clickCityHandler}
                placeholder="          ¿A dónde vamos?"
              />
            </div>
            <DropDown
              clickCityHandler={clickCityHandler}
              setCity={setCity}
              setCityInput={setCityInput}
              class={`select dropdown ${dropDown ? `active` : `inactive`}`}
            />
          </div>
        </div>
        <div className="input-container">
          <div className="input-icon">
            <div className="icon">
              <IoMdCalendar />
            </div>
            <input
              readOnly
              value={datesPicked}
              className=""
              id="dates"
              type="text"
              onClick={clickDateHandler}
              placeholder="          Check in - Check - out"
            />
          </div>
          <SearchCalendar
            clickDateHandler={clickDateHandler}
            setValues={setDatesPicked}
            class={`select picker ${showCalendar ? `active` : `inactive`}`}
          />
        </div>
        <button className="form-button">Buscar</button>
      </form>
    </div>
  );
};

export default SearchBlock;
