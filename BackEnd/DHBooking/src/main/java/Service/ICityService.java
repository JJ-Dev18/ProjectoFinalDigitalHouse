package Service;

import Entities.City;
import java.util.List;

public interface ICityService {
    City createCity(City city);
    City getCityById(Integer idCity);
    City updateCity(City city);
    void deleteCity(Integer idCity);
    List<City> getAll();

}
