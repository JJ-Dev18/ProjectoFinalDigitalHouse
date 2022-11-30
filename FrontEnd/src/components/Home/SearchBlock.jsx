import { useState , useContext } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdCalendar } from "react-icons/io";
import "../styles/home/search-block.css";
import DropDown from "./DropDown";
import SearchCalendar from "../SearchCalendar";
import {
  getProductsByCity,
  getProductsByCityAndDate
} from "../../utils/requestProductsHome";
import DatesProvider from "../../context/DatesProvider";

const SearchBlock = ({ city, setCity, setproducts }) => {
  const [dropDown, setDropDown] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [datesPicked, setDatesPicked] = useState("");
  const [cityInput, setCityInput] = useState("");
  // const [loading, setLoading] = useState(false);

  const { range , setRange } = useContext(DatesProvider);
  console.log('range')
  console.log(range)


  

  const clickCityHandler = () => {
    setDropDown(!dropDown);
    if (showCalendar) setShowCalendar(!showCalendar);
  };
  console.log(datesPicked, "datespicked");
  const clickDateHandler = () => {
    setShowCalendar(!showCalendar);
    if (dropDown) setDropDown(!dropDown);
  };

  const searchProducts = (e) => {
    e.preventDefault();
    if (endDate) {
      // setLoading(true);
      setRange([startDate, endDate])
      getProductsByCityAndDate(
        city,
        startDate.toLocaleDateString("en-US"),
        endDate.toLocaleDateString("en-US")
      ).then((resp) => {
        // setLoading(false);
        setproducts(resp.data);
        console.log(range);
        // setStartDate(null);
        // setEndDate(null);
        // setLoading(false);
      });
    }
    if (!endDate && city != "") {
      getProductsByCity(city).then((resp) => {
        setproducts(resp.data);
        // setStartDate(null);
        // setEndDate(null);
        // setLoading(false);
      });
    }
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
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            startDate={startDate}
            endDate={endDate}
            footer={true}
            clickDateHandler={clickDateHandler}
            setValues={setDatesPicked}
            class={`select picker ${showCalendar ? `active` : `inactive`}`}
          />
        </div>
        <button className="form-button" onClick={searchProducts}>
          Buscar
        </button>
      </form>
    </div>
  );
};

export default SearchBlock;
