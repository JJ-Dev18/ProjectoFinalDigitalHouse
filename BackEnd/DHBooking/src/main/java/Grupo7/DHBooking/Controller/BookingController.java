package Grupo7.DHBooking.Controller;

import Grupo7.DHBooking.Entities.Booking;
import Grupo7.DHBooking.Entities.Product;
import Grupo7.DHBooking.Service.IBookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/bookings")
public class BookingController {
    @Autowired
    private IBookingService bookingService;

    @GetMapping
    public ResponseEntity<List<Booking>> getAllBookings(){
        return new ResponseEntity<>(bookingService.getAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Booking> getBookingById(@PathVariable Long id){
        Optional<Booking> bookingFound = Optional.ofNullable(bookingService.getBookingById(id));
        if(bookingFound.isPresent()){
            return ResponseEntity.ok(bookingFound.get());
        } else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/listAvailableProducts")
    public ResponseEntity<List<Product>> listAvailableProducts(@RequestBody Map<String, String> json) throws ParseException {
        Optional<List<Product>> listAvailableProducts = Optional.ofNullable(bookingService.getListOfProductsBetweenDatesAndCity(json.get("startDate"), json.get("endDate"), Long.valueOf(json.get("cityId"))));
        if(listAvailableProducts.isPresent()){
            return ResponseEntity.ok(listAvailableProducts.get());
        } else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<Booking> createBooking(@RequestBody Booking booking){
        return new ResponseEntity<>(bookingService.createBooking(booking), HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<Booking> updateBooking(@RequestBody Booking booking){
        Optional<Booking> bookingToUpdate = Optional.ofNullable(bookingService.getBookingById(booking.getIdBooking()));
        if (bookingToUpdate.isPresent()){
            return ResponseEntity.ok(bookingService.updateBooking(booking));
        }
        else{
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteBooking(@PathVariable Long id){
        Optional<Booking> bookingQuery = Optional.ofNullable(bookingService.getBookingById(id));
        if (bookingQuery.isPresent()){
            bookingService.deleteBooking(id);
            return ResponseEntity.ok("La reserva con ID = " + id + " ha sido eliminada.");
        }
        else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
