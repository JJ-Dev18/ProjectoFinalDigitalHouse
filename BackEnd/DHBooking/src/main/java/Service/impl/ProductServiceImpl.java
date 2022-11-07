package Service.impl;

import Entities.Product;
import Repository.IProductRepository;
import Service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements IProductService {

    @Autowired
    private IProductRepository productRepository;

    @Override
    public List<Product> getAll() {
        return productRepository.findAll();
    }
    @Override
    public Product getProductById(Long idProduct) {
        return productRepository.findById(idProduct).get();
    }
    @Override
    public Product createProduct(Product product) {
        return productRepository.save(product);
    }
    @Override
    public Product updateProduct(Product product) {
        return productRepository.save(product);
    }
    @Override
    public void deleteProduct(Long idProduct) {
        productRepository.deleteById(idProduct);
    }

}
