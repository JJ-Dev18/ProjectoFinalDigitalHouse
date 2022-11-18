package Grupo7.DHBooking.Service;

import Grupo7.DHBooking.Entities.Booking;

import java.util.List;

public interface IBookingService {
    Booking createBooking(Booking booking);
    Booking getBookingById(Long idBooking);
    Booking updateBooking(Booking booking);
    void deleteBooking(Long idBooking);
    List<Booking> getAll();
}
