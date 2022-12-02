import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import "../styles/user/user.css"
import { Link } from 'react-router-dom';

const UserBookings = () => {

    const { userAuth } = useContext(AuthContext);

    console.log('mis reservas')
    console.log(userAuth.bookingList[0]);

    return (
    <div className="user-bookings">
        <h1>Mis reservas</h1>
        {userAuth.bookingList.map(item => (
            <div className="card">
                <div className="card-header">
                <h3>{item.product.title}</h3>
                </div>
                <div className="card-body">
                    <p>Check-in: {item.startDate}</p>
                    <p>Ingreso: {item.startHour}</p>
                    <p>Check-out:{item.endDate}</p>
                </div>
                <div className="card-footer">
                <Link key={item.product.idProduct} to={`/product-detail/${item.product.idProduct}`}>
                <button>Ver lugar</button>
                </Link>
                </div>
            </div>
        ))}
    </div>
  )
}

export default UserBookings