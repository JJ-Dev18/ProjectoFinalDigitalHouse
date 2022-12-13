import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import "../styles/user/user.css"
import { Link } from 'react-router-dom';
import { RiLoginCircleFill } from "react-icons/ri";
import { RiLogoutCircleFill } from "react-icons/ri";
import { TbClock2 } from "react-icons/tb";
import { useEffect } from "react";
import { getBookingsByUserId } from "../../utils/bookings";
import { useState } from "react";
import Loading from "../Loading";

const UserBookings = () => {

    const [userBookings , setUserBookings] = useState([])
    const [ isLoadingBookings, setIsLoadingBookings] = useState(true)
    const { userAuth} = useContext(AuthContext);
    console.log(userAuth);

        
    useEffect ( () => {
            console.log('hola')
            console.log(getBookingsByUserId (userAuth.idUser, userAuth.token).then(resp => {
                setUserBookings(resp.data);
                setIsLoadingBookings(false)
            }))
        }, [])

    //!isLoadingBookings&&console.log(userBookings)

    return (
    <div className="user-bookings">
        <h1>Mis reservas</h1>
        {isLoadingBookings ? <Loading /> : userBookings?.map(item => (
            <div>
                <div className="booking-state">
                    <p>{new Date(item.endDate).setDate(new Date(item.endDate).getDate()) < (new Date()) ? "Realizada" : "Vigente"}</p>
                </div>
                <div className={ `card ${new Date(item.endDate).setDate(new Date(item.endDate).getDate()) < (new Date())? `inactive` : `active`} `}>
                    <div className="card-header">
                    <h3>{item.product.title}</h3>
                    </div>
                    <div className="card-body">
                        <p className="card-body-item"> <span> <RiLoginCircleFill className="card-body-item-icon in" />  Check-in: </span> {item.startDate}</p>
                        <hr />
                        <p className="card-body-item"> <span> <TbClock2 className="card-body-item-icon"  /> Ingreso: </span> {item.startHour} Hs</p>
                        <hr />
                        <p className="card-body-item"> <span> <RiLogoutCircleFill className="card-body-item-icon out"  /> Check-out: </span> {item.endDate}</p>
                    </div>
                    <div className="card-footer">
                    <Link key={item.product.idProduct} to={`/product-detail/${item.product.idProduct}`}>
                    <button>Ver lugar</button>
                    </Link>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default UserBookings