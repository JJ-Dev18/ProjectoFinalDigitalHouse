package Service.impl;

import Entities.City;
import Repository.ICityRepository;
import Service.ICityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CityServiceImpl implements ICityService {
    @Autowired
    private ICityRepository cityRepository;

    @Override
    public List<City> getAll() { return cityRepository.findAll(); }
    @Override
    public City getCityById(Integer idCity) {
        return cityRepository.findById(idCity).get();
    }
    @Override
    public City createCity(City city) { return cityRepository.save(city); }
    @Override
    public City updateCity(City city) { return cityRepository.save(city); }
    @Override
    public void deleteCity(Integer idCity) {
        cityRepository.deleteById(idCity);
    }

}
