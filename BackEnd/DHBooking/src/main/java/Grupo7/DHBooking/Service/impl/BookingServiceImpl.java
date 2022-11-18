package Grupo7.DHBooking.Service.impl;

import Grupo7.DHBooking.Entities.Booking;
import Grupo7.DHBooking.Repository.IBookingRepository;
import Grupo7.DHBooking.Service.IBookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookingServiceImpl implements IBookingService {
    @Autowired
    private IBookingRepository bookingRepository;

    @Override
    public List<Booking> getAll() { return bookingRepository.findAll(); }
    @Override
    public Booking getBookingById(Long idBooking) { return bookingRepository.findById(idBooking).get(); }
    @Override
    public Booking createBooking(Booking booking) { return bookingRepository.save(booking); }
    @Override
    public Booking updateBooking(Booking booking) { return bookingRepository.save(booking); }
    @Override
    public void deleteBooking(Long idBooking) { bookingRepository.deleteById(idBooking); }
}
