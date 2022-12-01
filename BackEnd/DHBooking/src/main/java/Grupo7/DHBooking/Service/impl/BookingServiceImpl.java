package Grupo7.DHBooking.Service.impl;

import Grupo7.DHBooking.Entities.Booking;
import Grupo7.DHBooking.Entities.Product;
import Grupo7.DHBooking.Repository.IBookingRepository;
import Grupo7.DHBooking.Service.IBookingService;
import Grupo7.DHBooking.Service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
        System.out.println("Entré en getListOfProductsBetweenDatesAndCity");
        List<Product> listProductsAvailable = new ArrayList<Product>();
        List<Product> listProduct;
        if(cityId!=null) {
            listProduct = productService.getByCity(cityId);
        }else{
            listProduct = productService.getAll();
        }

        LocalDate formattedStartDate = parseDocumentDateFormat(startDate);
        LocalDate formattedEndDate = parseDocumentDateFormat(endDate);



        if(cityId!=null){
            for (Product cityProduct : listProduct) {
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
        }else{
            for (Product cityProduct : listProduct) {
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
        }
        System.out.println(listProductsAvailable);
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

    public LocalDate parseDocumentDateFormat(String date) throws ParseException {
        String[] separatedString = date.split("/");
        Integer day = Integer.parseInt(separatedString[0]);
        Integer month = Integer.parseInt(separatedString[1]);

        DateTimeFormatter queryFormat;

        if(day < 10 || month < 10){
            queryFormat = DateTimeFormatter.ofPattern("M/d/yyyy", Locale.US);
        } else {
            queryFormat = DateTimeFormatter.ofPattern("MM/dd/yyyy", Locale.US);
        }

        LocalDate queryDate = LocalDate.parse(date, queryFormat);
        DateTimeFormatter sqlDateForm = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        String stringSQLDate = queryDate.format(sqlDateForm);

        LocalDate SQLDate = LocalDate.parse(stringSQLDate, sqlDateForm);

        return SQLDate;
    }
}
