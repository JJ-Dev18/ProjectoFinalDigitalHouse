package Grupo7.DHBooking.Service.impl;

import Grupo7.DHBooking.Entities.Booking;
import Grupo7.DHBooking.Entities.Product;
import Grupo7.DHBooking.Repository.IBookingRepository;
import Grupo7.DHBooking.Service.IBookingService;
import Grupo7.DHBooking.Service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.DateFormatter;
import java.text.ParseException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

@Service
public class BookingServiceImpl implements IBookingService {
    @Autowired
    private IBookingRepository bookingRepository;

    @Autowired
    private IProductService productService;

    @Override
    public List<Booking> getAll() {
        return bookingRepository.findAll();
    }

    @Override
    public Booking getBookingById(Long idBooking) {
        return bookingRepository.findById(idBooking).get();
    }

    @Override
    public Booking createBooking(Booking booking) {
        return bookingRepository.save(booking);
    }

    @Override
    public Booking updateBooking(Booking booking) {
        return bookingRepository.save(booking);
    }

    @Override
    public void deleteBooking(Long idBooking) {
        bookingRepository.deleteById(idBooking);
    }

    @Override
    public List<Product> getListOfProductsBetweenDatesAndCity(String startDate, String endDate, Long cityId) throws ParseException {
        List<Product> listProductsAvailable = new ArrayList<Product>();

        List<Product> listProductByCity = productService.getByCity(cityId);

        LocalDate formattedStartDate = parseDocumentDateFormat(startDate);
        LocalDate formattedEndDate = parseDocumentDateFormat(endDate);

        for (Product cityProduct : listProductByCity) {
            List<Booking> listBookingByProductId = bookingRepository.findBookingsByProductId(cityProduct.getIdProduct());
            Boolean state = true;
            for (Booking booking : listBookingByProductId) {
                if (!validateDatesBetweenRange(formattedStartDate, formattedEndDate, booking.getStartDate(), booking.getEndDate())) {
                    state = false;
                    break;
                }
            }
            if(state){
                listProductsAvailable.add(cityProduct);
            }
        }

        return listProductsAvailable;
    }

    private Boolean validateDatesBetweenRange(LocalDate queryStartDate, LocalDate queryEndDate, LocalDate bddStartDate, LocalDate bddEndDate) {
        if (((queryStartDate.compareTo(bddStartDate) >= 0 && queryStartDate.compareTo(bddEndDate) <= 0) || (queryEndDate.compareTo(bddStartDate) >= 0 && queryEndDate.compareTo(bddEndDate) <= 0)) ||
                ((bddStartDate.compareTo(queryStartDate) >= 0 && bddStartDate.compareTo(queryEndDate) <= 0) || (bddEndDate.compareTo(queryStartDate) >= 0 && bddEndDate.compareTo(queryEndDate) <= 0))) {
            return Boolean.FALSE;
        } else {
            return Boolean.TRUE;
        }
    }

    private LocalDate parseDocumentDateFormat(String date) throws ParseException {
        DateTimeFormatter queryFormat = DateTimeFormatter.ofPattern("M/dd/yyyy", Locale.US);
        LocalDate queryDate = LocalDate.parse(date, queryFormat);

        DateTimeFormatter sqlDateForm = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        String stringSQLDate = queryDate.format(sqlDateForm);

        LocalDate SQLDate = LocalDate.parse(stringSQLDate, sqlDateForm);

        return SQLDate;
    }
}
